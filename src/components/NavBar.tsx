import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg m-4 rounded-full px-4 py-2 border-2 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Hamburger Menu (for mobile) and Logo */}
        <div className="flex items-center">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-black focus:outline-none mr-2"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              // Cancel Icon (for closing the menu)
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger Icon (for opening the menu)
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>

          {/* Logo */}
          <img src={logo} alt="Logo" className="mr-2 w-10 h-10 rounded-full" />
          {/* Website Name */}
          <span className="text-black text-2xl font-extrabold tracking-wide">
            DevOrbit
          </span>
        </div>

        {/* Right Section: Menu Links and Log in button */}
        <div className="hidden sm:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-xl">
            Contact
          </a>
          <button className="bg-yellow-500 text-white border-2 py-1 px-3 rounded-full hover:bg-yellow-600 transition duration-300">
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-white shadow-lg border rounded-lg z-50 p-6 flex flex-col items-center justify-center"
        >
          {/* Links in mobile view */}
          <a
            href="#"
            className="block text-gray-700 hover:text-black mb-4 text-xl"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-black mb-4 text-xl"
          >
            Blog
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-black mb-4 text-xl"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-black mb-4 text-xl"
          >
            Contact
          </a>
          {/* Log in button in mobile view */}
          <button className="bg-yellow-500 text-white border-2 py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
