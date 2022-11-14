import "./footer.css";

import vector from "../../assets/images/Vector.png";
import vectors from "../../assets/images/Playstore.png";
import Logowhite01 from "../../assets/images/Logowhite03.png";
import fill from "../../assets/images/Vector100.png";
import till from "../../assets/images/Vector200.png";
import gill from "../../assets/images/Vector300.png";
import hill from "../../assets/images/Vector400.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container01">
        <div className="footer-container02">
          <div>
            <button className="botcolor">
              <img src={vector} alt="" />
            </button>
          </div>

          <div>
            <button className="botcolor">
              <img src={vectors} alt="" />
            </button>
          </div>
        </div>

        <div>
          <div className="rock">
            <img src={Logowhite01} alt="" />
          </div>

          <div>
            <p className="latest01">
              Enter your email to get notified <br /> by Roqqu for latest
              updates.
            </p>
          </div>

          <div className="foot">
            <div className="foot-left">
              <div className="addressbutton">
                <button className="emailbutton">Email Address ></button>
              </div>

              <div className="tills">
                <div className="tilted">
                  <img src={fill} alt="" />
                </div>

                <div className="tilted">
                  <img src={till} alt="" />
                </div>

                <div className="tilted">
                  <img src={gill} alt="" />
                </div>

                <div className="tilted">
                  <img src={hill} alt="" />
                </div>
              </div>
            </div>
            <div className="table">
              <div>
                <h4>Product</h4>
                <p>Wallet</p>
                <p>Excahnge</p>
                <p>Loand</p>
                <p>Virtual card</p>
                <p>savings</p>
              </div>
              <div>
                <h4>Company</h4>
                <p>About</p>
                <p>Blog</p>
                <p>Legal and Privacy</p>
                <br /> <br />
                <h4>Developers</h4>
                <p>Overview</p>
                <p>Integration</p>
                <p>Technical help</p>
              </div>
              <div>
                <h4>Resources</h4>
                <p>Help center</p>
                <p>FAQ</p>
                <p>Roqqu Hub</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="rights">
            <p>© 2022 Roqqu Technologies Ltd. All rights reserved.</p>
            <p>
              Roqqu is a fully regulated digital asset operator licensed in
              Lithuania <br />
              by the Central Bank of Lithuania under Roqqu UAB Technologies with
              license number 305963619 operated legally across 28 countries{" "}
              <br />
              across Europe. <br />
              Information about Roqqu’s Crypto license can be found here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
