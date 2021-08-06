import {useState} from 'react'

import AllCollectionsRow from "./all-collections-row"

import sortByStat from "../util/sort"

const COL_NAMES = {
  vol7day: "Volume (7d)",
  sales7day: "Sales (7d)",
  avgPrice7day: "Avg Price (7d)",
  totalSupply: "Total Supply",
  owners: "Owners",
  ownersPct: "Owners%",
  estMarketCap: "Estimated Market Cap",
  volAllTime: "Volume (All Time)",
  salesAllTime: "Sales (All Time)",
  addedDate: "Added"
}
export default function AllCollectionsTable ({ data, currency }) {
  const [sortedField, setSortedField] = useState("vol7day")

  function getSortedData(){
    if (sortedField !== null) {
      return sortByStat(data, ['stats', sortedField])
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
              <th className="font-normal" onClick={() => setSortedField(k)}>
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
