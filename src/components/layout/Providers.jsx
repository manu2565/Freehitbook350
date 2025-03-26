import React from "react";
import { useState } from "react";
import Main from "./Main";
import Secondfooter from "./Secondfooter";
import Socialmedia from "./Socialmedia";
import { Link } from "react-router-dom";
function Providers() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
 
        {/* Banner Section */}
        <section className="banner-sec">
          <div className="banner-content">
            <Main />
            <div className="banner-item">
              <img src="assets/images/path_to_image_1.jpg" alt="Banner 1" />
              <span className="banner-get-id-btn">
                <Link to="#" className="btn cmn-btn">
                  Get Id
                </Link>
              </span>
            </div>
            <div className="banner-item">
              <img src="assets/images/path_to_image_2.jpg" alt="Banner 2" />
              <span className="banner-get-id-btn">
                <Link to="#" className="btn cmn-btn">
                  Get Id
                </Link>
              </span>
            </div>
            <div className="banner-item">
              <img src="assets/images/path_to_image_3.jpg" alt="Banner 3" />
              <span className="banner-get-id-btn">
                <Link to="#" className="btn cmn-btn">
                  Get Id
                </Link>
              </span>
            </div>
          </div>
        </section>
        <section className="wc-provider-sec">
          <section className="best-provider-sec">
            <div className="container">
              <div className="sec-title">
                <h2>
                  Best <span>Providers</span>
                </h2>
                <h1 className="text-white fs-6">
                  Online Betting Id Provider In India
                </h1>
                <p className="sub-title">
                  Play your favorite casino games like Teen Patti, Andar Bahar,
                  Blackjack, Roulette with a live dealer, anytime, anywhere!
                </p>
              </div>
              <div className="providers-list">
                <div className="row"></div>
              </div>
            </div>
          </section>
        </section>

    
    </>
  );
}

export default Providers;
