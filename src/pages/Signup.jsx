import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Assuming you'll create a separate CSS file

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/signup", { email, password });
      console.log(response.data); // Log response from backend
      // Optionally, redirect to login page or handle success message
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="signup-email">Email Address:</label>
            <input
              type="email"
              id="signup-email"
              name="signup-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="signup-password">Password:</label>
            <input
              type="password"
              id="signup-password"
              name="signup-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
