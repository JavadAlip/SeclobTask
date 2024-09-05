import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import Logo from '../assets/aloha.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <img src={Logo} alt="" style={{ width: '50px', height: '25px', cursor: 'pointer' }} />
        </div>

        {/* Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primaryGreen focus:outline-none"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" /> // Close icon when menu is open
            ) : (
              <HiMenu className="w-6 h-6" /> // Hamburger icon when menu is closed
            )}
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
