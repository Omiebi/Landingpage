import React from "react";
import "./body.css";
import Card from "../card/Card";
import Cardbody from "../Cardbody/Cardbody";
import Cardbodies from "../Cardbodies/Cardbodies";
import Cardbodied from "../Cardbodied/Cardbodied";
import Bodied from "../Bodied/Bodied";
import Bodycard from "../Bodycard/Bodycard";

const Body = () => {
  return (
    <div className="body_container">
      <div className="Names">
        <ul className="letters">
          <li className="17">1.4M+</li>
          <li className="17">$1bn+</li>
          <li className="17">$700m+</li>
          <li className="17">75+</li>
        </ul>
      </div>
      <div>
        <div className="offer">
          <button className="offer01">WHAT WE OFFER</button>
        </div>
        <div className="power">
          <h1>
            Everything you need to power <br />
            your crypto journey
          </h1>
        </div>
        <div className="tools">
          <p>
            From your first $1 purchase to your first $1m, we are here to help
            with <br /> all the tools you need to grow on your journey.
          </p>
        </div>
      </div>
      <Card />
      <Cardbody />
      <Cardbodies />
      <Cardbodied />
      <Bodied />
      <Bodycard />
    </div>
  );
};

export default Body;
