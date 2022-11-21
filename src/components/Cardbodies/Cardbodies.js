import "./Cardbodies.css";


import plane from "../../assets/images/Lighter.png"
import icon from "../../assets/images/Icon.png";


import React from 'react'

export const Cardbodies = () => {
  return (
    <div className="card-container03">
      <div className="left">
        <p className="Develophim">BUSINESS</p>
        <h1>Take your business to the next level with payment links! </h1>
        <p>
          You can now receive all your payments globally within minutes and not
          have to worry about price volatility.
        </p>
        <div className="list">
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Fast
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Encrypted Security
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Easy to integrate
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            24/7 Support
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Safe
          </p>
        </div>
        <button className="Startedyet">Get Started ></button>
        <button>Learn More >></button>
      </div>
      <div className="right">
        <img src={plane} alt="" />
      </div>
    </div>
  );
}

export default Cardbodies;
