import React, { useEffect, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-y-0  transition-transform transform ${
        isOpen ? "translate-x-0  left-0" : "-translate-x-full left-20"
      } w-64 text-white flex flex-col z-50 relative border-r border-gray-400`}
    >
      <div
        onClick={toggleSidebar}
        className={`flex items-center justify-between ${
          isOpen ? "rotate-180" : ""
        } p-4 absolute z-10 -right-[24px]`}
      >
        <img
          src='/public/sidebarArrow.svg'
          className='h-[20px] w-[20px] rounded-full'
        />
      </div>
      <nav className='flex-grow p-4'>
        <button
          className={`flex items-center gap-2 w-full text-left py-2 px-4 rounded-md hover:bg-gray-700 ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='../src/assets/react.svg' className='w-5 h-5' />
          {show ? "Data" : ""}
        </button>
        <button
          className={`flex items-center gap-2 w-full text-left py-2 px-4 rounded-md hover:bg-gray-700 ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='../src/assets/react.svg' className='w-5 h-5' />
          {show ? "Data" : ""}
        </button>
        <button
          className={`flex items-center gap-2 w-full text-left py-2 px-4 rounded-md hover:bg-gray-700 ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='../src/assets/react.svg' className='w-5 h-5' />
          {show ? "Data" : ""}
        </button>
        <button
          className={`flex items-center gap-2 w-full text-left py-2 px-4 rounded-md hover:bg-gray-700 ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='../src/assets/react.svg' className='w-5 h-5' />
          {show ? "Data" : ""}
        </button>
        <button
          className={`flex items-center gap-2 w-full text-left py-2 px-4 rounded-md hover:bg-gray-700 ${
            show ? "" : "justify-end"
          }`}
        >
          <img src='../src/assets/react.svg' className='w-5 h-5' />
          {show ? "Data" : ""}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
