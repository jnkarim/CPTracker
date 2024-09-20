import React from "react";
import './JoinDiscord.css';
import { FaDiscord } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si'; // Adding more icons for CP platforms

const JoinDiscord = () => {
  return (
    <div className="join-discord-section">
      <div className="join-discord-card">
        <FaDiscord className="join-discord-logo bounce-logo" />
        <h1 className="fade-in-title">Join Our Competitive Programming Community</h1>
        <p className="fade-in-text">
          Level up your coding skills by collaborating with competitive programmers. Stay updated with 
          coding contests on platforms like Codeforces, LeetCode, HackerRank, and more. Let’s grow together!
        </p>

        {/* Updated Section: Adding links to each platform */}
        <div className="cp-platform-icons fade-in-icons">
          <a href="https://codeforces.com" target="_blank" rel="noopener noreferrer">
            <SiCodeforces className="cp-icon rotate-icon" title="Codeforces" />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="cp-icon rotate-icon" title="LeetCode" />
          </a>
          <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">
            <SiHackerrank className="cp-icon rotate-icon" title="HackerRank" />
          </a>
          <a href="https://www.codechef.com" target="_blank" rel="noopener noreferrer">
            <SiCodechef className="cp-icon rotate-icon" title="CodeChef" />
          </a>
        </div>

        <a 
          href="https://discord.gg/9uEj2HBe" 
          className="join-discord-btn pulse-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

export default JoinDiscord;
