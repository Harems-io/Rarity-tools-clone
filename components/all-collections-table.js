import {useState} from 'react'

import AllCollectionsRow from "./all-collections-row"

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

  function parseForSort(str) {
    const numberA = Number(str.split(",").join(""))

    if (numberA === 0) {
      return 0
    } else if(!numberA) {
      return str
    } else {
      return numberA
    }
  }

  function getSortedData(){
    if (sortedField !== null) {
      return data.sort((a, b) => {
        const aVal = parseForSort(a[sortedField])
        const bVal = parseForSort(b[sortedField])
        if (aVal < bVal) {
          return 1;
        }
        if (aVal > bVal) {
          return -1;
        }
        return 0;
      });
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
