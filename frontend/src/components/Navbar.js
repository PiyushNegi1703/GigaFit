import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/nav-logo desk.png";
import logoRed from "../assets/logo.png";
// import { CgProfile } from "react-icons/cg";
import Avatar from "@mui/material/Avatar";
import { useNavigate, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Menu, MenuItem } from "@mui/material";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navbarLogo, setNavbarLogo] = useState(logoRed);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
      <div className="dropdown">
        {location.pathname !== "/profile" ? (
          <>
            <Avatar
              className="dropbtn"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              src={user?.pic}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
              <MenuItem onClick={logoutHandle}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <button onClick={logoutHandle} className="logout-button">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
