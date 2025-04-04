import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const freeHit365 = "/assets/images/freeHit365.webp";
const PaymentGatewayLogo = "/assets/images/payment-getway.webp";
const Logo18Plus = "/assets/images/18plus.webp";
const GamecareProfilePic = "/assets/images/gamecare.webp";
const GTBackground = "/assets/images/gt.webp";
const ApplicationImgLogo = "/assets/images/application-img.svg";
const InstagramProfilePic = "/assets/images/instagram.svg";
const TelegramProfilePic = "/assets/images/telegram.webp";
const FacebookBackground = "/assets/images/facebook.webp";
const WhatsappLogo = "/assets/images/whatsapp.svg";
const YouTubeBackground = "/assets/images/youtube.webp";


  return (
    <section className="bg-footer animate">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3">
            <img className="img-fluid foot-logo" src={freeHit365} alt="logo" />
          </div>

          {/* Payment Methods */}
          <div className="col-md-3">
            <h4>Payment Method</h4>
            <img
              src={PaymentGatewayLogo}
              className="img-fluid pm-img"
              alt="Payment Gateway"
            />
          </div>

          {/* Menu Links */}
          <div className="col-md-3">
            <h4>Menu</h4>
            <ul className="lc-menus">
              <li>
                <Link
                  to="/game-rules"
                  data-toggle="modal"
                  data-target="#gameRules"
                >
                  Game Rules
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  data-toggle="modal"
                  data-target="#termsCondition"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/responsible-gaming"
                  data-toggle="modal"
                  data-target="#responsibleGaming"
                >
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Game Therapy Section */}
          <div className="col-md-3 gameTherapy">
            <h4>Game Therapy</h4>
            <Link to="#">
              <img src={Logo18Plus} alt="18 Plus" />
            </Link>
            <Link to="#">
              <img src={GamecareProfilePic} alt="Game Care" />
            </Link>
            <Link to="#">
              <img src={GTBackground} alt="Game Therapy" />
            </Link>
            <br />
            <Link to="android/freehit365.apk" download="">
              <img
                src={ApplicationImgLogo}
                alt="Download App"
                className="apk-icon"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container">
        <div className="row">
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src={InstagramProfilePic}
              alt="Instagram"
              className="social-icons"
            />
          </Link>
          <Link
            to="https://www.telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <img
              src={TelegramProfilePic}
              alt="Telegram"
              className="social-icons"
            />
          </Link>
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src={FacebookBackground}
              alt="Facebook"
              className="social-icons"
            />
          </Link>
          <Link
            to="https://wa.me/+918469489880"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img
              src={WhatsappLogo}
              alt="WhatsApp"
              className="social-icons wt-btn"
            />
          </Link>
          <Link
            to="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img
              src={YouTubeBackground}
              alt="YouTube"
              className="social-icons"
            />
          </Link>
        </div>
      </div>

      <p className="copyright">
        &copy; {currentYear}. All Rights Reserved By Freehit365
      </p>
    </section>
  );
}

export default Footer;
