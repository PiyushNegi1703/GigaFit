import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

const Workouts = ({ starCount }) => {
  return (
    <Tilt
      glareEnable={true}
      glarePosition={"all"}
      className="card"
      // key={e.id}
    >
      <Link to="/workout">
        {/* <img src={e.image} alt="" /> */}
        <h2>Beginner</h2>
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
      </Link>
    </Tilt>
  );
};

export default Workouts;
