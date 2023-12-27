import React from 'react'

const MenuItem7 = ({ items }) => {

    const onSidebarChange = (newValue) => {

    }

    return (
        <div>
            {/* <div className='flex flex-col h-full'> */}
                {
                    items.map((it) => (
                        <div key={it.key} className={classNames(selected.key === it.key ? 'bg-neutral-700 text-white' : '', linkClasses)} onClick={() => onSidebarChange(it)}>
                            {it.label}
                            {it.children && (
                                <div key={it.key} className={classNames(selected.key === it.key ? 'bg-neutral-700 text-white' : '', linkClasses)} onClick={() => onSidebarChange(it)}>
                                    {it.label}
                                    {it.children && <MenuItem items={it.children} />}
                                </div>
                            )}
                        </div>
                    ))
                }
            {/* </div> */}
        </div>
    )
}

export default MenuItem7