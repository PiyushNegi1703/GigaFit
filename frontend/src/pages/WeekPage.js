import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/login 3.png";

const WeekPage = () => {
  return (
    <>
      <Navbar />
      <div className="week-wrapper">
        <img src={image} alt="" className="week-bg-img" />
        <div className="week-container">
          <h3>Week 1</h3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
        <div className="week-container">
          <h3>Week 2</h3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
        <div className="week-container">
          <h3>Week 3</h3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
        <div className="week-container">
          <h3>Week 4</h3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
        <div className="week-container">
          <h3>Week 5</h3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
        <div className="week-container">
          <h3>Week 6</h3>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </div>
    </>
  );
};

export default WeekPage;
