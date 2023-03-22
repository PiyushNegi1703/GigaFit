import { useEffect, useState } from "react";
import logo from "../assets/nav-logo desk.png";
import logoRed from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import { useLogout } from "../hooks/useLogout";

import React from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(logoRed);
  const navigate = useNavigate();
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
      <img src={navbarLogo} alt="logo" />
      <div className="dropdown">
        <CgProfile className="dropbtn" style={{ fontSize: "2em" }} />
        <div class="dropdown-content">
          <p>My Profile</p>
          <p onClick={logoutHandle}>Logout</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
