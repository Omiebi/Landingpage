import "./Cardbody.css";


import jet from "../../assets/images/LightningJet.png";
import icon from "../../assets/images/Icon.png";

import React from 'react'

// import React from 'react'

export const Cardbody = () => {
  return (
    <div>
      <div className="card-container02">
        <div className="left">
          <p>WALLET</p>
          <h1>Swift, Safe, Secured</h1>
          <p>
            No need to spend months integrating crypto <br /> functionality,
            we’ve got you!
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
          <img src={jet} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cardbody;


