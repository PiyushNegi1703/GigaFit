import React from "react";
// Image imported from assets
import image from "../assets/legs red.png";
// Google icon imported from react-icons
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Welcome Back!</h1>
        <p>Please Login to your account</p>

        <form>
          <input type="text" placeholder="Username or Email..." />
          <input type="password" placeholder="Password..." />

          <button className="login-button">Login</button>
          <button className="google">
            <FcGoogle style={{ fontSize: "1.5em", marginRight: "20px" }} />
            Continue with Google
          </button>
        </form>

        <p style={{ fontSize: "0.9em" }}>
          Don't have an account?{" "}
          <Link to="/signup" className="register">
            Sign Up
          </Link>
        </p>
      </div>

      <div className="login-image">
        <img src={image} alt="login-pic" />
      </div>
    </div>
  );
};

export default LoginPage;
