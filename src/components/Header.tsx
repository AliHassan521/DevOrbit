import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 mr-6">
              BlogHub
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/feed" className="text-gray-600 hover:text-gray-800">
                Feed
              </Link>
              <Link
                to="/bookmarks"
                className="text-gray-600 hover:text-gray-800"
              >
                Bookmarks
              </Link>
              <Link to="/tags" className="text-gray-600 hover:text-gray-800">
                Tags
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Search..."
              className="px-3 py-1 border rounded-md mr-2 hidden md:block"
            />
            <Link
              to="/write"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block"
            >
              Write
            </Link>
            <Link
              to="/profile"
              className="ml-2 text-gray-600 hover:text-gray-800 hidden md:block"
            >
              Profile
            </Link>
            <button
              className="md:hidden text-gray-600 hover:text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 py-4">
              <Link
                to="/feed"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Feed
              </Link>
              <Link
                to="/bookmarks"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Bookmarks
              </Link>
              <Link
                to="/tags"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Tags
              </Link>
              <Link
                to="/write"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Write
              </Link>
              <Link
                to="/profile"
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </nav>
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-3 py-1 border rounded-md my-2"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
