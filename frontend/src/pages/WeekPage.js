import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/login 3.png";
import { useNavigate } from "react-router-dom";

const WeekPage = () => {
  const navigate = useNavigate()

  const handleClick = (e) => {
    navigate('/suggested', {
      state: {
        id: e.target.id
      }
    })
  }

  return (
    <>
      <Navbar />
      <div className="week-wrapper">
        <img src={image} alt="" className="week-bg-img" />
        <div className="week-container">
          <h3>Week 1</h3>
          <div id="11" onClick={handleClick}>1</div>
          <div id="12" onClick={handleClick}>2</div>
          <div id="13" onClick={handleClick}>3</div>
          <div id="14" onClick={handleClick}>4</div>
          <div id="15" onClick={handleClick}>5</div>
          <div id="16" onClick={handleClick}>6</div>
          <div id="17" onClick={handleClick}>7</div>
        </div>
        <div className="week-container">
          <h3>Week 2</h3>
          <div id="21" onClick={handleClick}>1</div>
          <div id="22" onClick={handleClick}>2</div>
          <div id="23" onClick={handleClick}>3</div>
          <div id="24" onClick={handleClick}>4</div>
          <div id="25" onClick={handleClick}>5</div>
          <div id="26" onClick={handleClick}>6</div>
          <div id="27" onClick={handleClick}>7</div>
        </div>
        <div className="week-container">
          <h3>Week 3</h3>
          <div id="31" onClick={handleClick}>1</div>
          <div id="32" onClick={handleClick}>2</div>
          <div id="33" onClick={handleClick}>3</div>
          <div id="34" onClick={handleClick}>4</div>
          <div id="35" onClick={handleClick}>5</div>
          <div id="36" onClick={handleClick}>6</div>
          <div id="37" onClick={handleClick}>7</div>
        </div>
        <div className="week-container">
          <h3>Week 4</h3>
          <div id="41" onClick={handleClick}>1</div>
          <div id="42" onClick={handleClick}>2</div>
          <div id="43" onClick={handleClick}>3</div>
          <div id="44" onClick={handleClick}>4</div>
          <div id="45" onClick={handleClick}>5</div>
          <div id="46" onClick={handleClick}>6</div>
          <div id="47" onClick={handleClick}>7</div>
        </div>
        <div className="week-container">
          <h3>Week 5</h3>
          <div id="51" onClick={handleClick}>1</div>
          <div id="52" onClick={handleClick}>2</div>
          <div id="53" onClick={handleClick}>3</div>
          <div id="54" onClick={handleClick}>4</div>
          <div id="55" onClick={handleClick}>5</div>
          <div id="56" onClick={handleClick}>6</div>
          <div id="57" onClick={handleClick}>7</div>
        </div>
        <div className="week-container">
          <h3>Week 6</h3>
          <div id="61" onClick={handleClick}>1</div>
          <div id="62" onClick={handleClick}>2</div>
          <div id="63" onClick={handleClick}>3</div>
          <div id="64" onClick={handleClick}>4</div>
          <div id="65" onClick={handleClick}>5</div>
          <div id="66" onClick={handleClick}>6</div>
          <div id="67" onClick={handleClick}>7</div>
        </div>
      </div>
    </>
  );
};

export default WeekPage;
