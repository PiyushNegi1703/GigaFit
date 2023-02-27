import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/login 1.png";
import logo from "../assets/logo.png";
import { HashLoader } from "react-spinners";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  return (
    <div className="landing-page">
      {loading ? (
        <div className="loader">
          <HashLoader color="#ca0024" size={80} />
        </div>
      ) : (
        <div className="image-container">
          <img
            src={backgroundImage}
            alt="img"
            className="background-image"
            style={{
              position: "absolute",
              width: "100%",
              height: "832px",
              left: "0px",
              top: "-55px",
              mixBlendMode: "hard-light",
            }}
          />

          <div
            className="logo-container"
            style={{
              width: "100%",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: "70vh",
              backgroundColor: "transparent",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "30vw", height: "12vh" }}
            />
          </div>

          <div
            className="text-container"
            style={{
              width: "100%",
              position: "absolute",
              top: "83vh",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.5em",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              fontWeight: "700",
            }}
          >
            <p>
              Transform your Body, Mind and Soul with <br /> GIGAFIT.
            </p>
          </div>

          <div
            className="button-container"
            style={{
              width: "100%",
              height: "55px",
              position: "absolute",
              top: "92vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/login">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
