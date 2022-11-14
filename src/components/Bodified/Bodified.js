import "./Bodified.css";

import Box from "../../assets/images/Box.png";
import Hook from "../../assets/images/Hook.png";
import phoneset from "../../assets/images/phone.png";

import React from "react";

const Bodified = () => {
  return (
    <div className="card-trade">
      <div className="card-trade01">
        <h1>
          Trade on the go. <br />
          Anywhere, anytime
        </h1>
        <p>Don’t worry, we’ve got an app for every device.</p>
        <div className="Hooks">
          <div>
            <img src={Box} alt="Box" />
            <h3>Easy Access</h3>
            <p>
              Access and monitor <br />
              funds at all time
            </p>
            <p></p>
          </div>
          <div>
            <img src={Hook} alt="Box" />
            <h3>Always in sync</h3>
            <p>
              Don't worry about the <br />
              data, always be in sync
            </p>
          </div>
        </div>
      </div>

      <div className="positionphone">
        <img src={phoneset} alt="phoneset" />
      </div>
    </div>
  );
};

export default Bodified;
