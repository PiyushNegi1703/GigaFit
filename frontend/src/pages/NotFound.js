import React from "react";
import "./notFound.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const NotFound = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleClick = () => {
    if (user) {
      navigate("/");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="notfound">
      <div className="box" onClick={handleClick}>
        <div className="block">
          <span style={{ "--i": "0" }}></span>
          <span style={{ "--i": "1" }}></span>
          <span style={{ "--i": "2" }}></span>
          <span style={{ "--i": "3" }}></span>
        </div>
        <div className="text" onClick={handleClick}>
          <span style={{ "--i": "0" }} data-text="404">
            404
          </span>
          <span style={{ "--i": "1" }} data-text="PAGE">
            PAGE
          </span>
          <span style={{ "--i": "2" }} data-text="NOT">
            NOT
          </span>
          <span style={{ "--i": "3" }} data-text="FOUND">
            FOUND
          </span>
        </div>
      </div>
      <p>Click the box to return to home page</p>
    </div>
  );
};

export default NotFound;
