import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import logo from '../assets/images/Logo.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className=" h-[17vh] shadow-md">
      {/* Top Logo and Search Bar Section */}
      <div className="bg-[#9c27b0] text-white py-2 drop-shadow-lg px-4 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <img
            src={logo} // Replace with your logo
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-md shadow-black"
          />
          <div className='h-12 w-[2px] bg-white rounded-md'></div>
          <div className="leading-tight">
            <h1 className="text-3xl font-semibold  italic " style={{ fontFamily: 'Playfair Display' }} >Classic Event</h1>
            <p className="text-xs italic">Classic Touches for Modern Celebrations...</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 text-black rounded-full px-4 py-2 w-1/2">
          <input
            type="text"
            placeholder="Search for category or products..."
            className="bg-transparent w-full outline-none text-sm"
          />
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 15.232l5.518 5.518M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4 text-white ">
          {/* Cart */}
          {/* <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l3.6-7H5.4M7 13L5 6H3M7 13l1.2 6m10.6 0l1.2-6M9 19a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-red-500 text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div> */}
          {/* Profile */}
          <AccountCircleIcon/>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 18.364A9 9 0 1118.364 5.121 9 9 0 015.121 18.364zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg> */}
        </div>
      </div>

      {/* Navigation Links Section */}
      <nav className="shadow-sm md:flex justify-start border-y-2 border-[#9c27b0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Menu Links */}
            <ul className="hidden md:flex space-x-8">
              {["Home", "Category", "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setActiveLink(link)}
                      className={`${
                        activeLink === link ? "text-red-500" : "text-black"
                      } hover:text-red-500 transition-all font-medium`}
                    >
                      {link}
                    </Link>
                    {activeLink === link && (
                      <div className="h-1 w-full bg-red-500 rounded-full mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1"></div>
                      </div>
                    )}
                  </li>
                )
              )}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="md:hidden space-y-4 py-4">
              {["Home", "Category", "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => {
                        setActiveLink(link);
                        toggleMobileMenu();
                      }}
                      className="block text-black hover:text-red-500 transition-all font-medium"
                    >
                      {link}
                    </Link>
                    {activeLink === link && (
                      <div className="h-1 bg-red-500 rounded-full mt-1 w-full">
                        <div className="w-2 h-2 bg-red-500 rounded-full mx-auto mt-1"></div>
                      </div>
                    )}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
