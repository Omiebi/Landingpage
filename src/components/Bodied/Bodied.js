import React from "react";
import jetter from "../../assets/images/LightingJet01.png";
import icon from "../../assets/images/Icon.png";
import "./Bodied.css";

const Bodied = () => {
  return (
    <div className="card-container05">
      <div className="left">
        <p className="Develophim">SAVINGS $ INVESTMENT</p>
        <h1>Boost your Finances!</h1>
        <p>
          You enjoy +15% p.a interest, no market volatility, and even beat
          inflation when you stash funds away in stable coins.
        </p>
        <div className="list">
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Zero bank charges
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            No market volatility
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Safe and Secure funds
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Solid Security
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            +15% interest p.a
          </p>
        </div>
        <button className="Startedyet">Get Started >></button>
        <button>Learn More >></button>
      </div>
      <div className="right">
        <img src={jetter} alt="" />
      </div>
    </div>
  );
};

export default Bodied;
