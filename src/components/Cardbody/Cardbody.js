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
          <p className="Develophim">EXCHANGE</p>
          <h1>Lighting Fast Crypto Trading</h1>
          <p>
            Trade over 100+ cryptocurrencies at the best swiftness available on
            low fees, advanced accessibility all over globe.
          </p>
          <div className="list">
            <p className="set">
              <div className="tick">
                <img src={icon} alt="tick" />
              </div>
              Low Fees
            </p>
            <p className="set">
              <div className="tick">
                <img src={icon} alt="tick" />
              </div>
              Virtual Cards
            </p>
            <p className="set">
              <div className="tick">
                <img src={icon} alt="tick" />
              </div>
              Advanced Trade Charts
            </p>
            <p className="set">
              <div className="tick">
                <img src={icon} alt="tick" />
              </div>
              Large selection of crypto assets
            </p>
            <p className="set">
              <div className="tick">
                <img src={icon} alt="tick" />
              </div>
              Military Grade enctyption
            </p>
          </div>
          <button className="Startedyet">Get Started ></button>
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


