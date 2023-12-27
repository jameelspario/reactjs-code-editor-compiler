import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Sidebar7 from './sidebar/Sidebar7'
import Header from './Header'
import Dashboard from './Dashboard'
const Layout = () => {

    const [selected, setSelected] = useState({});

    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar7 selected={selected} setSelected={setSelected}/>
            <div className='flex-1'>
                <Header title={selected.label}/>
                <div>{<Dashboard />}</div>
            </div>

        </div>
    )
}

export default Layout