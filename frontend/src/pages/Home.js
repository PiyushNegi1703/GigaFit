import React from "react";
import Tilt from "react-parallax-tilt";
import logo from "../assets/nav-logo.png";
import { CgProfile } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import data from "../data/data";
import fullBody from "../assets/Full bode workout.png"

const Home = () => {
  return (
    <div className="home">
      <nav
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "40px",
          background: "#ca0024",
          position: "sticky",
        }}
      >
        <img src={logo} alt="" style={{ width: "200px" }} />

        <CgProfile style={{ fontSize: "2.5em" }} />
      </nav>

      <div className="suggestion">
        <h1
          style={{
            color: "#fff",
            textDecoration: "underline solid 1px",
            textAlign: "center",
            textShadow: "0 0 15px #ca0024",
          }}
        >
          OUR SUGGESTION FOR YOU
        </h1>

        <Tilt
          glareEnable={true}
          glarePosition={"all"}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="suggestion-card"
        >
          <img src={fullBody} alt="" />
          <h3 style={{ fontSize: "1.5em", letterSpacing: "2px" }}>
            Full Body Workout Challenge
          </h3>
          <h5 style={{ fontSize: "1.2em", letterSpacing: "2px" }}>
            4 days x 6 weeks
          </h5>
        </Tilt>
      </div>

      {/* WORKOUTS CONTAINER */}
      <div className="workouts" style={{marginBottom: '5vh'}}>
        {/* BEGINNER WORKOUTS */}
        <h1 style={{ margin: "2vh 0 2vh 7%" }}>Beginner Workouts</h1>
        <div className="card-container">
          {data.map((e) => {
            return (
              <Tilt glareEnable={true} glarePosition={"all"} className="card">
                <img src={e.image} alt="" />
                <h2>{e.title} Beginner</h2>
                <div className="rating">
                  <AiFillStar className="star" color="#ff385c" />
                  <AiFillStar className="star" />
                  <AiFillStar className="star" />
                </div>
              </Tilt>
            );
          })}
        </div>

        {/* INTERMEDIATE WORKOUTS */}
        <h1 style={{ margin: "2vh 0 2vh 7%" }}>Intermediate Workouts</h1>
        <div className="card-container">
          {data.map((e) => {
            return (
              <Tilt glareEnable={true} glarePosition={"all"} className="card">
                <img src={e.image} alt="" />
                <h2>{e.title} Intermediate</h2>
                <div className="rating">
                  <AiFillStar className="star" color="#ff385c" />
                  <AiFillStar className="star" color="#ff385c" />
                  <AiFillStar className="star" />
                </div>
              </Tilt>
            );
          })}
        </div>

        {/* ADVANCED WORKOUTS */}
        <h1 style={{ margin: "2vh 0 2vh 7%" }}>Advanced Workouts</h1>
        <div className="card-container">
          {data.map((e) => {
            return (
              <Tilt glareEnable={true} glarePosition={"all"} className="card">
                <img src={e.image} alt="" />
                <h2>{e.title} Advanced</h2>
                <div className="rating">
                  <AiFillStar className="star" color="#ff385c" />
                  <AiFillStar className="star" color="#ff385c" />
                  <AiFillStar className="star" color="#ff385c" />
                </div>
              </Tilt>
            );
          })}
        </div>
      </div>

      <footer>Hello</footer>
    </div>
  );
};

export default Home;
