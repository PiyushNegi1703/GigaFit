import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/nav-logo desk.png";
import logoRed from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(logoRed);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
      setNavbarLogo(logo);
    } else {
      setNavbar(false);
      setNavbarLogo(logoRed);
    }
  };

  const logoutHandle = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "active" : ""}>
      <img
        src={navbarLogo}
        className="navbarLogo"
        alt="logo"
        onClick={() => navigate("/home")}
      />
      <div className="dropdown" style={{display: "flex", gap: "10px"}}>
        {location.pathname !== "/profile" ? (
          <>
            <button onClick={() => navigate("/profile")} className="logout-button">
              Profile
            </button>
            <button onClick={logoutHandle} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <button onClick={logoutHandle} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
