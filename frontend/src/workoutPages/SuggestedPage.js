import React, { useEffect } from "react";
import image from "../assets/login 2.png";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import { useAuthContext } from "../hooks/useAuthContext";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const TestPage = () => {
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const location = useLocation()
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(`${process.env.REACT_APP_API}/fullBody`)
      const json = await response.json();
      const data = await json[0]
      console.log(data)
      if(location.state.id === "11") {
        setWorkouts(data.week1.day1)
      }
      else if (location.state.id === "12") {
        setWorkouts(data.week1.day2)
      }
      else if (location.state.id === "14") {
        setWorkouts(data.week1.day3)
      }
      else if (location.state.id === "15") {
        setWorkouts(data.week1.day4)
      }
      else if (location.state.id === "21") {
        setWorkouts(data.week2.day1)
      }
      else if (location.state.id === "22") {
        setWorkouts(data.week2.day2)
      }
      else if (location.state.id === "24") {
        setWorkouts(data.week2.day3)
      }
      else if (location.state.id === "25") {
        setWorkouts(data.week2.day4)
      }
      else if (location.state.id === "31") {
        setWorkouts(data.week3.day1)
      }
      else if (location.state.id === "32") {
        setWorkouts(data.week3.day2)
      }
      else if (location.state.id === "34") {
        setWorkouts(data.week3.day3)
      }
      else if (location.state.id === "35") {
        setWorkouts(data.week3.day4)
      }
      else if (location.state.id === "41") {
        setWorkouts(data.week4.day1)
      }
      else if (location.state.id === "42") {
        setWorkouts(data.week4.day2)
      }
      else if (location.state.id === "44") {
        setWorkouts(data.week4.day3)
      }
      else if (location.state.id === "45") {
        setWorkouts(data.week4.day4)
      }
      else if (location.state.id === "51") {
        setWorkouts(data.week5.day1)
      }
      else if (location.state.id === "52") {
        setWorkouts(data.week5.day2)
      }
      else if (location.state.id === "54") {
        setWorkouts(data.week5.day3)
      }
      else if (location.state.id === "55") {
        setWorkouts(data.week5.day4)
      }
      else if (location.state.id === "61") {
        setWorkouts(data.week6.day1)
      }
      else if (location.state.id === "62") {
        setWorkouts(data.week6.day2)
      }
      else if (location.state.id === "64") {
        setWorkouts(data.week6.day3)
      }
      else if (location.state.id === "65") {
        setWorkouts(data.week6.day4)
      }
      else {
        setWorkouts({})
      }

      if(response.ok) {
        setLoading(false);
      }
    }

    if(user) {
      fetchWorkout()
    }
  }, [location.state.id ,user])

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
              {workouts && workouts.map((e, i) => {
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
