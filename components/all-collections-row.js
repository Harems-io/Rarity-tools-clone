export default function AllCollectionsItem ({ number, data, currency }) {
  return (
    <tr className="text-right text-gray-800">
      <td>{number}</td>
      <td className="font-bold text-left text-pink-600">
        <a href={data.href} className="">
          <div className="flex flex-row items-center space-x-1.5 flex-nowrap">
            <div><img src={data.imgSrc} className="w-16 h-auto rounded-full" style={{maxWidth: "24px", maxHeight: "24px"}} /></div>
            <div className="text-base font-bold text-pink-600 dark:text-pink-500">{data.name}</div>
          </div>
        </a>
      </td>
      <td>{data.vol7day} {currency}</td>
      <td>{data.sales7day}</td>
      <td>{data.avgPrice7day} {currency}</td>
      <td>{data.totalSupply}</td>
      <td>{data.owners}</td>
      <td>{data.ownersPct}</td>
      <td>{data.estMarketCap} {currency}</td>
      <td>{data.volAllTime} {currency}</td>
      <td>{data.salesAllTime}</td>
      <td>{data.addedDate}</td>
    </tr>
  )
}
