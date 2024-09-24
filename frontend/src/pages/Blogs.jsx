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
      image:
        "https://i.pinimg.com/564x/f8/ef/22/f8ef2227363f14525643c2698ee77628.jpg",
    },
    {
      id: 2,
      title: "Graph Algorithms: Depth-First Search",
      author: "Javatpoint",
      content: "DFS is a recursive algorithm to search all the...",
      date: "2024-06-26",
      link: "https://www.javatpoint.com/depth-first-search-algorithm",
      image:
        "https://i.pinimg.com/564x/91/f7/8f/91f78f8cdf07058c4d7895a82dec2238.jpg",
    },
    {
      id: 3,
      title: "Binary Search and Its Applications",
      author: "Javatpoint",
      content: "Searching is the process of finding some particular element...",
      date: "2024-06-25",
      link: "https://www.javatpoint.com/binary-search",
      image:
        "https://i.pinimg.com/564x/70/db/fa/70dbfa1429419284d9ee9985cd93c6dd.jpg",
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      author: "Javatpoint",
      content:
        "Machine learning is a method of data analysis that automates analytical model building...",
      date: "2024-06-24",
      link: "https://www.javatpoint.com/machine-learning",
      image:
        "https://static.javatpoint.com/tutorial/machine-learning/images/machine-learning-logo.png",
    },
    {
      id: 5,
      title: "Understanding Neural Networks",
      author: "IBM",
      content:
        "A neural network is a series of algorithms that attempt to recognize underlying relationships in a set of data...",
      date: "2024-06-23",
      link: "https://www.ibm.com/topics/neural-networks",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Colored_neural_network.svg/800px-Colored_neural_network.svg.png",
    },
    {
      id: 6,
      title: "Introduction to Recursion",
      author: "Javatpoint",
      content:
        "Recursion is a technique where a function calls itself to solve smaller instances of the same problem...",
      date: "2024-06-22",
      link: "https://www.javatpoint.com/recursion",
      image:
        "https://i.pinimg.com/736x/af/36/88/af3688b8e72b7b9ae226b1acf989e5eb.jpg",
    },
    {
      id: 7,
      title: "A Guide to Time Complexity",
      author: "GeeksforGeeks",
      content:
        "Time complexity is used to quantify the amount of time an algorithm takes to run...",
      date: "2024-06-21",
      link: "https://www.geeksforgeeks.org/understanding-time-complexity/",
      image:
        "https://i.pinimg.com/564x/93/ff/cd/93ffcd2d88c3cab00eb2e5dd8ed0a87c.jpg",
    },
    {
      id: 8,
      title: "Backtracking Algorithm Explained",
      author: "Javatpoint",
      content:
        "Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally...",
      date: "2024-06-20",
      link: "https://www.javatpoint.com/backtracking-algorithm",
      image:
        "https://i.pinimg.com/564x/f5/ed/06/f5ed06e8bd878825c8c4b889b3f04ca5.jpg",
    },
    {
      id: 9,
      title: "Greedy Algorithm in Detail",
      author: "GeeksforGeeks",
      content:
        "A greedy algorithm is an approach for solving problems by choosing the best option at the moment...",
      date: "2024-06-19",
      link: "https://www.geeksforgeeks.org/greedy-algorithms/",
      image:
        "https://i.pinimg.com/564x/75/e4/9d/75e49dd519fe370982d87f5fe32e2e87.jpg",
    },
    {
      id: 10,
      title: "Mastering Divide and Conquer",
      author: "GeeksforGeeks",
      content:
        "Divide and conquer is an algorithm design paradigm based on multi-branched recursion...",
      date: "2024-06-18",
      link: "https://www.geeksforgeeks.org/divide-and-conquer-algorithm/",
      image:
        "https://i.pinimg.com/474x/a9/83/cb/a983cba877093e0904a1e801cb14d8cc.jpg",
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
