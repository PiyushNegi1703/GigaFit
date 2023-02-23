import React, { useState } from "react";
import maleImg from "../assets/Male.png";
import femaleImg from "../assets/Female.png";

const GenderPage = () => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const femalelogic = () => {
    if (female) {
      setFemale(false);
    } else {
      setFemale(true);
      setMale(false);
    }
  };
  const malelogic = () => {
    if (male) {
      setMale(false);
    } else {
      setMale(true);
      setFemale(false);
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <h1>What is Your Gender?</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
        >
          <img src={maleImg} alt="male" onClick={() => malelogic()} id="male" />
        </div>
        <div style={{ width: "50%", display: "flex" }}>
          <img
            src={femaleImg}
            onClick={() => femalelogic()}
            alt="female"
            id="female"
          />
        </div>
      </div>

      <div>
        <button id="genderbutton" disabled>Go Ahead</button>
      </div>
    </div>
  );
};

export default GenderPage;
