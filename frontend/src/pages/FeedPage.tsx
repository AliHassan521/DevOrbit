import React from "react";
import BlogCard from "../components/BlogCard";
import { Post } from "../App";

const FeedPage: React.FC = () => {
  const posts: Post[] = [
    {
      id: "1",
      title: "Introduction to Next.js",
      excerpt:
        "Learn the basics of Next.js and how it can help you build better React applications.",
      content: "Full content here...",
      author: "John Smith",
      date: "June 5, 2023",
      tags: ["Next.js", "React", "Web Development"],
    },
    {
      id: "2",
      title: "CSS Grid Layout Explained",
      excerpt:
        "Master CSS Grid Layout with this comprehensive guide and examples.",
      content: "Full content here...",
      author: "Emily Brown",
      date: "June 7, 2023",
      tags: ["CSS", "Web Design", "Frontend"],
    },
    {
      id: "3",
      title: "JavaScript Promises Demystified",
      excerpt:
        "Understand how JavaScript Promises work and how to use them effectively in your code.",
      content: "Full content here...",
      author: "David Lee",
      date: "June 10, 2023",
      tags: ["JavaScript", "Async", "Programming"],
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Feed</h1>
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Latest
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
          Popular
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
          Following
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
