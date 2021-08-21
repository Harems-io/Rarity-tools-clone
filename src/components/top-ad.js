export default function TopAd ({ href, imgSrc }) {
  return(
    <div>
      <div className="hidden lg:block" style={{width: "728px", margin: "auto"}}>
        <a href={href} target="_blank"><img src={imgSrc} className="w-full h-auto" /></a>
      </div>
      <div className="block lg:hidden" style={{width: "300px", margin: "auto"}}>
        <a href={href} target="_blank"><img src={imgSrc} className="w-full h-auto" /> </a>
      </div>
      <div className="mt-0.5 text-sm text-center textColor600">Please visit our sponsors!</div>
    </div>
  )
}
