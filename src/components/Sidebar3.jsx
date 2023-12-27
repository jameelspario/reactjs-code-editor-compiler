import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const sidebaritems = [
  {
    "id": 1,
    "label": "Dashboard",
    "subItems": []
  },
  {
    "id": 2,
    "label": "Submenu",
    "subItems": [
      { "id": 3, "label": "Subitem 1" },
      { "id": 4, "label": "Subitem 2" }
    ]
  },
  {
    "id": 5,
    "label": "Item 3",
    "subItems": []
  }
];

const Sidebar3 = ({ menuData }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSubMenuOpen(false);
  };

  const renderSubMenu = (subItems) => {
    return (
      <ul className="pl-4">
        {subItems.map((subItem) => (
          <li
            key={subItem.id}
            className={`py-2 ${selectedItem === subItem.label ? 'bg-gray-600' : ''}`}
            onClick={() => handleItemClick(subItem.label)}
          >
            <a href="#" className="flex items-center">
              <span>{subItem.label}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderSidebarItems = () => {
    return sidebaritems.map((menuItem) => (
      <li key={menuItem.id} className={`py-2 cursor-pointer ${selectedItem === menuItem.label ? 'bg-gray-600' : ''}`}>
        <div className="flex items-center" onClick={() => toggleSubMenu(menuItem.label)}>
          <span>{menuItem.label}</span>
          {menuItem.subItems.length > 0 && (
            <div className="ml-1">
              {isSubMenuOpen ? (
                <FaAngleDown className="w-4 h-4" />
              ) : (
                <FaAngleRight className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
        {menuItem.subItems.length > 0 && isSubMenuOpen && renderSubMenu(menuItem.subItems)}
      </li>
    ));
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white p-4 w-64">
        {/* Sidebar Content */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-semibold">My Sidebar</div>
        </div>

        {/* Main Menu */}
        <ul>{renderSidebarItems()}</ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar3;