import React from "react";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center space-x-6 mb-4">
            <img
              className="h-24 w-24 rounded-full object-cover"
              src="https://via.placeholder.com/96"
              alt="User avatar"
            />
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">Web Developer</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Passionate web developer with 5 years of experience in React and
            Node.js. Love to write about tech and share knowledge with the
            community.
          </p>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-blue-500 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              GitHub
            </a>
            <a href="#" className="text-blue-500 hover:underline">
              LinkedIn
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-2xl font-bold">15</p>
              <p className="text-gray-600">Posts</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-2xl font-bold">1.2k</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-2xl font-bold">500</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/post/1" className="text-blue-500 hover:underline">
                Introduction to React Hooks
              </Link>
            </li>
            <li>
              <Link to="/post/2" className="text-blue-500 hover:underline">
                Building a RESTful API with Node.js
              </Link>
            </li>
            <li>
              <Link to="/post/3" className="text-blue-500 hover:underline">
                CSS Grid Layout: A Complete Guide
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
