import React from "react";
import "./Cardbodied.css";

import station from "../../assets/images/Lightstation.png";
import icon from "../../assets/images/Icon.png";

const Cardbodied = () => {
  return (
    <div className="card-container04">
      <div className="left">
        <p className="Develophim">DEVELOPERS</p>
        <h1>Get real time data over a powerful api</h1>
        <p>
          No need to spend months integrating crypto <br /> functionality, we’ve
          got you!
        </p>
        <div className="list">
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Simple integration
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Military Grade Security
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Intelligent Fraud Detection
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Simple Documentation
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Dev Support
          </p>
        </div>
        <button className="Startedyet">Integrate Now ></button>
        <button className="Startednot">Learn More >></button>
      </div>
      <div className="right">
        <img src={station} alt="" />
      </div>
    </div>
  );
};

export default Cardbodied;
