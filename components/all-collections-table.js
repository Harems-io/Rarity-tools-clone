import {useState} from 'react'

import AllCollectionsRow from "./all-collections-row"

import { sortByPath } from "../util/sort"

const COL_NAMES = {
  seven_day_volume: "Volume (7d)",
  seven_day_sales: "Sales (7d)",
  seven_day_average_price: "Avg Price (7d)",
  total_supply: "Total Supply",
  num_owners: "Owners",
  owner_pct: "Owners%",
  market_cap: "Estimated Market Cap",
  total_volume: "Volume (All Time)",
  total_sales: "Sales (All Time)",
  created_date: "Added"
}
export default function AllCollectionsTable ({ data, currency }) {
  const [sortedField, setSortedField] = useState("seven_day_volume")

  function getSortedData(){
    if (sortedField !== null) {
      return sortByPath(data, ['stats', sortedField])
    }
    return data
  }

  return(
    <table className="relative m-auto dataTable">
      <tr className="text-right">
        <th>#</th>
        <th className="text-left">Collection</th>
        {
          Object.keys(COL_NAMES).map((k,i) => {
            return(
              <th className="font-normal" onClick={() => setSortedField(k)} key={`al_collections_heading_${k}`}>
                {(sortedField === k) && <div className="absolute right-0 mt-1 -ml-1 text-xs">⏷</div>}
                {COL_NAMES[k]}
              </th>
            )
          })
        }
      </tr>
      {
        getSortedData().map( (item, i) => { return( <AllCollectionsRow number={i+1} data={item} key={`allCollectionsTable-${i}`} currency={currency} /> ) })
      }
    </table>
  )
}
