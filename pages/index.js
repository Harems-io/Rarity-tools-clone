import Head from 'next/head'

import absoluteUrl from "next-absolute-url"

import AllCollectionsTable from "../components/all-collections-table"
import CollectionGroup from "../components/collection-group"
import Layout from "../components/layout"
import RightAd from "../components/right-ad"
import TopAd from "../components/top-ad"
import TopListCard from "../components/top-list-card"

const COLLECTIONS_PER_ROW = 4
const COLLECTION_TOTAL_NUM = 12

// import '../styles/index.module.scss';

const fetcher = url => fetch(url).then(res => res.json());

export async function getServerSideProps(context) {
  const { origin } = absoluteUrl(context.req)
  const apiURL = `${origin}/api/openSea`
  const data = await fetcher(apiURL)
  return { props: data}
}

export default function Home(props) {
  return (
    <Layout title="Harems Tools">
        <TopAd href="https://etheremura.io/" imgSrc="https://ewr1.vultrobjects.com/current/etheremura2_horiz_d" />

        {/* container for first section of content */}
    		<div className="mt-6 mb-10">
    			<h2 className="mb-4 text-3xl font-extrabold text-center textColor700">Newest Collections Added</h2>

          {/* wrapper around group of cards to center them */ }
    			<div className="flex flex-row justify-center m-auto" style={{maxWidth: "1400px"}}>

            {/* group of all collection cards */}
    				<div className="flex flex-row flex-wrap justify-around">
              {
                [...Array(COLLECTION_TOTAL_NUM / COLLECTIONS_PER_ROW).keys()].map((i) => {
                  const dataForGroup = props.collections.slice(i * COLLECTIONS_PER_ROW, (i+1) * COLLECTIONS_PER_ROW);

                  const insertAd = (i % 2) == 0;

                  if (dataForGroup.length) {
                    return(
                      <CollectionGroup data={dataForGroup} insertAd={insertAd} />
                    )
                  }
                })
              }
    				</div>
            {/* right ad */}
            <RightAd href="https://osirismetaverse.com/cosmic" imgSrc="https://ewr1.vultrobjects.com/current/cosmickids_vert_d" />
    			</div>
    		</div>
        <div>
        	<h2 className="mb-4 text-3xl font-extrabold text-center textColor700">Top Collections</h2>
        	<div className="flex flex-row flex-wrap justify-center">
            <TopListCard title="By 7 Day Volume" list={props.top10by7DayVol} unit="ETH" />
            <TopListCard title="By Total Volume" list={props.top10by7DayVol} unit="ETH" />
            <TopListCard title="By 7 Day Average Price" list={props.top10by7DayVol} unit="ETH" />
            <TopListCard title="By Owner Count" list={props.top10by7DayVol} unit="Owners" />
        	</div>
        </div>
        <div className="mt-16">
          <h2 className="mb-4 text-3xl font-extrabold text-center textColor700">All Collections</h2>
          <div className="flex flex-row justify-center mt-6">
          	<div className="p-4 border border-gray-300 rounded-lg shadow-md tableHolder bgCard dark:border-gray-800">
          		<div className="
          							flex flex-row
          							mt-2
          							mb-4
          							items-center
          							py-0.5
          							mx-4
          							overflow-hidden
          							border border-gray-300
          							rounded-lg
          							focus-within:border-pink-600
          							flex-nowrap
          							bgInput
          							textInput
          						" style={{maxWidth: "50%"}}>
              	<div className="ml-2 text-gray-400">
              		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search">
              			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              		</svg>
              	</div>
              	<input spellCheck="false" placeholder="Search by Project Name ..." className="block w-full pl-1 ml-1 text-base text-gray-700 placeholder-pink-400 outline-none  bg-none lg:ml-0 search bgInput textInput" />
              </div>
              <AllCollectionsTable data={props.allCollections} />
        			<div className="mt-4 text-sm text-gray-400"> * All data from OpenSea
        				<br /> ** Est. Market Cap calculated by using 7 day average price * total supply
        				<br />
        			</div>
        		</div>
        	</div>
        </div>
    </Layout>
  )
}
