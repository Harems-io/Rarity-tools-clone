import formattedDate from "../util/date"

export default function AllCollectionsItem ({ number, data, currency }) {
  return (
    <tr className="text-right text-gray-800">
      <td>{number}</td>
      <td className="font-bold text-left text-pink-600">
        <a href={data.slug} className="">
          <div className="flex flex-row items-center space-x-1.5 flex-nowrap">
            <div><img src={data.image_url} className="w-16 h-auto rounded-full" style={{maxWidth: "24px", maxHeight: "24px"}} /></div>
            <div className="text-base font-bold text-pink-600 dark:text-pink-500">{data.name}</div>
          </div>
        </a>
      </td>
      <td>{data.stats.seven_day_volume.toFixed(2)} {currency}</td>
      <td>{data.stats.seven_day_sales}</td>
      <td>{data.stats.seven_day_average_price.toFixed(2)} {currency}</td>
      <td>{data.stats.total_supply}</td>
      <td>{data.stats.num_owners}</td>
      <td>{parseFloat(100 * data.stats.owner_pct).toFixed(2)}%</td>
      <td>{data.stats.market_cap.toFixed(2)} {currency}</td>
      <td>{data.stats.total_volume.toFixed(2)} {currency}</td>
      <td>{data.stats.total_sales}</td>
      <td>{formattedDate(data.created_date)}</td>
    </tr>
  )
}
