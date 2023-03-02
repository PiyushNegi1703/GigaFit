// Image imported from assets
import image from "../assets/Legs 1 red.png";
// Google icon imported from react-icons
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { useSignup } from "../hooks/useSignup";

const LoginPage = () => {
  // Customizing MUI InputField
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

  // Defing constants to use in functions
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(false);

  // Taking constants from useSignup
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
  };

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  if (document.getElementById("confirm-password").value === password) {
    setConfirmPassword(true);
  } else {
    setConfirmPassword(false);
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
              <InputField
                type="text"
                id="filled-basic"
                margin="normal"
                label="Username"
                variant="filled"
                onChange={(e) => setUsername(e.target.value)}
                // value={username}
              />
              <InputField
                type="email"
                id="filled-basic"
                margin="normal"
                label="Email"
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
                // value={email}
              />
              <InputField
                type="password"
                id="filled-basic"
                margin="normal"
                label="Password"
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
                // value={password}
              />
              <InputField
                type="password"
                id="filled-basic confirm-password"
                margin="normal"
                label="Confirm Password"
                variant="filled"
                error={confirmPassword}
              />
              {error && <div className="error">{error}</div>}
              <Link
                to="/gender"
                className="login-button"
                style={{ marginTop: "15vh" }}
              >
                <button disabled={isLoading}>Sign up</button>
              </Link>
              <Link
                to="/gender"
                style={{
                  marginTop: "2vh",
                  marginBottom: "2vh",
                }}
              >
                <button className="google">
                  <FcGoogle
                    style={{ fontSize: "1.5em", marginRight: "20px" }}
                  />
                  Sign up with Google
                </button>
              </Link>
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
