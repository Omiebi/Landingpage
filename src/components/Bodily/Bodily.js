import "./Bodily.css";

import quotes from "../../assets/images/Quotes.png";
import avatar from "../../assets/images/Male.png";

import React from "react";

const Bodily = () => {
  return (
    <div className="card-Feedback">
      <div className="blue-feedback">
        <div className="blue-feedback01">
          <div className="left2">
            <img src={quotes} alt="" />
            <h1 className="Roqquians">
              Lets hear from other <br /> Roqquains
            </h1>

            <h1 className="Roqquians001">
              Lets hear from other  Roqquains
            </h1>
          </div>
          <p className="Roqquians01">
            People who use our app think we are awesome. Here's what they are
            saying!
          </p>
        </div>

        <div className="card-design02">
          <div className="card-human">
            <div className="card-human02">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="card-human03">
              <p className="Card-design">
                Having 15 years of experience in design field. <br />
                Design is my passion and sharing <br /> my knowledge is my love.
              </p>
            </div>
          </div>

          <div className="card-human">
            <div className="card-human02">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="card-human03">
              <p className="Card-design">
                Having 15 years of experience in design field. <br />
                Design is my passion and sharing <br /> my knowledge is my love.
              </p>
            </div>
          </div>

          <div className="card-human">
            <div className="card-human02">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="card-human03">
              <p className="Card-design">
                Having 15 years of experience in design field. <br />
                Design is my passion and sharing <br /> my knowledge is my love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodily;
