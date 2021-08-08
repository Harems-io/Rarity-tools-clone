// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sortByPath from "../../util/sort"

const TOP10_LISTS = {
  top10by7DayVol: {stat: "seven_day_volume", unit: "ETH"},
  top10byTotalVol: {stat: "total_volume", unit: "ETH"},
  top10by7DayAvgPrice: {stat: "seven_day_average_price", unit: "ETH"},
  top10byNumOwners: {stat: "num_owners", unit: "Owners"}
}

module.exports = async (req, res) => {
  const url = "https://api.opensea.io/api/v1/collections?offset=0&limit=300";
  const options = { method: "GET" };

  const data = await fetch(url, options)
    .then(res2 => res2.json())
    .catch(err => console.error("error:" + err))

  const collections = data["collections"].filter(c => c.stats.num_owners > 0)

  const top10ByStat = (stat) => {
    const collectionsSubset = JSON.parse(JSON.stringify(collections))

    return sortByPath(collectionsSubset, ["stats", stat]).slice(0, 10)
  }

  let returnObj = { allCollections: collections }

  Object.keys(TOP10_LISTS).forEach((k) => {
    const val = TOP10_LISTS[k]

    returnObj[k] = top10ByStat(val.stat).map((item) => {
      item["value"] = `${item.stats[val.stat]} ${val.unit}`
      return item
    })
  })

  console.log(returnObj)
  res.status(200).json(returnObj)
}
