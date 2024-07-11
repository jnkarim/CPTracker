import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/login.png"; // Adjust the path as necessary
import "./Auth.css"; // Adjust the path as necessary

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Apply styles when the component mounts
    document.body.classList.add("Login");
    document.documentElement.classList.add("Login");

    // Cleanup styles when the component unmounts
    return () => {
      document.body.classList.remove("Login");
      document.documentElement.classList.remove("Login");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (res.data.success) {
        // Handle successful login
        navigate("/"); // Redirect to homepage or another route
      } else {
        // Handle login error
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <hr />
            <p>Explore the World!</p>
            <label>Email</label>
            <input
              type="text"
              placeholder="abc@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password!"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
            <p>
              <a href="#">Forgot Password?</a>
            </p>
            <p>
              Don't have an account?{" "}
              <Link to="/signup" style={{ color: "aqua" }}>
                Signup
              </Link>
            </p>
          </form>
        </div>
        <div className="pic">
          <img src={image} alt="Login illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;