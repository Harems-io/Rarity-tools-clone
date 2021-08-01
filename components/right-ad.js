export default function RightAd ({ href, imgSrc }) {
  return(
    <div className="hidden lg:block">
      <div className="ml-2">
        <div className="hidden lg:block" style={{width: "120px"}}>
          <a href={href} target="_blank"><img src={imgSrc} className="w-full h-auto" /></a>
        </div>
      </div>
    </div>
  )
}
