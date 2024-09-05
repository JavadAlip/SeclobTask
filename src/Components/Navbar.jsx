import React, { useState } from "react";
import Logo from '../assets/aloha.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div>
        <img src={Logo} alt="" style={{ width: '50px', height: '25px', cursor: 'pointer' }} />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primaryGreen focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`md:flex md:items-start md:space-x-6 absolute md:relative left-0 right-0 top-16 md:top-0 bg-white md:bg-transparent z-20 p-4 md:p-0 md:space-y-0 space-y-4 md:block ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="block text-primaryGreen hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block text-primaryGreen hover:text-gray-300">
            Surfing
          </a>
          <a href="#" className="block text-primaryGreen hover:text-gray-300">
            Hula
          </a>
          <a href="#" className="block text-primaryGreen hover:text-gray-300">
            Volcano
          </a>
        </div>

        {/* Button visible only on larger screens */}
        <div className="hidden md:block">
          <button className="bg-primaryGreen text-white px-4 py-2 rounded-md">
            Book a Trip
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
