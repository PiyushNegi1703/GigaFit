import React from "react";
import Tilt from "react-parallax-tilt";
// import data from "../data/data";
import fullBody from "../assets/Full bode workout.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Workouts from "../components/Workouts";
import data from "../data/data";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API}/workouts/`);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader color="#ca0024" size={80} />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="home">
            <div
              className="suggestion"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                height: "30vh",
                marginTop: "5vh",
              }}
            >
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
                {data &&
                  data.map((e, i) => {
                    return <Workouts starCount={1} key={i} />;
                  })}
              </div>

              {/* INTERMEDIATE WORKOUTS */}
              <h1 style={{ margin: "2vh 0 2vh 7%" }}>Intermediate Workouts</h1>
              <div className="card-container">
                {data &&
                  data.map((e, i) => {
                    return <Workouts starCount={2} key={i} />;
                  })}
              </div>
              {/* ADVANCED WORKOUTS */}
              <h1 style={{ margin: "2vh 0 2vh 7%" }}>Advanced Workouts</h1>
              <div className="card-container">
                {data &&
                  data.map((e, i) => {
                    return <Workouts starCount={3} key={i} />;
                  })}
              </div>
            </div>

            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
