import { useState } from "react";
import { Link } from "react-router-dom";
import desktopImage from "../assets/login 1.png";
// import mobileImage from "../assets/login mobile.png";
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
            src={desktopImage}
            alt="bg img"
            className="background-image"
          />

          <div
            className="logo-container"
          >
            <img
              src={logo}
              alt="logo"
            />
          </div>

          <div
            className="text-container"
          >
            <p>
              Transform your Body, Mind and Soul with <br /> GIGAFIT
            </p>
          </div>

          <div
            className="button-container"
          >
            <Link to="/login">
              <button className="button">Get Started</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
