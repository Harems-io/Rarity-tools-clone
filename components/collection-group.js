import CollectionCard from "../components/collection-card"
import MidAd from "../components/mid-ad"

const CARDS_PER_ROW = 2

export default function CollectionGroup ({ data, insertAd }) {
  const row = (i) => {
    return(
      <div className="flex flex-row flex-wrap justify-center">
        {
          data.slice(i * CARDS_PER_ROW, (i+1) * CARDS_PER_ROW).map((card) => {
            return <CollectionCard data={card} />
          })
        }
      </div>
    )
  }

  return(
    <div className="flex flex-row flex-wrap justify-center">
      {
        [...Array(data.length/CARDS_PER_ROW).keys()].map((i) => { return row(i) })
      }
      { insertAd && <MidAd href="https://osirismetaverse.com/cosmic" imgSrc="https://ewr1.vultrobjects.com/current/cosmickids_vert_m" />}
    </div>
  )
}
