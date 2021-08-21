import formattedDate from "../util/date"

export default function CollectionCard ({ data }) {
  return(
    <div className="mb-4 ml-4 overflow-hidden border border-gray-300 rounded-lg shadow-md bgCard dark:border-gray-800">
      <div className="w-72">
        <a href={`/${data.slug}`} className="">
          <div className="relative w-full overflow-hidden" style={{height: "220px"}}>

            {/* unique featured banner for first element */}
            {
              data.featured == "true" && <div className="absolute w-full font-bold text-center text-white bg-pink-700">Featured</div>
            }
            <img src={data.banner_image_url} className="object-cover object-center w-full h-full"   />
          </div>
          <div className="flex flex-row mt-2">
            <div className="p-2 ml-2">
              <div className="font-bold text-pink-600 dark:text-gray-300">{data.name}</div>
              <div className="text-sm text-gray-400">Added {formattedDate(data.created_date)}</div>
              <div className="text-sm text-gray-400">Owners: {data.stats.num_owners}</div>
              <div className="text-sm text-gray-400">Total Volume: {data.stats.total_volume.toFixed(2)} ETH</div>
            </div>
            <div className="flex-grow"></div>
            <div className="mt-3 mr-3" style={{maxWidth: "3rem"}}> <img src={data.image_url} className="w-16 h-auto rounded-full" /> </div>
          </div>
          <div className="p-4 pt-2 text-sm notes dark:text-gray-300" dangerouslySetInnerHTML={{ __html: `${data.description || ". . ."}` }} />
        </a>
      </div>
    </div>
  )
}
