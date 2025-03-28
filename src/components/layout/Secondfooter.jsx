import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

function SecondFooter() {
  return (
    <>
      {" "}
      <footer className="footer footer-style">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pr-md-4">
              <Link className="navbar-brand" href="">
                <img src="assets/images/freehit365.webp" alt="" />
              </Link>
              <p className="mt-4">
                Freehit365 is one of the best premium option for all branded
                sites.Instant Withdraw and Instant I’D Creation. We deal in all
                branded websites with 250+ Games / Casino / Sports.
              </p>
            </div>
            <div className="col-md-2">
              <h3>Discover</h3>
              <ul className="list-unstyled nav-links">
                <li>
                  <Link href="">Home</Link>
                </li>
                <li>
                  <Link href="about-us">About Us</Link>
                </li>
                <li>
                  <Link href="best-providers">Best Providers</Link>
                </li>
                <li>
                  <Link href="s">Sports</Link>
                </li>
                <li>
                  <Link href="blogs">Blogs</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h3>Links</h3>
              <ul className="list-unstyled nav-links">
                <li>
                  <Link href="privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="terms-and-condition">Terms &amp; Condition</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Follow Us</h3>
              <ul className="social list-unstyled">
                <li>
                  <Link
                    href="https://www.facebook.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-facebook-square fa-lg footer-social-icon"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/c/yourchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-youtube-play fa-lg footer-social-icon"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-instagram fa-lg footer-social-icon"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-telegram fa-lg footer-social-icon"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyright mt-5 pt-5">
                <p className="text-center">@copyright.Freehit365.2025</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SecondFooter;
