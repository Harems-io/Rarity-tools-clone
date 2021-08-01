import Head from 'next/head'

import absoluteUrl from "next-absolute-url"

import CollectionCard from "../components/collection-card"
import MidAd from "../components/mid-ad"
import RightAd from "../components/right-ad"
import TopAd from "../components/top-ad"

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

              {/* group of 4 cards - fits on wide screens */}
              <div className="flex flex-row flex-wrap justify-center">

                {/* group of 2 cards - fits on med screens */}
                <div className="flex flex-row flex-wrap justify-center">

                  {/* eventually loop thru these */}
                  <CollectionCard data={props.collections[0]} />
                  <CollectionCard data={props.collections[1]} />
    						</div>

                <MidAd href="https://osirismetaverse.com/cosmic" imgSrc="https://ewr1.vultrobjects.com/current/cosmickids_vert_m" />

    						<div className="flex flex-row flex-wrap justify-center">
                  <CollectionCard data={props.collections[2]} />
                  <CollectionCard data={props.collections[3]} />
    						</div>
    					</div>
    				</div>
            {/* right ad */}
            <RightAd href="https://osirismetaverse.com/cosmic" imgSrc="https://ewr1.vultrobjects.com/current/cosmickids_vert_d" />
    			</div>
    		</div>

        <div>
        	<h2 className="mb-4 text-3xl font-extrabold text-center textColor700">Top Collections</h2>
        	<div className="flex flex-row flex-wrap justify-center">
        		<div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
        			<h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">By 7 Day Volume</h2>
        			<div>
        				<a href="/cryptopunks" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
        						<div><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> CryptoPunks </div>
        							<div className="text-sm font-bold text-gray-400"> 25,443.71 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/vogu" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
        						<div><img src="https://lh3.googleusercontent.com/4kPtQ8iep2Sw8MEV8TLfGuDsX0ql5pfniHZZGpwx3jp9D2ZRCE0coFxagGrhFH0sfVUezN1O-aRy9SZDong-N0RNsHgCg2rvX7LSJw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> The Vogu Collective </div>
        							<div className="text-sm font-bold text-gray-400"> 3,232.51 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/stoner-cats-official" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
        						<div><img src="https://lh3.googleusercontent.com/7KkOAh6-6ORJVtcprl2iyvyJBuvk2UWuXdimcH7w82wRUPW4DsOtHmuptg7S9BsOlRQhhU2m6z1ec5ZnWhvFY05L1tpSUUIh35Q9=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Stoner Cats </div>
        							<div className="text-sm font-bold text-gray-400"> 2,920.05 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/boredapeyachtclub" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
        						<div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
        							<div className="text-sm font-bold text-gray-400"> 2,551.6 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/veefriends" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
        						<div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
        							<div className="text-sm font-bold text-gray-400"> 958.28 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/royalsocietyofplayers" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
        						<div><img src="https://lh3.googleusercontent.com/pD7CaZQGBaVf-IwBi4KQdkFDlM_2bXyTgDXJCHp0Y98Ca1fNgm266WzrOCNZFT_DMs4zat7Zu8tDolatTuINQOb1jMjfhEYiXSnaoQ=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Royal Society of Players </div>
        							<div className="text-sm font-bold text-gray-400"> 895.56 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/bored-ape-kennel-club" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
        						<div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
        							<div className="text-sm font-bold text-gray-400"> 613.74 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/world-of-women-nft" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
        						<div><img src="https://lh3.googleusercontent.com/a2j9kuLkcnP7SWCSLNSLxQ4LcnRACTr_fs2I38zRUlB9qLq9bweMNJnbrKVZxZRitCQd5WMRMGCqUdPQwhConm1kGrIvMuZRgNJX=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> World of Women </div>
        							<div className="text-sm font-bold text-gray-400"> 567.1 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/axie" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
        						<div><img src="https://lh3.googleusercontent.com/_BYA3bhx1ebgDr3QsuQuh2OMSznmS_TkwJhikCtCVMh4RUcpn2gnJmmOHHA28gy0mKP50flV31iXsDBUr_zjBaXNJA=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Axie Origins </div>
        							<div className="text-sm font-bold text-gray-400"> 542.34 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/thewickedcraniums" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
        						<div><img src="https://lh3.googleusercontent.com/e5s2WcnoPKpVZ4MxRA6v1IYPcCmC_3LSDCTI-Cp_pAxu_J81v0iQUiOByr5gLdQjM083RHQZd_izPmTeB1w2P9r8YmjxHNJNRi4RRw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> The Wicked Craniums </div>
        							<div className="text-sm font-bold text-gray-400"> 529.44 ETH </div>
        						</div>
        					</div>
        				</a>
        			</div>
        		</div>
        		<div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
        			<h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">By Total Volume</h2>
        			<div>
        				<a href="/cryptopunks" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
        						<div><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> CryptoPunks </div>
        							<div className="text-sm font-bold text-gray-400"> 228,876.9 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/boredapeyachtclub" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
        						<div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
        							<div className="text-sm font-bold text-gray-400"> 42,434.73 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/hashmasks" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
        						<div><img src="https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Hashmasks </div>
        							<div className="text-sm font-bold text-gray-400"> 31,044.63 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/meebits" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
        						<div><img src="https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Meebits </div>
        							<div className="text-sm font-bold text-gray-400"> 26,709.3 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/axie" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
        						<div><img src="https://lh3.googleusercontent.com/_BYA3bhx1ebgDr3QsuQuh2OMSznmS_TkwJhikCtCVMh4RUcpn2gnJmmOHHA28gy0mKP50flV31iXsDBUr_zjBaXNJA=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Axie Origins </div>
        							<div className="text-sm font-bold text-gray-400"> 13,906.24 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/bored-ape-kennel-club" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
        						<div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
        							<div className="text-sm font-bold text-gray-400"> 13,125.08 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/veefriends" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
        						<div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
        							<div className="text-sm font-bold text-gray-400"> 8,244.18 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/cool-cats-nft" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
        						<div><img src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Cool Cats NFT </div>
        							<div className="text-sm font-bold text-gray-400"> 6,372.68 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/thewickedcraniums" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
        						<div><img src="https://lh3.googleusercontent.com/e5s2WcnoPKpVZ4MxRA6v1IYPcCmC_3LSDCTI-Cp_pAxu_J81v0iQUiOByr5gLdQjM083RHQZd_izPmTeB1w2P9r8YmjxHNJNRi4RRw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> The Wicked Craniums </div>
        							<div className="text-sm font-bold text-gray-400"> 5,347.7 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/guttercatgang" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
        						<div><img src="https://lh3.googleusercontent.com/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Gutter Cat Gang </div>
        							<div className="text-sm font-bold text-gray-400"> 4,778.17 ETH </div>
        						</div>
        					</div>
        				</a>
        			</div>
        		</div>
        		<div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
        			<h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">
        		By 7 Day Average Price
        	</h2>
        			<div>
        				<a href="/cryptopunks" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
        						<div><img src="https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> CryptoPunks </div>
        							<div className="text-sm font-bold text-gray-400"> 38.96 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/axie" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
        						<div><img src="https://lh3.googleusercontent.com/_BYA3bhx1ebgDr3QsuQuh2OMSznmS_TkwJhikCtCVMh4RUcpn2gnJmmOHHA28gy0mKP50flV31iXsDBUr_zjBaXNJA=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Axie Origins </div>
        							<div className="text-sm font-bold text-gray-400"> 22.6 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/boredapeyachtclub" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
        						<div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
        							<div className="text-sm font-bold text-gray-400"> 8.05 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/veefriends" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
        						<div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
        							<div className="text-sm font-bold text-gray-400"> 6.94 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/meebits" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
        						<div><img src="https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Meebits </div>
        							<div className="text-sm font-bold text-gray-400"> 2.61 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/cyberkongz" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
        						<div><img src="https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> CyberKongz </div>
        							<div className="text-sm font-bold text-gray-400"> 2 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/bored-ape-kennel-club" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
        						<div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
        							<div className="text-sm font-bold text-gray-400"> 1.94 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/guttercatgang" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
        						<div><img src="https://lh3.googleusercontent.com/gjOExI2qNNJuv6fo4hmHamRzDMRLkYPFQtK4d67GE3bgdVJCyZngUwY_h6qp9244pp7l_pF2JBHtOJ8cLgzFbulxMK-KqlZnu9E1sg=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Gutter Cat Gang </div>
        							<div className="text-sm font-bold text-gray-400"> 1.3 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/stoner-cats-official" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
        						<div><img src="https://lh3.googleusercontent.com/7KkOAh6-6ORJVtcprl2iyvyJBuvk2UWuXdimcH7w82wRUPW4DsOtHmuptg7S9BsOlRQhhU2m6z1ec5ZnWhvFY05L1tpSUUIh35Q9=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Stoner Cats </div>
        							<div className="text-sm font-bold text-gray-400"> 0.98 ETH </div>
        						</div>
        					</div>
        				</a>
        				<a href="/cool-cats-nft" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
        						<div><img src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Cool Cats NFT </div>
        							<div className="text-sm font-bold text-gray-400"> 0.72 ETH </div>
        						</div>
        					</div>
        				</a>
        			</div>
        		</div>
        		<div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
        			<h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">
        		By Owner Count
        	</h2>
        			<div>
        				<a href="/bones-and-bananas" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#1</div>
        						<div><img src="https://lh3.googleusercontent.com/o-esn2NgDf-AJ8VDsadqiUcvn47LxGRgrXCOAU_UgH1QVHomFp-yccOBcG3Jh8g6LsENM_supYtovgOUwbIeYbHiABb1Or5qJbxZEw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bones &amp; Bananas </div>
        							<div className="text-sm font-bold text-gray-400"> 6771 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/boredapeyachtclub" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#2</div>
        						<div><img src="https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Yacht Club </div>
        							<div className="text-sm font-bold text-gray-400"> 4949 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/meebits" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#3</div>
        						<div><img src="https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Meebits </div>
        							<div className="text-sm font-bold text-gray-400"> 4791 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/veefriends" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#4</div>
        						<div><img src="https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> VeeFriends </div>
        							<div className="text-sm font-bold text-gray-400"> 4560 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/hashmasks" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#5</div>
        						<div><img src="https://lh3.googleusercontent.com/6X867ZmCsuYcjHpx-nmNkXeHaDFd2m-EDEEkExVLKETphkfcrpRJOyzFxRQlc-29J0e-9mB9uDGze0O9yracSA9ibnQm2sIq5i2Yuw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Hashmasks </div>
        							<div className="text-sm font-bold text-gray-400"> 4529 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/bored-ape-kennel-club" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#6</div>
        						<div><img src="https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Bored Ape Kennel Club </div>
        							<div className="text-sm font-bold text-gray-400"> 4280 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/cool-cats-nft" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#7</div>
        						<div><img src="https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Cool Cats NFT </div>
        							<div className="text-sm font-bold text-gray-400"> 3612 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/thewickedcraniums" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#8</div>
        						<div><img src="https://lh3.googleusercontent.com/e5s2WcnoPKpVZ4MxRA6v1IYPcCmC_3LSDCTI-Cp_pAxu_J81v0iQUiOByr5gLdQjM083RHQZd_izPmTeB1w2P9r8YmjxHNJNRi4RRw=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> The Wicked Craniums </div>
        							<div className="text-sm font-bold text-gray-400"> 3603 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/stoner-cats-official" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#9</div>
        						<div><img src="https://lh3.googleusercontent.com/7KkOAh6-6ORJVtcprl2iyvyJBuvk2UWuXdimcH7w82wRUPW4DsOtHmuptg7S9BsOlRQhhU2m6z1ec5ZnWhvFY05L1tpSUUIh35Q9=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> Stoner Cats </div>
        							<div className="text-sm font-bold text-gray-400"> 3048 Owners </div>
        						</div>
        					</div>
        				</a>
        				<a href="/thealienboy" className="">
        					<div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none hover:bg-gray-100 dark:hover:bg-gray-800">
        						<div className="w-10 text-2xl font-bold text-right text-gray-400">#10</div>
        						<div><img src="https://lh3.googleusercontent.com/mnNWlPXlDTp8N1JP2kiCrTy-w0lGU0S1AX5sMm0ZhWjSTpIh4RTwXERNjz83aKI1uKjyqf8yZJlsId6TeUgvJRhwaWScJPdWZSlISJc=s120" className="w-16 h-auto rounded-full" style={{maxWidth: "40px", maxHeight: "40px"}}  /></div>
        						<div>
        							<div className="text-base font-bold text-pink-600 dark:text-gray-300"> The Alien Boy </div>
        							<div className="text-sm font-bold text-gray-400"> 3044 Owners </div>
        						</div>
        					</div>
        				</a>
        			</div>
        		</div>
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
