import AllCollectionsItem from "./all-collections-item"

export default function AllCollectionsTable ({ data }) {
  return(
    <table className="relative m-auto dataTable">
      <tr className="text-right">
        <th>#</th>
        <th className="text-left">Collection</th>
        <th className="">
          <div className="absolute right-0 mt-1 -ml-1 text-xs">⏷</div> Volume (7d) </th>
        <th className="font-normal">
          Sales (7d) </th>
        <th className="font-normal">
          Avg Price (7d) </th>
        <th className="font-normal">
          Total Supply </th>
        <th className="font-normal">
          Owners </th>
        <th className="font-normal">
          Owners% </th>
        <th className="font-normal">
          Estimated Market Cap </th>
        <th className="font-normal">
          Volume (All Time) </th>
        <th className="font-normal">
          Sales (All Time) </th>
        <th className="text-center font-normal">
          Added </th>
      </tr>
      {
        data.map( (item, i) => { return( <AllCollectionsItem number={i+1} data={item} key={`allCollectionsTable-${i}`} /> ) })
      }
    </table>
  )
}
