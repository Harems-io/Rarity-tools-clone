import Head from 'next/head'

import absoluteUrl from "next-absolute-url"

import CollectionGroup from "../components/collection-group"

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
    <div className="relative flex flex-col h-full overflow-hidden lg:h-screen">
      <Head>
        <title>Harems Tools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    	<main className="p-4 pb-20 overflow-x-auto">

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
        			<table className="relative m-auto dataTable">
        				<tr className="text-right">
        					<th>#</th>
        					<th className="text-left">Collection</th>
        					<th className="">
        						<div className="absolute right-0 mt-1 -ml-1 text-xs">⏷</div> Volume (7d) </th>
        					<th className="font-normal">
        						Sales (7d) </th>
        					<th className="font-normal">
        						Avg Price (7d) </th>
        					<th className="font-normal">
        						Total Supply </th>
        					<th className="font-normal">
        						Owners </th>
        					<th className="font-normal">
        						Owners% </th>
        					<th className="font-normal">
        						Estimated Market Cap </th>
        					<th className="font-normal">
        						Volume (All Time) </th>
        					<th className="font-normal">
        						Sales (All Time) </th>
        					<th className="text-center font-normal">
        						Added </th>
        				</tr>
        				<tr className="text-right text-gray-800">
        					<td>1</td>
        					<td className="font-bold text-left text-pink-600">
        						<a href="/cryptopunks" className="">
        							<div className="flex flex-row items-center space-x-1.5 flex-nowrap">
        								<div><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "24px", maxHeight: "24px"}} /></div>
        								<div className="text-base font-bold text-pink-600 dark:text-pink-500"> CryptoPunks </div>
        							</div>
        						</a>
        					</td>
        					<td>25,443.71 ETH</td>
        					<td>653</td>
        					<td>38.96 ETH</td>
        					<td>9,999</td>
        					<td>2,644</td>
        					<td> 26.44% </td>
        					<td>389,604.33 ETH</td>
        					<td>228,876.90 ETH</td>
        					<td>13,818</td>
        					<td>2021/04/30</td>
        				</tr>
        				<tr className="text-right text-gray-800">
        					<td>2</td>
        					<td className="font-bold text-left text-pink-600">
        						<a href="/vogu" className="">
        							<div className="flex flex-row items-center space-x-1.5 flex-nowrap">
        								<div><img src="https://lh3.googleusercontent.com/4kPtQ8iep2Sw8MEV8TLfGuDsX0ql5pfniHZZGpwx3jp9D2ZRCE0coFxagGrhFH0sfVUezN1O-aRy9SZDong-N0RNsHgCg2rvX7LSJw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "24px", maxHeight: "24px"}} /></div>
        								<div className="text-base font-bold text-pink-600 dark:text-pink-500"> The Vogu Collective </div>
        							</div>
        						</a>
        					</td>
        					<td>3,232.51 ETH</td>
        					<td>5,641</td>
        					<td>0.57 ETH</td>
        					<td>7,777</td>
        					<td>2,116</td>
        					<td> 27.21% </td>
        					<td>4,456.53 ETH</td>
        					<td>3,232.51 ETH</td>
        					<td>5,641</td>
        					<td>2021/07/28</td>
        				</tr>
        				<tr className="text-right text-gray-800">
        					<td>3</td>
        					<td className="font-bold text-left text-pink-600">
        						<a href="/stoner-cats-official" className="">
        							<div className="flex flex-row items-center space-x-1.5 flex-nowrap">
        								<div><img src="https://lh3.googleusercontent.com/7KkOAh6-6ORJVtcprl2iyvyJBuvk2UWuXdimcH7w82wRUPW4DsOtHmuptg7S9BsOlRQhhU2m6z1ec5ZnWhvFY05L1tpSUUIh35Q9=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "24px", maxHeight: "24px"}} /></div>
        								<div className="text-base font-bold text-pink-600 dark:text-pink-500"> Stoner Cats </div>
        							</div>
        						</a>
        					</td>
        					<td>2,920.05 ETH</td>
        					<td>2,988</td>
        					<td>0.98 ETH</td>
        					<td>10,419</td>
        					<td>3,048</td>
        					<td> 29.25% </td>
        					<td>10,182.07 ETH</td>
        					<td>2,920.05 ETH</td>
        					<td>2,989</td>
        					<td>2021/07/27</td>
        				</tr>
        				<tr className="text-right text-gray-800">
        					<td>4</td>
        					<td className="font-bold text-left text-pink-600">
        						<a href="/boredapeyachtclub" className="">
        							<div className="flex flex-row items-center space-x-1.5 flex-nowrap">
        								<div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "24px", maxHeight: "24px"}} /></div>
        								<div className="text-base font-bold text-pink-600 dark:text-pink-500"> Bored Ape YC </div>
        							</div>
        						</a>
        					</td>
        					<td>2,551.60 ETH</td>
        					<td>317</td>
        					<td>8.05 ETH</td>
        					<td>10,000</td>
        					<td>4,949</td>
        					<td> 49.49% </td>
        					<td>80,492.26 ETH</td>
        					<td>42,434.73 ETH</td>
        					<td>17,165</td>
        					<td>2021/05/02</td>
        				</tr>
              </table>
        			<div className="mt-4 text-sm text-gray-400"> * All data from OpenSea
        				<br /> ** Est. Market Cap calculated by using 7 day average price * total supply
        				<br />
        			</div>
        		</div>
        	</div>
        </div>
    	</main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2"   />
        </a>
      </footer>
    </div>
  )
}
