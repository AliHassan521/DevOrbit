import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Path to your transparent logo PNG

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* Logo with rounded corners */}
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 rounded-full mr-2" // Rounded and fixed size
            />
            <Link to="/" className="text-2xl font-bold text-blue-600 mr-6">
              DevOrbit
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link
                to="/feed"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Feed
              </Link>
              <Link
                to="/bookmarks"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Bookmarks
              </Link>
              <Link
                to="/tags"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Tags
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <form onSubmit={handleSearch} className="mr-2 hidden md:block">
              <input
                type="search"
                placeholder="Search..."
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Link
              to="/write"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md hidden md:block transition-colors"
            >
              Write
            </Link>
            <Link
              to="/profile"
              className="ml-2 text-gray-600 hover:text-blue-600 hidden md:block transition-colors"
            >
              Profile
            </Link>
            <button
              className="md:hidden text-gray-600 hover:text-blue-600"
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
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Feed
              </Link>
              <Link
                to="/bookmarks"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Bookmarks
              </Link>
              <Link
                to="/tags"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Tags
              </Link>
              <Link
                to="/write"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Write
              </Link>
              <Link
                to="/profile"
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </nav>
            <form onSubmit={handleSearch} className="my-2">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
