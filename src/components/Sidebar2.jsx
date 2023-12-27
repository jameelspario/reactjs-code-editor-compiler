// Sidebar.js
import React, { useState } from 'react';
// import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const Sidebar2 = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
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
        <ul>
          <li className="py-2">
            <a href="#" className="flex items-center">
              <span>Dashboard</span>
            </a>
          </li>
          <li className="py-2 cursor-pointer" onClick={toggleSubMenu}>
            <div className="flex items-center">
              <span>Submenu</span>
              {isSubMenuOpen ? (
                <FaAngleDown className="w-4 h-4 ml-1" />
              ) : (
                <FaAngleRight className="w-4 h-4 ml-1" />
              )}
            </div>
            {/* Submenu items */}
            {isSubMenuOpen && (
              <ul className="pl-4">
                <li className="py-2">
                  <a href="#" className="flex items-center">
                    <span>Subitem 1</span>
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="flex items-center">
                    <span>Subitem 2</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="py-2">
            <a href="#" className="flex items-center">
              <span>Item 3</span>
            </a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Your main content goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default Sidebar2;
