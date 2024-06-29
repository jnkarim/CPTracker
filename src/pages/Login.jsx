import React from "react";
import photo1 from "../assets/welcome.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>
          <b>Welcome Back</b>
        </h2>
        <h3>
          Your <span className="highlight"> virtual response </span> was
          missed..
        </h3>
        <form>
          <div className="input-group">
            <label htmlFor="login-username">Email Address:</label>
            <input type="text" id="login-username" name="login-username" />
          </div>
          <div className="input-group">
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="login-password" name="login-password" />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>

      <div className="login-container">
        <img src={photo1} alt="Welcome" className="signup" />
      </div>
    </div>
  );
};

export default Login;
