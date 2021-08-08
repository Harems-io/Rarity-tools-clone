// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { round2Dec } from "../../util/round"
import { sortByPath } from "../../util/sort"

const API_REQUEST_LIMIT_MS = 600
const NUM_REQUESTS = 5
const MAX_COLLECTIONS_PER_REQUEST = 300
const TOP10_LISTS = {
  top10by7DayVol: {stat: "seven_day_volume", unit: "ETH"},
  top10byTotalVol: {stat: "total_volume", unit: "ETH"},
  top10by7DayAvgPrice: {stat: "seven_day_average_price", unit: "ETH"},
  top10byNumOwners: {stat: "num_owners", unit: "Owners"}
}

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

function getFromOpenSea(url, waitIndex) {
  const options = { method: "GET" }

  return new Promise((resolve, reject) => {
    sleep(waitIndex * API_REQUEST_LIMIT_MS).then( v => {
      fetch(url, options)
        .then(res2 => res2.json())
        .then((data) => resolve(data["collections"]))
    })
  });
}

module.exports = async (req, res) => {
  let rawCollections = [];
  let requests = [];

  const urls = [...Array(NUM_REQUESTS).keys()].map((i) => {
    return `https://api.opensea.io/api/v1/collections?offset=${i*MAX_COLLECTIONS_PER_REQUEST}&limit=${MAX_COLLECTIONS_PER_REQUEST}`
  })

  const responses = await urls.map((url, i) => getFromOpenSea(url, i));
  await Promise.all(responses).then((data) => {
    data.forEach((response) => {
      rawCollections = rawCollections.concat(response)
    })
  })

  // only care about those that have owners
  const collections = rawCollections.filter(c => c.stats.total_volume > 0)
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
