import React from "react";
import Slider from "./Slider";
import Afooter from "../Afooter";
import Marque from "../Marque";
import Playinggames from "../Playinggames";
import { Link } from "react-router-dom";
function Matka() {
  return (
    <div>
      
      <div data-v-cb9ac2ee className="page"  style={{marginTop:"50px"}}>
        <div data-v-f4c3ad76 data-v-cb9ac2ee>
         <Marque/>
          <div data-v-369c5808 data-v-f4c3ad76>
           <Playinggames/>
          </div>
          <div
            data-v-f4c3ad76
            className="vue-flux"
            style={{ width: "1519.2px", height: "284.85px" }}
          >
            <div
              className="flux-transition"
              style={{
                overflow: "visible",
                perspective: "1600px",
                zIndex: 3,
                width: "1519.2px",
                height: "284.85px",
              }}
            >
              <Slider />
            </div>
            <div
              className="flux-image"
              style={{
                width: "1519.2px",
                height: "284.85px",
                backgroundImage: 'url("assets/images/slider6.jpg")',
                backgroundSize: "1519.2px 296.719px",
                backgroundPosition: "0px -5.93437px",
                backgroundRepeat: "no-repeat",
                overflow: "hidden",
              }}
            />
            <div className="complements">
              <div className="remainder upper" />
              <div className="remainder lower" />
              <nav data-v-f4c3ad76 className="flux-pagination">
                <ul>
                  <li>
                    <span title className="pagination-item" />
                  </li>
                  <li>
                    <span title className="pagination-item" />
                  </li>
                  <li>
                    <span title className="pagination-item" />
                  </li>
                  <li>
                    <span title className="pagination-item" />
                  </li>
                  <li>
                    <span title className="pagination-item active" />
                  </li>
                  <li>
                    <span title className="pagination-item" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            data-v-f4c3ad76
            id="loginModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            className="modal fade"
          >
            <div
              data-v-f4c3ad76
              role="document"
              className="modal-dialog modal-dialog-centered"
            >
              <div data-v-f4c3ad76 className="modal-content">
                <button
                  data-v-f4c3ad76
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="close modal-close-button"
                >
                  <span data-v-f4c3ad76 aria-hidden="true">
                    ×
                  </span>
                </button>
                <div
                  data-v-f4c3ad76
                  className="login-container my-auto p-3 px-md-0"
                >
                  <div
                    data-v-f4c3ad76
                    className="d-flex flex-column h-100 justify-content-center"
                  >
                    {/**/}
                    <br data-v-f4c3ad76 />
                    <div
                      data-v-f4c3ad76
                      id="pills-tabContent"
                      className="tab-content"
                    >
                      <div
                        data-v-f4c3ad76
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="pills-login-tab"
                        className="tab-pane fade show active"
                      >
                        <div data-v-f4c3ad76>
                          <form
                            autoComplete="off"
                            className="login-form d-flex flex-column w-75 mx-auto"
                          >
                            {/**/}
                            <div className="form-group">
                              <input
                                type="text"
                                placeholder="Username"
                                className="form-control mb-2"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                placeholder="Password"
                                className="form-control mb-2"
                              />
                              <i
                                id="togglePassword"
                                className="bi bi-eye-slash"
                              />
                            </div>
                            <button
                              type="button"
                              title="Login"
                              className="align-self-center login-signup-button mb-3"
                            >
                              Login
                            </button>
                            <p className="text-center pt-2">
                              <Link
                                to=";"
                                id="submitDemoUserForm"
                                className="redirect-link-button text-white cursor-pointer"
                              >
                                Sign in with Demo User account? Click Here.
                              </Link>
                            </p>
                            <p className="text-center mb-2">
                              <Link className="redirect-link-button">
                                Don't have an account ?
                              </Link>
                              <Link
                                to="/android/freehit365.apk"
                                className="redirect-link-button pull-right"
                              >
                                DOWNLOAD APK
                              </Link>
                            </p>
                          </form>
                        </div>
                      </div>
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-f4c3ad76
            id="mobile-sidenav"
            className="mobile_sidenav d-block d-lg-none p-2"
          >
            <div data-v-f4c3ad76 tabIndex={-1} className="sidenav-overlay" />
            <div data-v-f4c3ad76 className="d-flex mb-2 pl-2">
              <div
                data-v-f4c3ad76
                id="hamburger"
                className="hamburger is-active d-lg-none"
              >
                <span data-v-f4c3ad76 className="line" />
                <span data-v-f4c3ad76 className="line" />
                <span data-v-f4c3ad76 className="line" />
              </div>
            </div>
            <div data-v-f4c3ad76 className="d-flex">
              <div data-v-f4c3ad76 className="col-8">
                <p data-v-f4c3ad76 className="font-size-12">
                  demouser1 (user)
                </p>
                <span data-v-f4c3ad76 className="fs-10">
                  Last Login: Jan 15th 2025, 9:59:42 PM
                </span>
              </div>
              <div
                data-v-f4c3ad76
                className="col-4 d-flex justify-content-center align-items-center"
              >
                <Link
                  data-v-f4c3ad76
                  title="Log Out"
                  to="/home"
                 
                >
                  LOGOUT
                </Link>
              </div>
            </div>
            <hr data-v-f4c3ad76 className="border-white" />
            <div data-v-f4c3ad76 className="text-center">
              <h6 data-v-f4c3ad76>Accounts</h6>
              <ul data-v-f4c3ad76 className="d-flex flex-column mb-3">
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/my-market"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      storefront
                    </span>
                    <span data-v-f4c3ad76>My Market</span>
                  </Link>
                </li>
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/favourites"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      push_pin
                    </span>
                    <span data-v-f4c3ad76>Pinned</span>
                  </Link>
                </li>
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/statements"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      receipt_long
                    </span>
                    <span data-v-f4c3ad76>Statement</span>
                  </Link>
                </li>
                <li data-v-f4c3ad76>
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      military_tech
                    </span>
                    <span data-v-f4c3ad76>Winning</span>
                    <span
                      data-v-f4c3ad76
                      className="font-size-14 ml-auto amount text-danger"
                    >
                      <h6 data-v-f4c3ad76 className="d-inline-block mb-0">
                        PTI
                      </h6>
                      1,615.88
                    </span>
                  </div>
                </li>
                <li data-v-f4c3ad76>
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      credit_score
                    </span>
                    <span data-v-f4c3ad76>Credit Reference</span>
                    <span data-v-f4c3ad76 className="ml-auto amount">
                      1,616.00
                    </span>
                  </div>
                </li>
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/profit-loss"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      exposure
                    </span>
                    <span data-v-f4c3ad76>Profit &amp; Loss</span>
                  </Link>
                </li>
                <li data-v-f4c3ad76 className="d-none mobile-show">
                  <Link
                    data-v-f4c3ad76
                    to="/chats"
                    className="nav-link-chat bell-btn mr-3 ml-3"
                  >
                    <span data-v-f4c3ad76 className="noti-count">
                      0
                    </span>
                    <i data-v-f4c3ad76 className="fas fa-comment chat-icon" />
                    <span data-v-f4c3ad76 className="ml-4">
                      Chat
                    </span>
                  </Link>
                </li>
                <li data-v-f4c3ad76 className="d-none mobile-show">
                  <button
                    data-v-f4c3ad76
                    data-toggle="modal"
                    data-target="#infoModal"
                    className="bg-transparent bell-btn ml-3"
                  >
                    <span data-v-f4c3ad76 className="noti-count">
                      0
                    </span>
                    <i data-v-f4c3ad76 className="fas fa-bell fa-lg" />
                    <span data-v-f4c3ad76 className="ml-4">
                      Notification
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <hr data-v-f4c3ad76 className="border-white" />
            <div data-v-f4c3ad76 className="text-center">
              <h6 data-v-f4c3ad76>Reports</h6>
              <ul data-v-f4c3ad76 className="d-flex flex-column mb-3">
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/open-bets"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      menu_open
                    </span>
                    <span data-v-f4c3ad76>Open Bets</span>
                  </Link>
                </li>
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/settled-bets"
                    className="mobile_sidenav_links py-1"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      work
                    </span>
                    <span data-v-f4c3ad76>Settled Bets</span>
                  </Link>
                </li>
                <li data-v-f4c3ad76>
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      password
                    </span>
                    <span data-v-f4c3ad76>Change Password</span>
                  </div>
                </li>
                <li
                  data-v-f4c3ad76
                  data-toggle="modal"
                  data-target="#rulesModal"
                >
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      grading
                    </span>
                    <span data-v-f4c3ad76>Rules</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            data-v-f4c3ad76
            id="changePassword"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-labelledby="changePasswordLabel"
            aria-hidden="true"
            className="modal fade"
          >
            <div data-v-f4c3ad76 className="modal-dialog modal-dialog-centered">
              <div data-v-f4c3ad76 className="modal-content">
                <div data-v-f4c3ad76 className="modal-header py-2">
                  <h6
                    data-v-f4c3ad76
                    id="changePasswordLabel"
                    className="modal-title text-center w-100"
                  >
                    Change Password
                  </h6>
                  <button
                    data-v-f4c3ad76
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    className="close"
                  >
                    <span data-v-f4c3ad76 aria-hidden="true">
                      ×
                    </span>
                  </button>
                </div>
                <div data-v-f4c3ad76 className="modal-body w-75 mx-auto">
                  <form
                    data-v-f4c3ad76
                    autoComplete="off"
                    className="change-password d-flex flex-column align-items-center"
                  >
                    <input
                      data-v-f4c3ad76
                      type="password"
                      placeholder="Current Password"
                      className="mb-3 w-100"
                    />
                    {/**/}
                    <input
                      data-v-f4c3ad76
                      type="password"
                      placeholder="New Password"
                      className="mb-3 w-100"
                    />
                    {/**/}
                    <input
                      data-v-f4c3ad76
                      type="password"
                      placeholder="Confirm New Password"
                      className="mb-3 w-100"
                    />
                    {/**/}
                    <button
                      data-v-f4c3ad76
                      className="change-password-submit-button"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-f4c3ad76
            id="infoModal"
            tabIndex={-1}
            aria-labelledby="infoModalLabel"
            aria-hidden="true"
            className="modal fade"
          >
            <div data-v-f4c3ad76 className="modal-dialog modal-dialog-centered">
              <div data-v-f4c3ad76 className="modal-content">
                <div data-v-f4c3ad76 className="modal-header p-2 border-0">
                  <h6
                    data-v-f4c3ad76
                    id="infoModalLabel"
                    className="modal-title"
                  >
                    Notification
                  </h6>
                </div>
                <div
                  data-v-f4c3ad76
                  className="modal-body p-0 empty-notification"
                >
                  <div data-v-f4c3ad76 className="border-bottom">
                    No notification found!
                  </div>
                </div>
                <div data-v-f4c3ad76 className="modal-footer border-0">
                  <button
                    data-v-f4c3ad76
                    type="button"
                    data-dismiss="modal"
                    className="btn btn-secondary py-0"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-f4c3ad76
            id="rulesModal"
            tabIndex={-1}
            aria-labelledby="rulesModalLabel"
            aria-hidden="true"
            className="modal fade"
          >
            <div
              data-v-f4c3ad76
              className="modal-dialog modal-dialog-centered modal-xl"
            >
              <div data-v-f4c3ad76 className="modal-content">
                <div data-v-f4c3ad76 className="modal-header p-2">
                  <h6
                    data-v-f4c3ad76
                    id="rulesModalLabel"
                    className="modal-title"
                  >
                    Rules
                  </h6>
                  <button
                    data-v-f4c3ad76
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    className="close"
                  >
                    <span data-v-f4c3ad76 aria-hidden="true">
                      ×
                    </span>
                  </button>
                </div>
                <div data-v-f4c3ad76 id="rules_div" className="modal-body">
                  <ul data-v-f4c3ad76 id="rules_tab1" className="rules-tab">
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={7}
                        className="rt-link"
                      >
                        Virtual Sports
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={3}
                        className="rt-link"
                      >
                        cricket
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={2}
                        className="rt-link"
                      >
                        tennis
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={1}
                        className="rt-link"
                      >
                        soccer
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={40}
                        className="rt-link"
                      >
                        FIFA CUP WINNER
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={41}
                        className="rt-link"
                      >
                        WINNER CUP
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={44}
                        className="rt-link"
                      >
                        ELECTION
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={48}
                        className="rt-link"
                      >
                        ELECTION
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={51}
                        className="rt-link"
                      >
                        WINNER CUP
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={52}
                        className="rt-link"
                      >
                        Snooker
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={53}
                        className="rt-link"
                      >
                        American Football
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={54}
                        className="rt-link"
                      >
                        Baseball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={55}
                        className="rt-link"
                      >
                        Basketball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={56}
                        className="rt-link"
                      >
                        Ice Hockey
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={57}
                        className="rt-link"
                      >
                        Australian Rules
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={58}
                        className="rt-link"
                      >
                        Handball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={59}
                        className="rt-link"
                      >
                        Volleyball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={60}
                        className="rt-link"
                      >
                        Gaelic Games
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={62}
                        className="rt-link"
                      >
                        Mixed Martial Arts
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={63}
                        className="rt-link"
                      >
                        Esports
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={256}
                        className="rt-link"
                      >
                        Kabaddi
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id={267}
                        className="rt-link"
                      >
                        FIFA CUP WINNER
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id="Matka"
                        className="rt-link"
                      >
                        Matka
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id="Indian-Casino"
                        className="rt-link"
                      >
                        Indian Casino
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id="Internatioal-casino"
                        className="rt-link"
                      >
                        International Casino
                      </Link>
                    </li>
                  </ul>
                  <div data-v-f4c3ad76 id="rules_des" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-cb9ac2ee
          className="position-relative main-container-user inplay_container"
        >
          <div
            data-v-1b016724
            data-v-cb9ac2ee
            className="inplay_container p-1 p-md-3"
          >
            <div data-v-1b016724 className="game_container py-2">
              <div
                data-v-1b016724
                className="game_header text-poppins px-1 px-md-2 d-flex align-items-center justify-content-between pb-2 mb-2"
              >
                <div
                  data-v-1b016724
                  className="d-flex align-items-center header-image-container"
                >
                  <img
                    data-v-1b016724
                    src="assets/images/matka-icon.webp"
                    alt=""
                    className="mr-2 game_image"
                  />
                  <span data-v-1b016724 className="mr-2 font-weight-bold">
                    MATKA MARKET
                  </span>
                </div>
                <div data-v-1b016724>
                  <i
                    data-v-1b016724
                    aria-hidden="true"
                    className="fa fa-exclamation-circle show-cursor"
                  />
                </div>
              </div>
              <div data-v-1b016724 className="row mb-3">
                {/**/}
                <div
                  data-v-1b016724
                  id="sridevicont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        SRIDEVI
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 10:55 AM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 11:55 AM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>270</span>
                        <span data-v-1b016724>125</span>
                        <span data-v-1b016724>98</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>199</span>
                        <span data-v-1b016724>377</span>
                        <span data-v-1b016724>97</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="sridevi" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="time-bazarcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        TIME BAZAR
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 12:40 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 01:40 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>334</span>
                        <span data-v-1b016724>113</span>
                        <span data-v-1b016724>05</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>230</span>
                        <span data-v-1b016724>119</span>
                        <span data-v-1b016724>51</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="time-bazar" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="madhur-daycont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        MADHUR DAY
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 01:00 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 02:00 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>689</span>
                        <span data-v-1b016724>445</span>
                        <span data-v-1b016724>33</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>378</span>
                        <span data-v-1b016724>148</span>
                        <span data-v-1b016724>83</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="madhur-day" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="milan-daycont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        MILAN DAY
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 02:40 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 04:40 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>268</span>
                        <span data-v-1b016724>134</span>
                        <span data-v-1b016724>68</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>466</span>
                        <span data-v-1b016724>440</span>
                        <span data-v-1b016724>68</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="milan-day" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="kalyancont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        KALYAN
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 03:15 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 05:15 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>236</span>
                        <span data-v-1b016724>588</span>
                        <span data-v-1b016724>11</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>138</span>
                        <span data-v-1b016724>279</span>
                        <span data-v-1b016724>28</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="kalyan" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="madhur-nightcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        MADHUR NIGHT
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 08:00 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 10:00 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>289</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724>9</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>290</span>
                        <span data-v-1b016724>190</span>
                        <span data-v-1b016724>10</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="madhur-night" className="col-12">
                    {/**/}
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="milan-nightcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        MILAN NIGHT
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 08:40 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 10:40 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>127</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724>0</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>278</span>
                        <span data-v-1b016724>156</span>
                        <span data-v-1b016724>72</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="milan-night" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="kalyan-nightcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        KALYAN NIGHT
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 09:00 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 11:00 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>339</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724>5</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>267</span>
                        <span data-v-1b016724>347</span>
                        <span data-v-1b016724>54</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="kalyan-night" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="rajdhani-nightcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        RAJDHANI NIGHT
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 09:05 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 11:15 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>339</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724>5</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>355</span>
                        <span data-v-1b016724>570</span>
                        <span data-v-1b016724>32</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="rajdhani-night" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="main-bazarcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        MAIN BAZAR
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 09:30 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 11:40 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724 />
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>690</span>
                        <span data-v-1b016724>236</span>
                        <span data-v-1b016724>51</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="main-bazar" className="col-12">
                    {/**/}
                  </div>
                </div>
                {/**/}
              </div>
              <div
                data-v-1b016724
                className="game_header text-poppins px-1 px-md-2 d-flex align-items-center justify-content-between pb-2 mb-2"
              >
                <div
                  data-v-1b016724
                  className="d-flex align-items-center header-image-container"
                >
                  <img
                    data-v-1b016724
                    src="assets/images/matka-icon.webp"
                    alt=""
                    className="mr-2 game_image"
                  />
                  <span data-v-1b016724 className="mr-2 font-weight-bold">
                    DELHI MARKET
                  </span>
                </div>
              </div>
              <div data-v-1b016724 className="row mb-3">
                <div
                  data-v-1b016724
                  id="desawarcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        DESAWAR
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 04:30 AM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 04:30 AM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>000</span>
                        <span data-v-1b016724>300</span>
                        <span data-v-1b016724>03</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>800</span>
                        <span data-v-1b016724>000</span>
                        <span data-v-1b016724>80</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="desawar" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="gaziabadcont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        GAZIABAD
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 08:30 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 08:30 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>000</span>
                        <span data-v-1b016724>600</span>
                        <span data-v-1b016724>06</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>000</span>
                        <span data-v-1b016724>400</span>
                        <span data-v-1b016724>04</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="gaziabad" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/**/}
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="galicont"
                  className="col-12 col-md-6 mb-2 matka-m-container"
                >
                  <div data-v-1b016724 className="matka-container">
                    <div data-v-1b016724 className="matka-overlay" />
                    <div data-v-1b016724 className="game_name_container">
                      <h4 data-v-1b016724 className="game_name">
                        GALI
                      </h4>
                    </div>
                    <div
                      data-v-1b016724
                      className="d-flex justify-content-between"
                    >
                      <span data-v-1b016724 className="open-time">
                        OPEN 10:45 PM
                      </span>
                      <span data-v-1b016724 className="close-time">
                        CLOSE 10:45 PM
                      </span>
                    </div>
                    <div data-v-1b016724 className="matka-result-container">
                      <div data-v-1b016724>
                        <span data-v-1b016724 />
                        <span data-v-1b016724>Open</span>
                        <span data-v-1b016724>Close</span>
                        <span data-v-1b016724>Jodi</span>
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Today</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724>NYD</span>
                        <span data-v-1b016724 />
                      </div>
                      <div data-v-1b016724>
                        <span data-v-1b016724>Yesterday</span>
                        <span data-v-1b016724>300</span>
                        <span data-v-1b016724>900</span>
                        <span data-v-1b016724>39</span>
                      </div>
                    </div>
                  </div>
                  <div data-v-1b016724 id="gali" className="col-12">
                    {/**/}
                  </div>
                </div>
                <div
                  data-v-1b016724
                  id="warlimatka-rule-modal"
                  data-backdrop="static"
                  data-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="rulesModalLabel"
                  aria-hidden="true"
                  className="modal fade"
                >
                  <div
                    data-v-1b016724
                    className="modal-dialog modal-dialog-centered"
                  >
                    <div data-v-1b016724 className="modal-content">
                      <div data-v-1b016724 className="modal-header">
                        <h5
                          data-v-1b016724
                          id="rulesModalLabel"
                          className="modal-title text-dark"
                        >
                          Rules
                        </h5>
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          aria-label="Close"
                          className="close"
                        >
                          <span data-v-1b016724 aria-hidden="true">
                            ×
                          </span>
                        </button>
                      </div>
                      <div data-v-1b016724 className="modal-body">
                        {/**/}
                      </div>
                      <div data-v-1b016724 className="modal-footer">
                        <button
                          data-v-1b016724
                          type="button"
                          data-dismiss="modal"
                          className="btn btn-secondary"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-v-cb9ac2ee
            id="firstLoginPopup"
            data-backdrop="static"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            className="modal fade"
          >
            <div
              data-v-cb9ac2ee
              className="modal-dialog modal-lg modal-dialog-centered"
            >
              <div
                data-v-cb9ac2ee
                className="modal-content bg-transparent border-0"
              >
                <div
                  data-v-cb9ac2ee
                  className="modal-header bg-transparent border-0"
                >
                  <button
                    data-v-cb9ac2ee
                    type="button"
                    id="closeFirstPopup"
                    data-dismiss="modal"
                    aria-label="Close"
                    className="close flp-close-btn opacity-100"
                  >
                    <i
                      data-v-cb9ac2ee
                      aria-hidden="true"
                      className="fa fa-times"
                      style={{ fontSize: "30px" }}
                    />
                  </button>
                </div>
                <div data-v-cb9ac2ee className="modal-body">
                  <img
                    data-v-cb9ac2ee
                    src="assets/images/matka-market"
                    alt=""
                    className="login-first-image w-100"
                  />
                </div>
              </div>
            </div>
          </div>
          <div data-v-687fd205 data-v-cb9ac2ee>
            <div data-v-687fd205 className="game_lobby_iframe">
              <span data-v-687fd205 className="lobby-iframe-close-icon">
                <img data-v-687fd205 src="assets/images/cross-icon.webp" />
              </span>
              <iframe
                data-v-687fd205
                src="assets/images/saved_resource(1).html"
              />
            </div>
            <Afooter />
          </div>
          {/**/}
        </div>
        <div
          data-v-cb9ac2ee
          className="whatapp-chat-icons draggable"
          style={{ left: "8px", bottom: "80px" }}
        >
          <div data-v-cb9ac2ee className="whatapp-btn-fixed whatapp-btn-click">
            <Link data-v-cb9ac2ee to=";">
              <img
                data-v-cb9ac2ee
                src="assets/images/whatsapp.svg"
                alt="WhatsApp"
                className="fix_whatsup"
              />
            </Link>
            <button data-v-cb9ac2ee type="button" className="whatapp-btn-fixed">
              <img
                data-v-cb9ac2ee
                src="assets/images/close-icon.webp"
                alt="close-icon"
                className="close-item"
              />
            </button>
          </div>
        </div>
        <div
          data-v-cb9ac2ee
          id="issueModal"
          tabIndex={-1}
          aria-labelledby="issueModalLabel"
          aria-hidden="true"
          className="modal fade"
        >
          <div data-v-cb9ac2ee className="modal-dialog modal-dialog-centered">
            <div data-v-cb9ac2ee className="modal-content">
              <div data-v-cb9ac2ee className="modal-header">
                <h5
                  data-v-cb9ac2ee
                  id="issueModalLabel"
                  className="modal-title"
                >
                  Please select your issue
                </h5>
                <button
                  data-v-cb9ac2ee
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="close"
                >
                  <span data-v-cb9ac2ee aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
              <div data-v-cb9ac2ee className="modal-body">
                <ul data-v-cb9ac2ee className="issues-list" />
              </div>
            </div>
          </div>
        </div>
        <button
          data-v-cb9ac2ee
          data-bs-toggle="modal"
          data-bs-target="#notification-alert"
        />
        <div
          data-v-cb9ac2ee
          id="notification-alert"
          tabIndex={-1}
          aria-labelledby="notificationModalLabel"
          className="modal fade notification-alert-modal"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          <div data-v-cb9ac2ee className="modal-dialog">
            <div data-v-cb9ac2ee className="modal-content">
              <div data-v-cb9ac2ee className="modal-body">
                <div data-v-cb9ac2ee className="notifi-section">
                  <div data-v-cb9ac2ee className="notifi-icon">
                    <img
                      data-v-cb9ac2ee
                      src="assets/images/notification-alert.svg"
                      alt=""
                    />
                  </div>
                  <div data-v-cb9ac2ee className="notify-theme-info">
                    <h3 data-v-cb9ac2ee>Turn on the Notifications</h3>
                    <div data-v-cb9ac2ee className="notify-justify-btn">
                      <button
                        data-v-cb9ac2ee
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        className="btn cancel-but"
                      >
                        Cancel
                      </button>
                      <button
                        data-v-cb9ac2ee
                        data-bs-dismiss="modal"
                        className="btn thm-but"
                      >
                        Allow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div
        id="lNYJ9LTfB"
        role="status"
        aria-live="polite"
        aria-atomic="false"
      />
      <div>
        <div
          className="grecaptcha-badge"
          data-style="bottomright"
          style={{
            width: "256px",
            height: "60px",
            display: "block",
            transition: "right 0.3s",
            position: "fixed",
            bottom: "14px",
            right: "-186px",
            boxShadow: "gray 0px 0px 5px",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <div className="grecaptcha-logo">
            <iframe
              title="reCAPTCHA"
              width={256}
              height={60}
              role="presentation"
              name="a-hvrmi0s7jtjy"
              frameBorder={0}
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
             
            />
          </div>
          <div className="grecaptcha-error" />
          <textarea
            id="g-recaptcha-response"
            name="g-recaptcha-response"
            className="g-recaptcha-response"
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid rgb(193, 193, 193)",
              margin: "10px 25px",
              padding: "0px",
              resize: "none",
              display: "none",
            }}
            defaultValue={""}
          />
        </div>
        <iframe
          style={{ display: "none" }}
          src="assets/images/saved_resource(2).html"
        />
      </div>
    </div>
  );
}

export default Matka;
