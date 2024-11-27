import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../App";

const BlogCard: React.FC<Post> = ({ title, excerpt, author, date, tags }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <Link
            to={`/post/${title.toLowerCase().replace(/ /g, "-")}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <div className="mt-4">
          {tags.map((tag, index) => (
            <Link
              key={index}
              to={`/tag/${tag.toLowerCase()}`}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
