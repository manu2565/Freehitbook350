import React from "react";
import Main from "./Main";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div>
        <section className="banner-sec">
          <div className="banner-content">
          <Main />
            <div className="banner-item">
             
              <span className="banner-get-id-btn">
                <Link to="#" className="btn cmn-btn">
                  Get Id
                </Link>
              </span>
            </div>
          </div>
        </section>
        <section className="about-us-sec about-bg-img">
          <div className="container">
            <h1 className="text-white text-center fs-h1">
              About <span className="title-color">US</span>
            </h1>
            <p className="p-3 text-center about-side-text">
              The best thing <b className="text-white">about us</b> is that
              Freehit365 is the best online betting site for punters in India.
              We provide an instant I’d and safe playing experience with a wide
              range of premium I’d providers. We have the most comprehensive
              list of sports and bets in India. There's a range of betting
              options from cricket to football to TeenPatti and everything in
              between.
            </p>

            <div className="row p-2">
              <div className="col-lg-5 text-white">
                <h5 className="card-title mb-1">Who We are?</h5>
                <p className="card-text about-text-justify about-side-text">
                  We are a team of passionate punters who love the thrill and
                  excitement of betting on sports. We understand the importance
                  of providing an easy-to-use and reliable online betting site
                  for Indian punters. We aim to deliver the best possible
                  experience to all our customers.
                </p>
                <br />
                <h5 className="card-title mb-1">We - The Game Changers</h5>
                <p className="card-text about-text-justify about-side-text">
                  We pride ourselves on our reputation and integrity. The
                  government of India fully licenses us. As for{" "}
                  <Link to="" className="text-primary">
                    <u>betting on cricket</u>
                  </Link>
                  , we have the most comprehensive listings available online.
                  You can bet on almost everything from test matches to Twenty
                  20s, World Cup to IPL or one-day internationals. The best part
                  is that our odds on everything are updated in real-time.
                </p>
                <br />
              </div>
              <div className="col-lg-7">
                <img
                  className="poker-img"
                  alt="Poker Game"
                  src="/assets/images/poker-new.webp"
                />
              </div>
            </div>

            <div className="p-2 text-white">
              <h5 className="card-title mb-1">Our Team</h5>
              <p className="card-text about-side-text">
                Our team has come together to create the{" "}
                <Link to="" className="text-primary">
                  <u>best betting site in India</u>
                </Link>
                . We have diverse skills and backgrounds that allow us to build
                a site that is efficient, user-friendly, and reliable. Our goal
                is to provide our customers with an enjoyable experience while
                they place bets on their favorite sports and events. We believe
                our approach is the best way to grow the betting industry in
                India and help people make informed decisions about their
                gambling.
              </p>
              <br />
            </div>

            <div className="row">
              <div className="col-sm-6 mb-4">
                <div className="card bg-dark border-0">
                  <div className="card-body bg-dark text-white mission-data">
                    <h5 className="card-title">Mission</h5>
                    <p className="card-text fs-14 about-side-text">
                      At Freehit365, we believe in giving back to our community.
                      Our mission is to impact the lives of people in need
                      through sports positively. We are a team of passionate
                      individuals from diverse backgrounds and have united to
                      create something great.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-4">
                <div className="card bg-dark border-0">
                  <div className="card-body bg-dark text-white mission-data">
                    <h5 className="card-title">Vision</h5>
                    <p className="card-text fs-14 about-side-text">
                      Our vision is to build an inclusive community that
                      celebrates all aspects of diversity through{" "}
                      <Link to="" className="text-primary">
                        <u>betting and sports</u>
                      </Link>
                      . Our core values are inclusion, transparency, and
                      collaboration. We strive to create a safe and supportive
                      space for all while advancing our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="col-sm-8 mb-4">
                  <div className="card bg-dark border-0">
                    <div className="card-body bg-dark text-white mission-data">
                      <h5 className="card-title">Values</h5>
                      <p className="card-text fs-14 about-side-text">
                        We are dedicated to providing quality customer service,
                        24/7, 365 days a year. If you have any questions or
                        problems, we are here to help. We are dedicated to
                        providing our customers with an unparalleled experience,
                        and we are constantly working to improve our site to
                        meet the needs of everyone who visits it. In everything
                        we do, we aim to give back to those who have given so
                        much to us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="a-us-wpr">
              <div className="row">
                <div className="col-lg-4">
                  <div className="about-us-lft-bx">
                    <div className="about-us-logo">
                      <img
                        alt="Freehit365 Logo"
                        src="/assets/images/freehit365.webp"
                      />
                    </div>
                    <div className="about-us-point">
                      <ul>
                        <li>
                          <p>
                            .Freehit365 is one of the best premium options for
                            all branded sites.
                          </p>
                        </li>
                        <li>
                          <p>
                            .We deal in all branded websites with 250+
                            games/casino/sports.
                          </p>
                        </li>
                        <li>
                          <p>.Instant Withdraw and Instant I’D Creation.</p>
                        </li>
                        <li>
                          <p>
                            .Follow a simple process and get your ID in a few
                            minutes.
                          </p>
                        </li>
                        <li>
                          <p>
                            .Get in touch with us by a simple click on{" "}
                            <span>Contact Us.</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="c-no-dow-app-bx">
                    <ul className="cmn-ul-list">
                      <li>
                        <Link
                          to="https://wa.me/"
                          target="_blank"
                          className="btn cmn-bdr-btn m-1"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          to="https://wa.me/"
                          target="_blank"
                          className="btn cmn-bdr-btn m-1"
                        ></Link>
                      </li>
                      <li>
                        <Link
                          to="https://wa.me/wa.me"
                          target="_blank"
                          className="btn cmn-bdr-btn m-1"
                        >
                          wa.me
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://wa.me/+918469489880"
                          target="_blank"
                          className="btn cmn-bdr-btn m-1"
                        >
                          +918469489880
                        </Link>
                      </li>
                      <li className="hide-mobile-view-li">
                        <Link
                          to="https://wa.me/wa.me/+918469489880"
                          target="_blank"
                          className="btn cmn-bdr-btn m-1"
                        >
                          wa.me/+918469489880
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="android/freehit.apk"
                          target="_blank"
                          className="btn cmn-bdr-btn text-white m-1"
                        >
                          Download
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="android/freehit.apk"
                          target="_blank"
                          className="btn cmn-bdr-btn text-white m-1"
                        >
                          91 Score
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
