import React, { useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  // Mock data for blogs (replace with actual data fetching)
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Introduction to Dynamic Programming",
      author: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-06-27",
    },
    {
      id: 2,
      title: "Graph Algorithms: Depth-First Search",
      author: "Jane Smith",
      content: "Pellentesque habitant morbi tristique senectus et netus...",
      date: "2024-06-26",
    },
    {
      id: 3,
      title: "Binary Search and Its Applications",
      author: "David Johnson",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      date: "2024-06-25",
    },
  ]);

  return (
    <div className="blogs-container">
      <div className="header">
        <h1>Explore Blogs</h1>
        <p>Discover insightful articles and updates.</p>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search blogs..."
          className="search-box"
        />
        <button className="search-button">Search</button>
      </div>

      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-author">
              By {blog.author} | {blog.date}
            </p>
            <p className="blog-content">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
