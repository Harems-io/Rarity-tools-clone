import TopListItem from "./top-list-item"

export default function TopListCard({title, list, unit}) {
    return(
      <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 bgCard ml-4">
        <h2 className="px-4 mb-3 text-lg font-extrabold text-pink-600">{title}</h2>
        <div>
        {
          list.map((item, i) => {
            return(
              <TopListItem number={i + 1} data={item} unit={unit} key={`top-list-item-${item.name}`} />
            )
          })
        }
        </div>
      </div>
    )
}
