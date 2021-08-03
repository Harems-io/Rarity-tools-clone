export default function NavCollectionItem ({ number, data }) {
  return (
    <a href={data.href} className="">
      <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none  hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="w-6 text-base font-bold text-right text-gray-400">#{number+1}</div>
        <div>
          <img src={data.imgSrc} className="w-16 h-auto rounded-full" style={{maxWidth: "40px"}} />
        </div>
        <div>
          <div className="text-sm font-bold text-pink-600 dark:text-gray-300">{data.name}</div>
          <div className="text-sm font-bold text-gray-400">{data.vol7day}</div>
        </div>
      </div>
    </a>
  )
}
