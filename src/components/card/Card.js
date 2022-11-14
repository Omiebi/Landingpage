import "./card.css";

import dollar from "../../assets/images/dollarsign.png";
import icon from "../../assets/images/Icon.png";

const Card = () => {
  return (
    <div className="card-container01">
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
        <img src={dollar} alt="" />
      </div>
    </div>
  );
};

export default Card;
