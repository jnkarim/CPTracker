import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/signup.png"; // Adjust the path as necessary
import "./Auth.css"; // Adjust the path as necessary

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const json = await response.json();
      console.log(json);

      // Check for success flag or errors in response
      if (!json.success) {
        alert("Enter Valid Credentials");
      } else {
        // Handle successful response
        alert("User created successfully!");
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
