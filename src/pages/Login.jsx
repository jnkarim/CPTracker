import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Assuming you'll create a separate CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data); // Log response from backend
      // Optionally, redirect to dashboard or handle success message
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back</h2>
        <h3>Your virtual response was missed.</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="login-email">Email Address:</label>
            <input
              type="email"
              id="login-email"
              name="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Log in</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
