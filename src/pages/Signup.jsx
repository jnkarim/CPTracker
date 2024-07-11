import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/signup.png"; // Adjust the path as necessary
import "./Auth.css"; // Adjust the path as necessary

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        email,
        password,
      });
      if (res.data.success) {
        // Handle successful signup
        navigate("/login"); // Redirect to login page
      } else {
        // Handle signup error
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong");
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
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password!"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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