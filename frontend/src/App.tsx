import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import WritePage from "./pages/WritePage";
import BookmarksPage from "./pages/BookmarksPage";
import TagsPage from "./pages/TagsPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPostPage from "./pages/BlogPostPage";
import SearchResultsPage from "./pages/SearchResultPage";
import NotFoundPage from "./pages/NotFoundPage";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/post/:id" element={<BlogPostPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
