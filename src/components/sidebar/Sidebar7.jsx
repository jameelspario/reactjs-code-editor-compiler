import React, {useState} from 'react'
import { FcBullish } from 'react-icons/fc'
import classNames from 'classnames'


const SIDEBAR_DATA = [
    {
        key:1,
        label:'Array'
    },
    {
        key:2,
        label:'String o',
        children:[
            {
                key:10,
                label:'String1'
            },
            {
                key:11,
                label:'String2'
            },
            {
                key:12,
                label:'String3 o',
                children:[
                    {
                        key:121,
                        label:'String31'
                    },
                    {
                        key:122,
                        label:'String32'
                    },
                ]
            },
        ]
    },
    {
        key:3,
        label:'Int'
    },
    {
        key:4,
        label:'Bool'
    },
]

const linkClasses = 'flex flex-col item-center font-light px-2 py-1 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


const Sidebar7 = () => {

    const [selected, setSelected] = useState({}); 

    const onSidebarChange = (newValue) => {

    }

    const MenuItem1 = ({it})=>{
        return (<div key={it.key} className={classNames(selected.key===it.key?'bg-neutral-700 text-white':'', linkClasses)} onClick={()=>onSidebarChange(it)}>
                    {it.label}
                    {it.children && <MenuItem items={it.children}/>}
            </div>)
    }

    const MenuItem = ({items})=>{
        return (<div className='flex flex-col h-full'>
                {
                    items.map((item) => (
                        <MenuItem1 it={item}/>
                    ))
                }
            </div>)
    }

    return (
        <div className='bg-neutral-900 w-60 p-3 flex flex-col text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish />
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {
                    SIDEBAR_DATA.map((item) => (
                        <MenuItem1 it={item}/>
                    ))
                }
            </div>

        </div>
    )
}

export default Sidebar7