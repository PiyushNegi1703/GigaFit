import React from "react";
import image from "../assets/login 2.png";
import Navbar from "../components/Navbar";

const TestPage = () => {
  return (
    <>
      <Navbar />
      <div className="testPage">
        <div
          style={{
            width: "100%",
            height: "40vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt="background"
            style={{
              width: "90%",
              position: "absolute",
              top: "-110%",
              left: "5%",
              mixBlendMode: "hard-light",
            }}
          />

          <h1 style={{ zIndex: "1", fontSize: "4em" }}>Arms Beginner</h1>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default TestPage;
