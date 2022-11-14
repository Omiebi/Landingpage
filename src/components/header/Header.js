import "./header.css";

import logo from "../../assets/svg/Logo-White.svg";
import flag from "../../assets/svg/ellipse22.svg";
import bgImg from "../../assets/images/background-img.png";
import dash from "../../assets/images/dashboard.png";

const Header = () => {
  return (
    <div className="main-navbar">
      <div className="img-box">
        <img src={bgImg} alt="hero" />
      </div>
      <nav className="navbar">
        <div className="sub-navbar">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar01">
          <ul className="navbar-items">
            <li className="wallet">Wallet</li>
            <li className="Exchange">Exchange</li>
            <li className="For Businesses">For Businesses</li>
            <li className="Developer">Developer</li>
            <li className="Learn">Learn</li>
          </ul>
        </div>
        <div className="navbar01">
          <div className="SignIn">Sign In</div>
          <button className="SignupBtn">Sign up for free</button>
          <div>
            <img src={flag} alt="flag" />
          </div>
        </div>
      </nav>

      <div className="News">
        <button className="News-btn">
          News <span>News goes there and can be this long only</span>
        </button>
      </div>

      <div className="crypto">
        <h1>
          75+ cryptocurrencies at your <br />
          fingertips on Roqqu
        </h1>
      </div>

      <div className="Journey">
        <p>
          Buying & Selling cryptocurrency is made safe and easy with Roqqu.
          <br />
          Start your Roqqu journey now!
        </p>
      </div>

      <div className="email-form">
        <input
          type="text "
          placeholder="Your email address "
          className="email-form01"
        ></input>
        <button className="SignupBtn">Get started</button>
      </div>

      <div className="world">Download our app! Dive into the Roqqu world!</div>

      <div className="">
        <img src={dash} alt="dashboard" className="dashboad" />
      </div>
    </div>
  );
};

export default Header;
