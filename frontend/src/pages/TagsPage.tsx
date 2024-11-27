import React from "react";
import { Link } from "react-router-dom";

interface Tag {
  name: string;
  count: number;
}

const TagsPage: React.FC = () => {
  const tags: Tag[] = [
    { name: "React", count: 120 },
    { name: "JavaScript", count: 95 },
    { name: "CSS", count: 80 },
    { name: "Node.js", count: 75 },
    { name: "Python", count: 70 },
    { name: "Web Development", count: 65 },
    { name: "Data Science", count: 60 },
    { name: "Machine Learning", count: 55 },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Explore Tags</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tags.map((tag) => (
          <Link
            key={tag.name}
            to={`/tag/${tag.name.toLowerCase()}`}
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{tag.name}</h2>
            <p className="text-gray-600">{tag.count} posts</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
