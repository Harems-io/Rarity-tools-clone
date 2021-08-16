// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Redis from "ioredis"

import { round2Dec } from "../../util/round"
import { sortByPath } from "../../util/sort"

const CACHE_KEEP_TIME_S = 43200
const API_REQUEST_LIMIT_MS = 750
const TOTAL_REQUESTS = 10
// const TOTAL_REQUESTS = 4
const MAX_REQUESTS_PER_CACHE_REQUEST = 2
const MAX_COLLECTIONS_PER_REQUEST = 250
// const MAX_COLLECTIONS_PER_REQUEST = 200
const TOP10_LISTS = {
  top10by7DayVol: {stat: "seven_day_volume", unit: "ETH"},
  top10byTotalVol: {stat: "total_volume", unit: "ETH"},
  top10by7DayAvgPrice: {stat: "seven_day_average_price", unit: "ETH"},
  top10byNumOwners: {stat: "num_owners", unit: "Owners"}
}

const rootFields = [
  "banner_image_url",
  "created_at",
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
  let rawCollections = [];

  let start = Date.now();
  // let cacheResponse =

  // console.log(cache)
  let cache = JSON.parse(await redis.get("cache"))

  let result = {}

  if (cache) {
     console.log("loading from cache")
     result.data = cache
     result.type = "redis"
     result.latency = Date.now() - start;
     // return res.status(200).json(result)
  } else {
    console.log("loading from api")

    redis.set("cache", "[", "EX", CACHE_KEEP_TIME_S)

    // [...Array(cacheRequests).keys()].forEach(async(cReq) => {

      const urls = [...Array(TOTAL_REQUESTS).keys()].map((i) => {
        return `https://api.opensea.io/api/v1/collections?offset=${i*MAX_COLLECTIONS_PER_REQUEST}&limit=${MAX_COLLECTIONS_PER_REQUEST}`
      })

      const openSeaRequests = await urls.map((url, i) => getFromOpenSea(url, i));

      let collectionsToCache = []

      let firstEntrySet = false;
      await Promise.all(openSeaRequests).then((data) => {
        data.forEach((response, i) => {
          // only care about those that have volume
          let validCollections = response.filter(c => c.stats.total_volume > 0)
          // console.log(validCollections.length)
          validCollections = validCollections.map(c => {
            let newC = {"stats": {}};

            rootFields.forEach(f => newC[f] = c[f])
            statFields.forEach(f => newC["stats"][f] = c["stats"][f])

            return newC
          })
          rawCollections = rawCollections.concat(validCollections)
          collectionsToCache = collectionsToCache.concat(validCollections)

          if ((i+1) % MAX_REQUESTS_PER_CACHE_REQUEST == 0) {
            if(collectionsToCache.length){
              if(!firstEntrySet) {
                redis.append("cache", JSON.stringify(...collectionsToCache))
                firstEntrySet = true
              } else {
                redis.append("cache", `,${JSON.stringify(...collectionsToCache)}`)
              }
            }
            collectionsToCache = []
          }
        })
        redis.append("cache", "]")

        result.data = rawCollections
        result.type = "api"
        result.latency = Date.now() - start;
        // if ()MAX_REQUESTS_PER_CACHE_REQUEST

      })
    // })
  }
  const collections = result.data
  // const collections = result.data.filter(c => c.stats.total_volume > 0)
  let returnObj = {
    allCollections: addAdditionalAttributes(collections)
  }

  Object.keys(TOP10_LISTS).forEach((k) => {
    const val = TOP10_LISTS[k]

    returnObj[k] = top10ByStat(collections, val.stat).map((item) => {
      item["value"] = `${item.stats[val.stat]} ${val.unit}`
      return item
    })
  })

  res.status(200).json(returnObj)
}
