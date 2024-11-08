// import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Heroicons for the hamburger menu
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-black px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">MyLogo</span>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-white" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Menu Items for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Search and User Avatar */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (Hidden on mobile, visible on larger screens) */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-3 py-2 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 border-2 border-solid border-black"
          />

          {/* User Avatar */}
          {/* <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          /> */}
          <h2>
            <FaUserCircle />
          </h2>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          <a href="#home" className="block text-white hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="block text-white hover:text-gray-300">
            About
          </a>
          <a href="#services" className="block text-white hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="block text-white hover:text-gray-300">
            Contact
          </a>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
