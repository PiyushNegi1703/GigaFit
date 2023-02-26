import React from "react";
// Image imported from assets
import image from "../assets/legs red.png";
// Google icon imported from react-icons
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const LoginPage = () => {
  const InputField = styled(TextField)({
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "#363636",
    },
    "& .MuiFilledInput-root:before": {
      borderBottom: "3px solid #363636",
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.5)",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "#262626",
      color: "#fff",
      width: "50vh",
      padding: "10px",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      "&:hover": {
        backgroundColor: "#363636",
      },
    },
    "& .MuiFilledInput-root:after": {
      borderBottom: "2px solid #ca0024",
    },
  });

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>Register Yourself</h1>
        <p>Please fill in all the fields to continue</p>

        <form>
          <InputField
            id="filled-basic"
            margin="normal"
            label="Username or Email"
            variant="filled"
          />
          <InputField
            id="filled-basic"
            margin="normal"
            label="Password"
            variant="filled"
          />

          <Link to="/gender" className="login-button">
            <button>Login</button>
          </Link>
          <Link
            to="/gender"
            style={{
              marginTop: "2vh",
              marginBottom: "2vh",
            }}
          >
            <button className="google">
              <FcGoogle style={{ fontSize: "1.5em", marginRight: "20px" }} />
              Continue with Google
            </button>
          </Link>
        </form>

        <p style={{ fontSize: "0.9em" }}>
          Don't have an account?{" "}
          <Link to="/signup" className="register">
            Sign up
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
