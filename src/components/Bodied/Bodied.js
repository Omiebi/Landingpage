import React from "react";
import jetter from "../../assets/images/LightingJet01.png";
import icon from "../../assets/images/Icon.png";
import "./Bodied.css";



const Bodied = () => {
  return (
    <div className="card-container05">
      <div className="left">
        <p>WALLET</p>
        <h1>Swift, Safe, Secured</h1>
        <p>
          Never thought you could process crypto transactions with lightning
          speed right? Well, welcome to Roqqu! It doesn’t stop at that, you;
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
        <button>Get Started >></button>
        <button>Learn More >></button>
      </div>
      <div className="right">
        <img src={jetter} alt="" />
      </div>
    </div>
  );
};



export default Bodied;
