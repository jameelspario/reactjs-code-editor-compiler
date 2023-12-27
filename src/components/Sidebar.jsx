import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASBOARD_SIDEBAR } from '../constants/navigation'
// import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const linkClasses = 'flex item-center gap-2 font-light px-3 py-1 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = ({ selected, setSelected}) => {

    const onSidebarChange = (newValue) => {
        console.log(newValue);
        setSelected(newValue);
    };


    return (
        <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish />
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {
                    DASBOARD_SIDEBAR.map((item) => (
                        <div key={item.key} className={classNames( selected.key===item.key?'bg-neutral-700 text-white':'', linkClasses)} onClick={()=>onSidebarChange(item)}>
                            {item.label}
                        </div>
                    ))
                }
            </div>
            <div>
            </div>

        </div>
    )
}

export default Sidebar