export default function NavCollectionItem ({ number, data }) {
  return (
    <div className="py-2 text-gray-400 whitespace-nowrap">
      <a href={data.href} className="ml-4 text-sm font-medium hover:text-pink-300">
        <img src={data.imgSrc} className="w-16 h-auto rounded-full inline" style={{maxWidth: "20px", verticalAlign: "middle", marginTop: "-5px", marginRight: "5px"}} />
        {data.name}
      </a>
    </div>
  )
}
