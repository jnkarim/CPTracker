import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/signup.png"; // Adjust the path as necessary
import "./Auth.css"; // Adjust the path as necessary

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Apply styles when the component mounts
    document.body.classList.add("Signup");
    document.documentElement.classList.add("Signup");

    // Cleanup styles when the component unmounts
    return () => {
      document.body.classList.remove("Signup");
      document.documentElement.classList.remove("Signup");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/users", {
        username,
        password,
      }, {
        withCredentials: true
      });

      console.log("Response data:", res.data); // Log the response data for debugging
      
      if (res.data) {
        // Handle successful signup
        console.log(res.data);
        navigate("/login"); // Redirect to login page
      } else {
        // Handle signup error
        alert(res.data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <hr />
            <p>Join Us!</p>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              Already have an account?{" "}
              <Link to="/login" style={{ color: "aqua" }}>
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className="pic">
          <img src={image} alt="Signup illustration" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
