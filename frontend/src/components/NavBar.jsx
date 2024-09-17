import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth"; // Ensure the path to your context is correct
import "./NavBar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [auth, setAuth] = useAuth(); // Use AuthContext
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear localStorage
    setAuth({ user: null, token: "" }); // Clear auth context state
    navigate("/login"); // Redirect to login page
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

        {auth.user ? ( // If user is logged in, show logout
          <div className="nav-auth">
            <span className="auth-link" onClick={handleLogout}>
              Log Out
            </span>
          </div>
        ) : (
          // Otherwise, show login
          <div className="nav-auth">
            <Link className="auth-link" to="/login">
              Log in
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
