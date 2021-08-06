// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sortByStat from "../../util/sort"

module.exports = async (req, res) => {
  const url = "https://api.opensea.io/api/v1/collections?offset=0&limit=300";
  const options = { method: "GET" };

  const data = await fetch(url, options)
    .then(res2 => res2.json())
    .catch(err => console.error("error:" + err))

  // const allCollections = data["collections"]
  // const top10by7DayVol = data["collections"].slice(0,9)
  // const top10by7DayVol = data["collections"].slice(0,9)
  // const top10by7DayVol = data["collections"].slice(0,9)
  // const top10by7DayVol = data["collections"].slice(0,9)


  const top10ByStat = (stat) => {
    return sortByStat(data["collections"], ["stats", stat]).slice(0, 10)
  }

  res.status(200).json({
    allCollections: data["collections"],
    top10by7DayVol: top10ByStat("seven_day_volume"),
    top10byTotalVol: top10ByStat("total_volume"),
    top10by7DayAvgPrice: top10ByStat("seven_day_average_price"),
    top10byNumOwners: top10ByStat("num_owners")
  })
}
