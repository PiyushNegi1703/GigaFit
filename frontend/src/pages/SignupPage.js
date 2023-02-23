import React from "react";
// Image imported from assets
import image from "../assets/Legs 1 red.png";
// Google icon imported from react-icons
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-image">
        <img src={image} alt="login-pic" />
      </div>

      <div className="form-container">
        <h1>Register Yourself</h1>
        <p>Please fill in all the fields to continue</p>

        <form>
          <input type="text" placeholder="Username..." />
          <input type="text" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <input type="password" placeholder="Confirm Password..." />

          <button className="login-button">Login</button>
          <button className="google">
            <FcGoogle style={{ fontSize: "1.5em", marginRight: "20px" }} />
            Continue with Google
          </button>
        </form>

        <p style={{ fontSize: "0.9em" }}>
          Don't have an account?{" "}
          <Link to="/login" className="register">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
