import React, { useEffect } from "react";
import image from "../assets/login 2.png";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const TestPage = () => {
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState({});
  const location = useLocation()
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(`${process.env.REACT_APP_API}/workouts/`)
      const json = await response.json();
      const data = await json[0]
      if(location.state.workoutType === "workout1") {
        data.workout1.data.filter(single => single.id === location.state.id).map(data => setWorkouts(data))
      } else if (location.state.workoutType === "workout2") {
        data.workout2.data.filter(single => single.id === location.state.id).map(data => setWorkouts(data))
      } else if (location.state.workoutType === "workout3") {
        data.workout3.data.filter(single => single.id === location.state.id).map(data => setWorkouts(data))
      } else {
        setWorkouts({})
      }
    }

    if(user) {
      fetchWorkout()
    }
  }, [location.state.id, location.state.workoutType, user])


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
          <div className="testPage" style={{ marginTop: "10vh" }}>
            <div
              style={{
                width: "100%",
                height: "40vh",
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
                  zIndex: "-1"
                }}
              />

              <h1 style={{ zIndex: "0", fontSize: "4em" }}>{workouts.title}</h1>
            </div>

            <div className="exercise-wrapper">
              {workouts && workouts.workouts.map((e, i) => {
                return (
                  <div className="exercise-container" key={i}>
                      <h3 style={{ fontWeight: "500" }}>{e.title}</h3>
                      <h4 style={{ fontWeight: "500" }}>{e.reps}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default TestPage;
