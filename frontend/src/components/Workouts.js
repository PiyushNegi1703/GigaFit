import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const Workouts = ({ starCount, image, title, id }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    let workoutType = ""
    if(starCount === 1) workoutType = "workout1"
    else if(starCount === 2) workoutType = "workout2"
    else if(starCount === 3) workoutType = "workout3"
    navigate('/workout', { state: {
      workoutType: workoutType,
      id: id
    }})
  }
  return (
    <Tilt
      glareEnable={true}
      glarePosition={"all"}
      className="card"
    >
      <div onClick={handleClick}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <div className="rating">
          {[...Array(3)].map((e, i) => {
            return (
              <AiFillStar
                key={i}
                className="star"
                color={starCount - 1 < i ? "#ffffff" : "#ff385c"}
              />
            );
          })}
        </div>
      </div>
    </Tilt>
  );
};

export default Workouts;
