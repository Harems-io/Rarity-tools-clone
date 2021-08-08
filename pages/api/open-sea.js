// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { round2Dec } from "../../util/round"
import { sortByPath } from "../../util/sort"

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
    const ownerPct = c.stats.num_owners / c.stats.total_supply

    c.stats["owner_pct"] = round2Dec(ownerPct)
    return c
  })
}

module.exports = async (req, res) => {
  const url = "https://api.opensea.io/api/v1/collections?offset=0&limit=300";
  const options = { method: "GET" };
  const data = await fetch(url, options)
    .then(res2 => res2.json())
    .catch(err => console.error("error:" + err))

  // only care about those that have owners
  const collections = data["collections"].filter(c => c.stats.num_owners > 0)

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

  console.log(returnObj)
  res.status(200).json(returnObj)
}
