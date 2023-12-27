import React from 'react'

export const menu = {
    "children": [
        {
            "link": "/home",
            "title": "Home"
        },
        {
            "link": "#",
            "title": "Fruit",
            "children": [
                {
                    "link": "/apples",
                    "title": "Apples"
                },
                {
                    "link": "/bananas",
                    "title": "Bananas"
                },
                {
                    "link": "/kiwi",
                    "title": "Kiwi"
                },
                {
                    "link": "/pears",
                    "title": "Pears"
                }
            ]
        },
        {
            "link": "#",
            "title": "Vegetables",
            "children": [
                {
                    "link": "/carrots",
                    "title": "Carrots"
                },
                {
                    "link": "/celery",
                    "title": "Celery"
                },
                {
                    "link": "/potatoes",
                    "title": "Potatoes"
                },
                {
                    "link": "#",
                    "title": "More",
                    "childrenl̥": [
                        {
                            "link": "/thirdlevel1",
                            "title": "3rd level menu"
                        },
                        {
                            "link": "/thirdlevel2",
                            "title": "3rd level two"
                        }
                    ]
                }
            ]
        },
        {
            "link": "/about",
            "title": "About"
        },
        {
            "link": "/contact",
            "title": "Contact"
        }
    ]
}

const renderMenu = items => {
    return <ul>
        {items.map(i => {
            return <li>
                <a href={i.link}>{i.title}</a>
                {i.children && renderMenu(i.children)}
            </li>
        })}
    </ul>
}

const Sidebar4 = () => {
    return (
        <div>
            {renderMenu(menu.children)}
        </div>
    )
}

export default Sidebar4