import React, { useState } from "react";
import "./Tutorials.css";

const tutorialsData = [
  {
    title: "Dynamic Programming",
    description: "An introduction to the world of dynamic programming.",
    videoUrl: "https://www.youtube.com/watch?v=xeeo6nhq9IY&list=PLauivoElc3gimdmLcIIpafEkzGs4tCQmi&pp=iAQB",
    thumbnailUrl: "https://i.ytimg.com/vi/xeeo6nhq9IY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC2NabpJrdzAe5LGu6BUd6dwP40gg",
  },
  {
    title: "C++ STL || Competetive Programming",
    description: "Tips and tricks to get started with advanced C++.",
    videoUrl: "https://www.youtube.com/watch?v=R5BEcvTVZj0&list=PLauivoElc3gh3RCiQA82MDI-gJfXQQVnn&pp=iAQB",
    thumbnailUrl: "https://i.ytimg.com/vi/R5BEcvTVZj0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDy0n7kBkZHRJQ9lD-0JHI57Xg2YQ",
  },
  {
    title: "Data Structures for Competitive Programming",
    description: "Essential data structures every competitive programmer should know.",
    videoUrl: "https://www.youtube.com/watch?v=OMcxQ3IY-qc&list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-",
    thumbnailUrl: "https://i.ytimg.com/vi/OMcxQ3IY-qc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBxmIE0hjODYFTqWwgCQ9vyTllyRw",
  },
  {
    title: "Dynamic Programming - Learn to Solve",
    description: "Understanding dynamic programming through examples.",
    videoUrl: "https://www.youtube.com/watch?v=nEEROBg1kbg&list=PLcXpkI9A-RZI-xF76L0sZq_u-k_yHz8pd",
    thumbnailUrl: "https://i.ytimg.com/vi/nEEROBg1kbg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCzjELXUS2hx7DJRxifSB7275Uzgg",
  },
  {
    title: "Top Advanced Topics",
    description: "In-depth techniques for optimized performance.",
    videoUrl: "https://www.youtube.com/watch?v=U2E9PxRd680&pp=ygUWYWR2YW5jZWQgdG9waWNzIGZvciBjcA%3D%3D",
    thumbnailUrl: "https://i.ytimg.com/vi/U2E9PxRd680/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7T8LjGMDt_uOCDENXj71njFaU6w",
  },
  {
    title: "Learn Python Programming",
    description: "Learn Python to automate tasks, analyze data, and build applications.",
    videoUrl: "https://www.youtube.com/watch?v=nLRL_NcnK-4&t=31581s&pp=ygUURHluYW1pYyBQcm9ncmFtbWluZyA%3D",
    thumbnailUrl: "https://i.ytimg.com/vi/nLRL_NcnK-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5lx7Ejw4EXmM_Vlc1_bZ3RLKQ7g",
  },
  {
    title: "Basic Programming Concepts",
    description: "Foundation of coding logic and syntax.",
    videoUrl: "https://www.youtube.com/watch?v=F7CWjuaC6gw&list=PLb__S-rkKhexdiJomXSGeqQ46c_MUTPaj",
    thumbnailUrl: "https://i.ytimg.com/vi/F7CWjuaC6gw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCF8l8mbBEAMeFrVwcUpkVPP4qZlA",
  },
  {
    title: "Mathematics in CP",
    description: "Essential mathematical principles for problem-solving.",
    videoUrl: "https://www.youtube.com/watch?v=RCq5TYMZEwg&list=PLauivoElc3giVROwL-6g9hO-LlSen_NaV",
    thumbnailUrl: "https://i.ytimg.com/vi/RCq5TYMZEwg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA5SI2KhigaAWyVUKjxjR44CQM70w",
  },
  {
    title: "Algorithms",
    description: "Step-by-step solutions to complex problems.",
    videoUrl: "https://www.youtube.com/watch?v=NLKQEOgBAnw&list=PLzj36JymbM9DNUcDrTgSaYh-C2cDg0sSb",
    thumbnailUrl: "https://i.ytimg.com/vi/NLKQEOgBAnw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCQSKES1TMgqXoOzyytM5VONzOrgw",
  },
  {
    title: "Data Structures",
    description: "Organizing data efficiently for quick access.",
    videoUrl: "https://www.youtube.com/watch?v=XCyuHSJS7XE&list=PLIY8eNdw5tW_zX3OCzX7NJ8bL1p6pWfgG",
    thumbnailUrl: "https://i.ytimg.com/vi/XCyuHSJS7XE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBu4XjGMXSW3Bwo6k6FsU9Rho3EbA",
  },
  {
    title: "Online Judges and Platforms",
    description: "Websites for coding practice and competitions.",
    videoUrl: "https://www.youtube.com/watch?v=n-Xkbqcfi9w&t=491s&pp=ygUeT25saW5lIEp1ZGdlcyBhbmQgUGxhdGZvcm1zIGNw",
    thumbnailUrl: "https://i.ytimg.com/vi/n-Xkbqcfi9w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgtPwpG9ABrutl7SNrzyuwtA8O2w",
  },
  {
    title: "Tips for Competitive Programming",
    description: "Strategies for success in coding contests.",
    videoUrl: "https://www.youtube.com/watch?v=bVKHRtafgPc&pp=ygUgVGlwcyBmb3IgQ29tcGV0aXRpdmUgUHJvZ3JhbW1pbmc%3D",
    thumbnailUrl: "https://i.ytimg.com/vi/bVKHRtafgPc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFryq4qpAwkIARUAAIhCGAFwAcABBg==&rs=AOn4CLBwzf_X8ct1sPnlh0JO762VdMppCw",
  },
];

const Tutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTutorials = tutorialsData.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="tutorials-container">
      <h1>Tutorials</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search tutorials..."
          className="search-box"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="tutorials-list">
        {filteredTutorials.map((tutorial, index) => (
          <div className="tutorial-card" key={index}>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.description}</p>
            <a href={tutorial.videoUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={tutorial.thumbnailUrl}
                alt={`Thumbnail for ${tutorial.title}`}
                className="thumbnail"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
