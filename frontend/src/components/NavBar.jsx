import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { navItems } from "./constants/index";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <span className="brand">CPTracker</span>
        <div className="hamburger" onClick={handleToggle}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMobile ? "nav-ul mobile" : "nav-ul"}>
          {navItems.map((item, idx) => (
            <li key={idx} className="nav-item">
              <Link
                className="link"
                to={item.href}
                onClick={() => setIsMobile(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
