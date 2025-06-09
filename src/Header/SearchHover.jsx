import React, { useState, useRef } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const AdvancedSearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 150);
  };

  const closeSearch = () => {
    if (inputRef.current?.value.trim() === '') {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative flex items-center justify-end"
      onMouseEnter={openSearch}
      onMouseLeave={closeSearch}
    >
      {/* Animated Search Input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={`
          absolute right-10
          transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          origin-right z-10
          bg-white  border border-gray-100 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          text-sm
          ${
            isOpen
              ? 'opacity-100 scale-00 w-56 px-4 py-2'
              : 'opacity-0 scale-75 w-0 px-0 py-0 pointer-events-none'
          }
        `}
      />

      {/* Search Icon */}
      <IoSearchOutline
        size={28}
        className="text-gray-600 cursor-pointer z-20"
      />
    </div>
  );
};

export default AdvancedSearchBox;
