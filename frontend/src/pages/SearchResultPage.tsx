import React from "react";
import { useLocation, Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { Post } from "../App";

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  // In a real application, you would fetch search results based on the query
  const searchResults: Post[] = [
    {
      id: "1",
      title: "Understanding React Hooks",
      excerpt:
        "Learn how to use React Hooks to manage state and side effects in your functional components.",
      content: "Full content here...",
      author: "Jane Doe",
      date: "June 15, 2023",
      tags: ["React", "JavaScript", "Hooks"],
    },
    {
      id: "2",
      title: "Advanced TypeScript Techniques",
      excerpt:
        "Explore advanced TypeScript features to write more robust and maintainable code.",
      content: "Full content here...",
      author: "John Smith",
      date: "June 10, 2023",
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {searchResults.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            No results found for "{query}".
          </p>
          <p className="text-gray-600 mb-4">
            Try different keywords or check your spelling.
          </p>
          <Link to="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
