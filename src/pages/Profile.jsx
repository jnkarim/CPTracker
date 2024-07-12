import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-heading">User Profile</h1>
      <div className="profile-info">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-details">
          <h2>Md Nahid Hossain</h2>
          <p>Email: nahidjulkijami@gmail.com</p>
          <p>Joined: January 1, 2023</p>
        </div>
      </div>
      <div className="bio-section">
        <h2>Bio</h2>
        <p>
          A passionate coder with a love for problem-solving and algorithmic
          challenges. Always looking for new ways to improve and learn.
        </p>
      </div>
      <div className="profile-section">
        <div className="profile-card">
          <h2>Codeforces</h2>
          <p>
            Rank: <span className="rank">1234</span>
          </p>
          <p>
            Problems Solved: <span className="problems-solved">56</span>
          </p>
        </div>
        <div className="profile-card">
          <h2>CodeChef</h2>
          <p>
            Rank: <span className="rank">4321</span>
          </p>
          <p>
            Problems Solved: <span className="problems-solved">78</span>
          </p>
        </div>
      </div>
      <div className="performance-graph">
        <h2>Performance Graph</h2>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Performance Graph"
          className="performance-image"
        />
      </div>
      <div className="recent-activities">
        <h2>Recent Activities</h2>
        <ul>
          <li>Participated in Codeforces Round #1234</li>
          <li>Solved "Two Sum" problem on LeetCode</li>
          <li>Joined CodeChef Cook-Off July 2024</li>
        </ul>
      </div>
      <div className="profile-actions">
        <button className="btn">Edit Profile</button>
        <button className="btn">View Achievements</button>
      </div>
    </div>
  );
};

export default Profile;