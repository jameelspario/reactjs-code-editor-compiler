import SidebarItem from "./SidebarItem"
import { FcBullish } from 'react-icons/fc'
import items from "../../constants/sidebar.json"


export default function Sidebar(){
    return (
        <div className="bg-slate-300 h-full w-60 p-3 flex flex-col">
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish />
            </div>
            <div className="flex-1 py-8 flex flex-col gap-0.5">
            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
            </div>
          
        </div>
    )
}