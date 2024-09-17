import React from "react";
import BlogCard from "../components/BlogCard";
import { Post } from "../App";

const BookmarksPage: React.FC = () => {
  const bookmarkedPosts: Post[] = [
    {
      id: "1",
      title: "Advanced React Patterns",
      excerpt:
        "Explore advanced React patterns to write more efficient and maintainable code.",
      content: "Full content here...",
      author: "Alice Johnson",
      date: "May 28, 2023",
      tags: ["React", "JavaScript", "Advanced"],
    },
    {
      id: "2",
      title: "Building a RESTful API with Node.js",
      excerpt:
        "Learn how to create a robust RESTful API using Node.js and Express.",
      content: "Full content here...",
      author: "Bob Williams",
      date: "June 2, 2023",
      tags: ["Node.js", "API", "Backend"],
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Bookmarks</h1>
      {bookmarkedPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookmarkedPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            You haven't bookmarked any posts yet.
          </p>
          <a href="/feed" className="text-blue-500 hover:underline">
            Explore the feed to find interesting posts
          </a>
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;
