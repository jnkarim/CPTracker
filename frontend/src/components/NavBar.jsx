// Navbar.jsx

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    if (localStorage.getItem("authToken")) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false); // Update authentication state
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <span className="brand">CPTracker</span>
        <div className="hamburger" onClick={handleToggle}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMobile ? "nav-ul mobile" : "nav-ul"}>
          <li className="nav-item">
            <Link className="link" to="/" onClick={() => setIsMobile(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="link"
              to="/contest"
              onClick={() => setIsMobile(false)}
            >
              Contests
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="link"
              to="/profile"
              onClick={() => setIsMobile(false)}
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="link"
              to="/blogs"
              onClick={() => setIsMobile(false)}
            >
              Blogs
            </Link>
          </li>
        </ul>

        {isAuthenticated ? (
          <div className="nav-auth">
            <span className="auth-link" onClick={handleLogout}>
              Log Out
            </span>
          </div>
        ) : (
          <div className="nav-auth">
            <Link
              className="auth-link"
              to="/login"
              onClick={() => setIsMobile(false)}
            >
              Log in
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
