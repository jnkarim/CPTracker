import React, { useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: "Introduction to Dynamic Programming",
      author: "Javatpoint",
      content: "Dynamic programming is a technique that breaks the...",
      date: "2024-06-27",
      link: "https://www.javatpoint.com/dynamic-programming",
      image: "https://i.pinimg.com/564x/f8/ef/22/f8ef2227363f14525643c2698ee77628.jpg", // Replace with actual link
    },
    {
      id: 2,
      title: "Graph Algorithms: Depth-First Search",
      author: "Javatpoint",
      content: "DFS is a recursive algorithm to search all the...",
      date: "2024-06-26",
      link: "https://www.javatpoint.com/depth-first-search-algorithm",
      image: "https://i.pinimg.com/564x/91/f7/8f/91f78f8cdf07058c4d7895a82dec2238.jpg", // Replace with actual link
    },
    {
      id: 3,
      title: "Binary Search and Its Applications",
      author: "Javatpoint",
      content: "Searching is the process of finding some particular element...",
      date: "2024-06-25",
      link: "https://www.javatpoint.com/binary-search",
      image: "https://i.pinimg.com/564x/70/db/fa/70dbfa1429419284d9ee9985cd93c6dd.jpg", // Replace with actual link
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      author: "Javatpoint",
      content: "Machine learning is a method of data analysis that automates analytical model building...",
      date: "2024-06-24",
      link: "https://www.javatpoint.com/machine-learning",
      image: "https://static.javatpoint.com/tutorial/machine-learning/images/machine-learning-logo.png", // Replace with actual link
    },
    {
      id: 5,
      title: "Understanding Neural Networks",
      author: "IBM",
      content: "A neural network is a series of algorithms that attempt to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates...",
      date: "2024-06-23",
      link: "https://www.ibm.com/topics/neural-networks",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/800px-Colored_neural_network.svg.png", // Replace with actual link
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="search-button">Search</button>
      </div>

      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="blog-item"
            onClick={() => openLink(blog.link)}
            style={{ cursor: "pointer" }}
          >
            <div className="blog-info">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-author">
                By {blog.author} | {blog.date}
              </p>
              <p className="blog-content">{blog.content}</p>
            </div>
            <img src={blog.image} alt={blog.title} className="blog-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
