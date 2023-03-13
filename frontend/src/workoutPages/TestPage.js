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
          <div className="workout-page" style={{ marginTop: "10vh" }}>
            <div className="workout-title">
              <img
                src={image}
                alt="background"
              />

              <h1>{workouts.title}</h1>
            </div>

            <div className="exercise-wrapper">
              {workouts && workouts.workouts.map((e, i) => {
                return (
                  <div className="exercise-container" key={i}>
                      <h3>{e.title}</h3>
                      <h4>{e.reps}</h4>
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
