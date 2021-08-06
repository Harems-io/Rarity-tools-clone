import {useState} from 'react'

import NavCollectionItem from "./nav-collection-item"
import NavNewItem from "./nav-new-item"
import SearchBar from "./search-bar"

export default function Header({collectionsList, newList}) {
  const [searchTerm, setSearchTerm] = useState("")
  const [allCollections, setAllCollections] = useState(collectionsList)

  function toggleDarkMode() {
    const el = document.querySelector('html');
    console.log(el.className);
    el.className = el.className == 'dark' ? '' : 'dark';
  }

  function editSearchTerm(e) {
    setSearchTerm(e.target.value)
  }

  function searchByName() {
    return allCollections.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <div className="sticky top-0 flex flex-row items-center h-10 px-3 text-pink-600 bg-gray-800 shadow-md dark:bg-gray-900" style={{zIndex: "999"}}>
      <div className="flex flex-row items-center py-2 space-x-2 align-middle lg:mr-4">
        <a href="/" aria-current="page" className="inline-block px-2.5 pb-px font-extrabold text-white bg-pink-700 rounded-lg " style={{width: "125px"}}> harems tools </a>
        <a href="https://twitter.com/raritytools" target="_blank">
          <div style={{width: "20px"}}><img src="/icons/twitter.png" style={{width: "100%", height: "auto"}} /></div>
        </a>
        <a href="https://raritytools.medium.com" target="_blank">
          <div style={{width: "20px"}}><img src="/icons/medium.png" style={{width: "100%", height: "auto"}} /></div>
        </a>
      </div>
      <div className="flex flex-row items-center h-full space-x-3">
        <div className="hidden h-full ml-2 text-gray-400 lg:block"><a href="/" aria-current="page" className="block mt-3 text-sm font-medium hover:text-pink-300">Home</a></div>
        <div className="border-r border-gray-600" style={{height: "60%"}}></div>
        <div className="relative h-full text-gray-400 collections hover:text-white"><span className="block mt-3 text-sm font-medium cursor-pointer whitespace-nowrap"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="inline-block text-gray-300 bi bi-list-ol" style={{marginTop: "-4px", marginRight: "2px"}}><path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"></path> <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"></path></svg></span> All Collections </span>
          <div className="absolute right-0 hidden pb-3 ml-0 -mr-6 overflow-y-auto bg-white border-b-2 border-l-2 border-r-2 border-pink-700 shadow-lg  bgCard md:-ml-6 md:mr-0 md:right-auto w-80 collections-dropdown top-full dark:border-gray-800" style={{zIndex: "999", maxHeight: "75vh"}}>
            <div className="px-2 py-2">
              <div className="
                    flex flex-row
                    items-center
                    py-0.5
                    overflow-hidden
                    border border-gray-400
                    rounded-lg
                    focus-within:border-pink-600
                    flex-nowrap
                  ">
                  <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              </div>
            </div>
            <div className="mt-2 ml-4 font-bold textColor700">By 7 Day Volume</div>
            {
              searchByName().map( (item, i) => {return(<NavCollectionItem data={item} number={i} key={`navCollectionItem_${i}`} />)})
            }
          </div>
        </div>
        <div className="border-r border-gray-600" style={{height: "60%"}}></div>
        <div className="flex flex-row items-baseline justify-end h-full space-x-4 flex-nowrap">
          <div className="py-2 text-gray-400 whitespace-nowrap" style={{marginTop: "1px"}}><a href="/upcoming" className="text-sm font-medium hover:text-pink-300 whitespace-nowrap">Upcoming</a></div>
        </div>
        <div className="ml-2 mr-4 border-r border-gray-600 md:block" style={{height: "60%"}}></div>
        {/*
        <div className="flex-row flex-wrap items-baseline hidden h-full pr-4 overflow-hidden md:flex"><a className="block mt-3 text-sm font-medium text-yellow-400">New!</a>
          {
            newList.map( (item, i) => {return(<NavNewItem data={item} key={`navNewItem_${i}`} />)})
          }
        </div>
        */}
      </div>
      <div className="flex-grow"></div>
      <div className="flex flex-row items-center h-full">
        <div className="hidden ml-2 mr-4 border-r border-gray-600 md:block" style={{height: "60%"}}></div>
        <div className="flex flex-row items-baseline justify-end h-full space-x-4 flex-nowrap">
          <div className="hidden py-2 text-gray-400 lg:block whitespace-nowrap" style={{marginTop: "1px"}}><a href="/list" className="text-sm font-medium hover:text-pink-300 whitespace-nowrap">List Your Project</a></div>
          <div className="hidden py-2 text-gray-400 lg:block whitespace-nowrap" style={{marginTop: "1px"}}><a href="/advertise" className="text-sm font-medium hover:text-pink-300 whitespace-nowrap">Advertise</a></div>
          <div className="py-2 text-gray-400 whitespace-nowrap" style={{marginTop: "1px"}}><a href="https://raritytools.medium.com/introducing-rarity-tools-9b0138e992b3" target="_blank" className="text-sm font-medium text-gray-400 hover:text-pink-300">
                About
              </a></div>
        </div>
        <div onClick={toggleDarkMode} className="py-2 ml-3 text-gray-400 whitespace-nowrap" style={{marginTop: "1px"}}>
          <div className="text-gray-400 cursor-pointer select-none hover:text-pink-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-brightness-high-fill">
              <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
