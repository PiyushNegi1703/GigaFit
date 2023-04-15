import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
// Image imported from assets
import image from "../assets/legs red.png";
import { Link, Navigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Googleauth from "./Googleauth";

const LoginPage = () => {
  // Defining constants to use in functions
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[buttonLoader,setButtonLoader] = useState(false)
  // Taking constants from useLogin
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true)
   
    if (isLoading === false) {
      <Navigate to="/gender" />;
    }

    await login(email, password);
    setButtonLoader(false)
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
    }, 500);
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
            <h1>Welcome Back!</h1>
            <p>Please log into your account</p>

            <form onSubmit={handleSubmit}>
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
              {buttonLoader?<HashLoader size={20}/>:<button type="submit" className="button" disabled={isLoading} style={{marginTop: '7vh',display:"flex",justifyContent:"center"}}>Login</button>} 
              {/* <button className="google" onClick={()=>{
                navigate('/googleauth')
              }} disabled={isLoading}>
                <FcGoogle
                  style={{ fontSize: "1.5em", marginRight: "20px" }}
                />
                Continue with Google
              </button> */}
              <Googleauth />
            </form>

            <p style={{ fontSize: "0.9em", marginTop: '1vh' }}>
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
