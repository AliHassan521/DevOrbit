import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { Post } from "../App";

const HomePage: React.FC = () => {
  const featuredPosts: Post[] = [
    {
      title: "Getting Started with React",
      excerpt:
        "Learn the basics of React and start building your first application.",
      author: "John Doe",
      date: "May 15, 2023",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      title: "Advanced TypeScript Techniques",
      excerpt:
        "Explore advanced TypeScript features to write more robust code.",
      author: "Jane Smith",
      date: "May 20, 2023",
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Learn how to create efficient and scalable APIs using Node.js and Express.",
      author: "Mike Johnson",
      date: "May 25, 2023",
      tags: ["Node.js", "API", "Backend"],
    },
  ];

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to BlogHub
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover amazing content from writers around the world.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                to="/feed"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Get Started
              </Link>
              <Link
                to="/tags"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Explore Tags
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Latest Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
