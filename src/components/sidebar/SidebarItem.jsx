import { useState } from "react"

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

   
    if(item.childrens){
        return (
            <div className={open ? "p-2 block transition duration-150 rounded-md h-auto sidebar-item open" : "p-2 block transition duration-150 rounded-md"}>
                <div className="flex text-lg items-center justify-between sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="pt-1/4 h-0 overflow-hidden sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain plain text-white no-underline">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}