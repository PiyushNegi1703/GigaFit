import { Link } from "react-router-dom";
import desktopImage from "../assets/login 1.png";
// import mobileImage from "../assets/login mobile.png";
import logo from "../assets/logo.png";

const LandingPage = () => {
  return (
    <div className="landing-page" data-testid="land">
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
            <p data-testid="text">
              Transform your Body, Mind and Soul with <br /> GIGAFIT
            </p>
          </div>

          <div
            className="button-container"
          >
            <Link to="/login">
              <button className="button" data-testid="button-text">Get Started</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default LandingPage;
