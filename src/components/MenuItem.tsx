import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item : MenuItem)=> void
}

function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
        className="border-2  border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 transition-colors rounded-lg"
        onClick={()=> addItem(item)}
    >
        <p>{item.name}</p>
        <p className="text-xl font-semibold">${item.price}</p>
    </button>
  )
}

export default MenuItem