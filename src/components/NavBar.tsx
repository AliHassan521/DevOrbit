import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu card

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
    <nav className="bg-white shadow-lg m-4 rounded-full px-2 py-2 border-2 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Hamburger and Logo */}
        <div className="flex items-center">
          {/* Hamburger Menu (for mobile screens) */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-black focus:outline-none mr-2"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              // Cancel Icon
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
              // Hamburger Icon
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
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="mr-3 w-10 h-10 rounded-full"
            />
            <span className="text-black text-2xl font-extrabold tracking-wide hidden sm:block">
              DevOrbit
            </span>
          </div>
        </div>

        {/* Right: Get Started Button (visible on all screen sizes) */}
        <div className="hidden sm:flex">
          <button className="bg-yellow-500 text-white border-2 py-1 px-3 rounded-full hover:bg-yellow-600 transition duration-300">
            Log in
          </button>
        </div>
      </div>

      {/* Mobile Menu Card (only visible when toggled on mobile) */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-white shadow-lg border rounded-lg z-50 p-6 flex flex-col items-center justify-center"
        >
          <span className="text-black text-2xl font-extrabold tracking-wide hidden sm:block">
            DevOrbit
          </span>
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black focus:outline-none"
            aria-label="Close Menu"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
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
        </div>
      )}

      {/* Log in Button for Mobile View */}
      <div className="fixed bottom-4 right-4 sm:hidden">
        <button className="bg-yellow-500 text-white border-2 py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
