export default function SearchBar ({ searchTerm, setSearchTerm }) {
  function editSearchTerm(e) {
    setSearchTerm(e.target.value)
  }

  return(
    <>
      <div className="ml-2 text-gray-400 bgInput">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-search">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
        </svg>
      </div>
      <input value={searchTerm} onChange={editSearchTerm} placeholder="Search by Project Name ..." className="block w-full pl-1 ml-1 text-base text-gray-700 placeholder-pink-400 outline-none  bgInput bg-none lg:ml-0 search textInput" />
    </>
  )
}
