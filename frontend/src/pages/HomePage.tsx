import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { Post } from "../App";

const HomePage: React.FC = () => {
  const featuredPosts: Post[] = [
    {
      id: "1",
      title: "Getting Started with React",
      excerpt:
        "Learn the basics of React and start building your first application.",
      content: "Full content here...",
      author: "John Doe",
      date: "May 15, 2023",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      id: "2",
      title: "Advanced TypeScript Techniques",
      excerpt:
        "Explore advanced TypeScript features to write more robust code.",
      content: "Full content here...",
      author: "Jane Smith",
      date: "May 20, 2023",
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
    {
      id: "3",
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Learn how to create efficient and scalable APIs using Node.js and Express.",
      content: "Full content here...",
      author: "Mike Johnson",
      date: "May 25, 2023",
      tags: ["Node.js", "API", "Backend"],
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to BlogHub
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover amazing content from writers around the world.
        </p>
        <div className="space-x-4">
          <Link
            to="/feed"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Explore Feed
          </Link>
          <Link
            to="/write"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Start Writing
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Why Choose BlogHub?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Share Your Voice</h3>
            <p className="text-gray-600">
              Express yourself and reach a global audience with your unique
              perspective.
            </p>
          </div>
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Connect with Others</h3>
            <p className="text-gray-600">
              Engage with like-minded individuals and build a community around
              your interests.
            </p>
          </div>
          <div className="text-center">
            <svg
              className="w-12 h-12 mx-auto mb-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Discover New Ideas</h3>
            <p className="text-gray-600">
              Explore a diverse range of topics and expand your knowledge
              horizons.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
