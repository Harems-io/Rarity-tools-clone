export default function MidAd ({ href, imgSrc }) {
  return(
    <div className="block w-full mb-4 lg:hidden">
      <div className="w-full m-auto my-2" style={{width: "300px"}}>
        <a href={href} target="_blank"><img src={imgSrc} className="w-full h-auto"   /></a>
        <div className="text-xs text-center">Please visit our sponsors!</div>
      </div>
    </div>
  )
}
