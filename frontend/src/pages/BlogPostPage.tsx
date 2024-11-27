import React from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../App";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real application, you would fetch the post data based on the id
  const post: Post = {
    id: "1",
    title: "Understanding React Hooks",
    content: `
      React Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features without writing a class. This means you can use React without classes.

      The most commonly used hooks are:

      1. useState: This hook lets you add React state to function components.
      2. useEffect: This hook lets you perform side effects in function components.
      3. useContext: This hook lets you subscribe to React context without introducing nesting.

      Hooks solve many problems that developers faced with the class-based approach, such as the complexity of using this keyword, the verbosity of the class syntax, and the difficulty in reusing stateful logic between components.

      By using hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
    `,
    excerpt:
      "Learn how to use React Hooks to manage state and side effects in your functional components.",
    author: "Jane Doe",
    date: "June 15, 2023",
    tags: ["React", "JavaScript", "Hooks"],
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <article className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <img
              className="h-10 w-10 rounded-full mr-4"
              src="https://via.placeholder.com/40"
              alt={post.author}
            />
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <div className="prose max-w-none mb-6">
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mb-6">
            {post.tags.map((tag, index) => (
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
      </article>
      <div className="mt-8">
        <Link to="/feed" className="text-blue-500 hover:underline">
          ← Back to Feed
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
