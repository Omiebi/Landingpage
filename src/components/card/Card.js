

import dollar from "../../assets/images/dollarsign.png";
import icon from "../../assets/images/Icon.png";
import "./card.css";

const Card = () => {
  return (
    <div className="card-container01">
      <div className="left">
        <p className="Develophim">WALLET</p>
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
            Stay in Control
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Enjoy zero deposits
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Have all the coins you need
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Enjoy zero withdrawal fees
          </p>
          <p className="set">
            <div className="tick">
              <img src={icon} alt="tick" />
            </div>
            Experience solid rock security
          </p>
        </div>
        <button className="Startedyet">Get Started ></button>
        <button>Learn More >></button>
      </div>
      <div className="right">
        <img src={dollar} alt="" />
      </div>
    </div>
  );
};

export default Card;
