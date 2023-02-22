import { useEffect, useState } from "react";
import logo from "../assets/nav-logo desk.png";
import { CgProfile } from "react-icons/cg";

import React from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "active" : ""}>
      <img src={logo} alt="logo" />
      <CgProfile style={{ fontSize: "2em" }} />
    </nav>
  );
};

export default Navbar;
