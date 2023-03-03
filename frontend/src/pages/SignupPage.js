// Image imported from assets
import image from "../assets/Legs 1 red.png";
// Google icon imported from react-icons
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { useSignup } from "../hooks/useSignup";

const LoginPage = () => {
  // Defing constants to use in functions
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Taking constants from useSignup
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
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
          <div className="login-image">
            <img src={image} alt="login-pic" />
          </div>

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
                type="text"
                id="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required='required'
              />
              <span>username</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required='required'
              />
              <span>email</span>
            </div>
            
            <div className="inputBox">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required='required'
                />
                <span>password</span>
              </div>
              {error && <div className="error">{error}</div>}
                <button disabled={isLoading} style={{marginTop: '7vh'}}>Sign up</button>
                <button className="google" disabled={isLoading}>
                  <FcGoogle
                    style={{ fontSize: "1.5em", marginRight: "20px" }}
                  />
                  Sign up with Google
                </button>
            </form>

            <p style={{ fontSize: "0.9em" }}>
              Already have an account?{" "}
              <Link to="/login" className="register">
                Login
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
