import "./Bodycard.css";

import laptop from "../../assets/images/img.png";
import phone from "../../assets/images/imagephone.png";
import half from "../../assets/images/halfphone.png";

import React from "react";

const Bodycard = () => {
  return (
    <div className="card-container06">
      <div className="blue">
        <div className="blue01">
          <h1>Roqqu Hub</h1>
          <p className="Hubcolor">Go to Hub >></p>
        </div>
        <p className="spaces">
          We present to you the no. 1 stop for everything crypto and blockchain.
          You’re <br /> guaranteed to get the best out of the entire blockchain
          space with over 100+ <br /> learning materials on Roqqu hub.
        </p>

        <div>
          <p className="Trading">
            {/* <button className="buttoncol">All</button> */}
            <ul className="listings">
              <li className="buttoncol">All</li>
              <li>Trading</li>
              <li>Cryptocurrency</li>
              <li>Blockchain</li>
              <li>Defi</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="card-container07">
        <div className="card-laptop">
          <div className="card-image">
            <img src={laptop} alt="" />
          </div>

          <div className="Volatility">
            <div>
              <span className="Finance03">Finance</span>
            </div>

            <h3>
              Volatility and Crypto <br /> Volatility
            </h3>

            <p>
              Volatility is a measure of how much an asset's <br /> price has
              fluctuated upwards or downwards over time....
            </p>

            <button className="more">Read more >></button>
          </div>
        </div>

        <div className="card-laptop">
          <div className="card-image">
            <img src={phone} alt="" />
          </div>

          <div className="Volatility">
            <div>
              <span className="Finance03">Trading</span>
            </div>

            <h3>
              What is a Limit
              <br /> Order?
            </h3>

            <p>
              Limit buy or sell orders state the price at which <br />
              securities must be bought or sold. The order will
              <br /> be executed only at or below...
            </p>

            <button className="more">Read more >></button>
          </div>
        </div>

        <div className="card-laptop">
          <div className="card-image">
            <img src={half} alt="" />
          </div>

          <div className="Volatility">
            <div>
              <span className="Finance03">Trading</span>
            </div>

            <h3>
              What is a Limit <br /> Order?
            </h3>

            <p>
              Limit buy or sell orders state the price at which <br />
              securities must be bought or sold. The order will
              <br /> be executed only at or below...
            </p>

            <button className="more">Read more >></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodycard;
