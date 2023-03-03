import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
// Image imported from assets
import image from "../assets/legs red.png";
// Google icon imported from react-icons
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";

const LoginPage = () => {
  // Defining constants to use in functions
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Taking constants from useLogin
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading === false) {
      <Navigate to="/gender" />;
    }

    await login(email, password);

    if (error.includes('password')) {
      document.getElementById('password').style.border = '1px solid #ca0024'
    }

    if (error.includes('Email')) {
      document.getElementById('password').style.border = '1px solid #ca0024'
    }
  };

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <div className="login-page">
      {loading ? (
        <div className="loader">
          <HashLoader color="#ca0024" size={80} />
        </div>
      ) : (
        <>
          <div className="form-container">
            <h1 style={{ fontSize: "3em" }}>Register Yourself</h1>
            <p>Please fill in all the fields to continue</p>

            <form
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "5vh",
              }}
              onSubmit={handleSubmit}
            >
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required='required'
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required='required'
                />
                <span>Password</span>
              </div>
              {error && <div className="error">{error}</div>}
              <button type="submit" disabled={isLoading} style={{marginTop: '7vh'}}>Login</button>
                <button className="google" disabled={isLoading}>
                  <FcGoogle
                    style={{ fontSize: "1.5em", marginRight: "20px" }}
                  />
                  Continue with Google
                </button>
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
        </>
      )}
    </div>
  );
};

export default LoginPage;
