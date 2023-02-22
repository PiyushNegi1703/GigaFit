import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillStar } from "react-icons/ai";
import data from "../data/data";
import fullBody from "../assets/Full bode workout.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
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
            glareMaxOpacity={0.2}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="suggestion-card"
          >
            <Link to="/workout">
              <img src={fullBody} alt="" />
              <h2 style={{ fontSize: "2em", letterSpacing: "2px" }}>
                Full Body Workout Challenge
              </h2>
              <h4 style={{ fontSize: "1.2em", letterSpacing: "2px" }}>
                4 days x 6 weeks
              </h4>
            </Link>
          </Tilt>
        </div>

        {/* WORKOUTS CONTAINER */}
        <div className="workouts" style={{ marginBottom: "5vh" }}>
          {/* BEGINNER WORKOUTS */}
          <h1 style={{ margin: "2vh 0 2vh 7%" }}>Beginner Workouts</h1>
          <div className="card-container">
            {data.map((e) => {
              return (
                <Tilt glareEnable={true} glarePosition={"all"} className="card">
                  <Link to="/workout">
                    <img src={e.image} alt="" />
                    <h2>{e.title} Beginner</h2>
                    <div className="rating">
                      <AiFillStar className="star" color="#ff385c" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                    </div>
                  </Link>
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
                  <Link to="/workout">
                    <img src={e.image} alt="" />
                    <h2>{e.title} Intermediate</h2>
                    <div className="rating">
                      <AiFillStar className="star" color="#ff385c" />
                      <AiFillStar className="star" color="#ff385c" />
                      <AiFillStar className="star" />
                    </div>
                  </Link>
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
                  <Link to="/workout">
                    <img src={e.image} alt="" />
                    <h2>{e.title} Advanced</h2>
                    <div className="rating">
                      <AiFillStar className="star" color="#ff385c" />
                      <AiFillStar className="star" color="#ff385c" />
                      <AiFillStar className="star" color="#ff385c" />
                    </div>
                  </Link>
                </Tilt>
              );
            })}
          </div>
        </div>

        <footer>Hello</footer>
      </div>
    </>
  );
};

export default Home;
