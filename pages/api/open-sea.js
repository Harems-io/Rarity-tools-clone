// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Redis from "ioredis"

import { round2Dec } from "../../util/round"
import { sortByPath } from "../../util/sort"

const CACHE_KEEP_TIME_S = 43200
const API_REQUEST_LIMIT_MS = 750
const TOTAL_REQUESTS = 200
const MAX_COLLECTIONS_PER_CACHE_REQUEST = 500
const MAX_COLLECTIONS_PER_REQUEST = 250

const NEWEST_COLLECTIONS_TOTAL_NUM = 12

const TOP10_LISTS = {
  top10by7DayVol: {stat: "seven_day_volume", unit: "ETH"},
  top10byTotalVol: {stat: "total_volume", unit: "ETH"},
  top10by7DayAvgPrice: {stat: "seven_day_average_price", unit: "ETH"},
  top10byNumOwners: {stat: "num_owners", unit: "Owners"}
}

const rootFields = [
  "banner_image_url",
  "created_date",
  "description",
  "image_url",
  "name",
  "slug"
]
const statFields = [
  "seven_day_volume",
  "seven_day_sales",
  "seven_day_average_price",
  "total_supply",
  "num_owners",
  "owner_pct",
  "market_cap",
  "total_volume",
  "total_sales"
]

const top10ByStat = (collectionArray, stat) => {
  const collectionsSubset = JSON.parse(JSON.stringify(collectionArray))

  return sortByPath(collectionsSubset, ["stats", stat]).slice(0, 10)
}

const newestCollections = (collectionArray) => {
  const collectionsSubset = JSON.parse(JSON.stringify(collectionArray))

  return sortByPath(collectionArray, ["created_date"]).slice(0, NEWEST_COLLECTIONS_TOTAL_NUM)
}

const addAdditionalAttributes = (collectionsArray) => {
  return collectionsArray.map((c) => {
    c.stats["owner_pct"] = c.stats.num_owners / c.stats.total_supply

    return c
  })
}

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

let redis = new Redis(process.env.REDIS_URL)

function getFromOpenSea(url, waitIndex) {
  const options = { method: "GET" }

  return new Promise((resolve, reject) => {
    sleep(waitIndex * API_REQUEST_LIMIT_MS).then( v => {
      fetch(url, options)
        .then(res2 => res2.json())
        .then(data => resolve(data["collections"]))
    })
  });
}

module.exports = async (req, res) => {
  let cache = JSON.parse(await redis.get("cache"))
  let rawCollections = [];
  let result = {}
  let start = Date.now();

  // temporarily just set cache to null to make sure it doesn't load from here
  cache = null

  if (cache) {
     console.log("loading from cache")
     result.data = cache
     result.latency = Date.now() - start;
     result.type = "redis"
  } else {
    console.log("loading from api")

    const urls = [...Array(TOTAL_REQUESTS).keys()].map((i) => {
      return `https://api.opensea.io/api/v1/collections?offset=${i*MAX_COLLECTIONS_PER_REQUEST}&limit=${MAX_COLLECTIONS_PER_REQUEST}`
    })
    const openSeaRequests = await urls.map((url, i) => getFromOpenSea(url, i));

    let collectionsToCache = []
    let firstEntrySet = false;
    let numCached = 0;

    await Promise.all(openSeaRequests).then((data) => {
      for(let response of data){
        if (!response) {
          continue;
        }

        // only care about those that have volume > 1 ETH and aren't Untitled Collections
        let validCollections = response.filter(c => c.stats.seven_day_volume > 1 && !c.name.startsWith("Untitled Collection"))

        validCollections = validCollections.map(c => {
          let newC = {"stats": {}};

          rootFields.forEach(f => newC[f] = c[f])
          statFields.forEach(f => newC["stats"][f] = c["stats"][f])

          return newC
        })
        rawCollections = rawCollections.concat(validCollections)
      }

      result.data = rawCollections
      result.latency = Date.now() - start;
      result.type = "api"
    })

    const numCollections = rawCollections.length

    if(numCollections > 0 && numCollections <= MAX_COLLECTIONS_PER_CACHE_REQUEST) {
      redis.set("cache", JSON.stringify(rawCollections), "EX", CACHE_KEEP_TIME_S)
      firstEntrySet = true
    } else if (numCollections > MAX_COLLECTIONS_PER_CACHE_REQUEST) {

      redis.set("cache", "[", "EX", CACHE_KEEP_TIME_S)

      let remainder = numCollections
      let offset = 0
      let toCache = []
      while (remainder > 0) {
        let offsetEnd = offset + Math.min(remainder, MAX_COLLECTIONS_PER_CACHE_REQUEST)
        toCache = JSON.stringify(rawCollections.slice(offset, offsetEnd)).slice(1,-1)

        toCache = offset == 0 ? toCache : `,${toCache}`

        remainder -= MAX_COLLECTIONS_PER_CACHE_REQUEST
        offset += MAX_COLLECTIONS_PER_CACHE_REQUEST
      }

      redis.append("cache", "]")
    }
  }
  const collections = result.data

  let returnObj = {
    allCollections: addAdditionalAttributes(collections),
    newestCollections: newestCollections(collections)
  }

  Object.keys(TOP10_LISTS).forEach((k) => {
    const val = TOP10_LISTS[k]

    returnObj[k] = top10ByStat(collections, val.stat).map((item) => {
      let valStr = val.unit == "ETH" ? item.stats[val.stat].toFixed(2) : item.stats[val.stat]

      item["value"] = `${valStr} ${val.unit}`

      return item
    })
  })

  return(returnObj)
  // res.status(200).json(returnObj)
}
