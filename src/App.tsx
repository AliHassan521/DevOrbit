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

export interface Post {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
