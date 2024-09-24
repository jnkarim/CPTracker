import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/signup.png";
import { useAuth } from "../context/auth";
import "./Auth.css";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    codeforcesUsername: "",
  });

  const navigate = useNavigate();
  const [auth, setAuth] = useAuth(); // Get auth and setAuth from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://cp-tracker-backend.vercel.app/api/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter Valid Credentials");
      } else {
        alert("User created successfully!");
        const newAuth = {
          user: {
            ...credentials,
            token: json.authToken,
          },
          token: json.authToken,
        };
        setAuth(newAuth); // Update context
        localStorage.setItem("auth", JSON.stringify(newAuth)); // Save to localStorage
        navigate("/profile"); // Redirect to profile page
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <hr />
            <p>Join Us!</p>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter your username"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter your email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Enter your password"
            />
            <label htmlFor="codeforcesUsername">Codeforces Username</label>
            <input
              type="text"
              name="codeforcesUsername"
              id="codeforcesUsername"
              value={credentials.codeforcesUsername}
              onChange={onChange}
              placeholder="Enter your Codeforces username"
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
