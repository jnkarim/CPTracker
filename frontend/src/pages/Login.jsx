import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import image from "../assets/login.png";
import "./Auth.css";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://cp-tracker-backend.vercel.app/api/loginuser",
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
        setAuth({
          user: json.user,
          token: json.authToken,
        });
        localStorage.setItem("auth", JSON.stringify(json));
        navigate("/"); // Redirect to home
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
            <h1>Login</h1>
            <hr />
            <p>Explore with us!</p>
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
