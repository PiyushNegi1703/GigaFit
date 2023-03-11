import React, { useState } from "react";
import maleImg from "../assets/Male.png";
import femaleImg from "../assets/Female.png";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";

const GenderPage = () => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [disButton, setDisButton] = useState(true);

  const femalelogic = () => {
    if (female) {
      setFemale(false);
    } else {
      setFemale(true);
      setMale(false);
      setDisButton(false);
    }
  };
  const malelogic = () => {
    if (male) {
      setMale(false);
    } else {
      setMale(true);
      setFemale(false);
      setDisButton(false);
    }
  };

  const logic = () => {
    if (male) {
      document.getElementById("male").classList.add("maleselcss");
      document.getElementById("female").classList.remove("femaleselcss");
      document.getElementById("female").classList.add("femaleunselcss");
      document.getElementById("male").classList.remove("maleunselcss");
    } else if (female) {
      document.getElementById("male").classList.remove("maleselcss");
      document.getElementById("female").classList.add("femaleselcss");
      document.getElementById("female").classList.remove("femaleunselcss");
      document.getElementById("male").classList.add("maleunselcss");
    }
  };
  logic();

  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  return (
    <div className="gender-page">
      {loading ? (
        <div className="loader">
          <HashLoader color="#ca0024" size={80} />
        </div>
      ) : (
        <>
          <div>
            <h1>What is Your Gender?</h1>
          </div>

          <div className="gender-wrapper">
            <div className="male-container">
              <img
                src={maleImg}
                alt="male"
                onClick={() => malelogic()}
                id="male"
              />
            </div>
            <div className="female-container">
              <img
                src={femaleImg}
                onClick={() => femalelogic()}
                alt="female"
                id="female"
              />
            </div>
          </div>

          <div className="button-wrapper">
            <Link to="/home">
              <button
                id="genderbutton"
                disabled={disButton}
                className={disButton ? "disabled" : ""}
              >
                Go Ahead
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default GenderPage;
