import React from "react";
import image from "../assets/login 2.png";
import Navbar from "../components/Navbar";
import workoutData from "../data/workoutData";

const TestPage = () => {
  return (
    <>
      <Navbar />
      <div className="testPage" style={{ marginTop: "10vh" }}>
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

        <div className="exercise-wrapper">
          {workoutData.map((e) => {
            return (
              <div className="exercise-container">
                <div>
                  <h3 style={{ fontWeight: "500" }}>{e.title}</h3>
                  <h5 style={{ fontWeight: "500" }}>{e.reps}</h5>
                </div>
                {/* <img src={e.image} alt="" width={"40vh"} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TestPage;
