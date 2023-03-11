import { useEffect, useState } from "react";
import logo from "../assets/nav-logo desk.png";
import logoRed from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";

import React from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(logoRed);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
      setNavbarLogo(logo);
    } else {
      setNavbar(false);
      setNavbarLogo(logoRed);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "active" : ""}>
      <img src={navbarLogo} alt="logo" />
      <CgProfile style={{ fontSize: "2em" }} />
    </nav>
  );
};

export default Navbar;
