import React from "react";

import Marque from "../Marque";

import Slider from "./Slider";
import Playinggames from "../Playinggames";
import { Link } from "react-router-dom";
function Circket() {
  const carouselImages = [
    "/assets/images/1728783601.jpg",
    "/assets/images/1736826134.jpg",
    "/assets/images/1736826160.jpg",
    "/assets/images/1736826185.jpg",
    "/assets/images/1736826207.jpg",
    "/assets/images/1736826229.jpg",
    "/assets/images/1736826259.jpg",
    "/assets/images/1736826279.jpg",
  ];
  return (
    <div data-v-cb9ac2ee className="page" style={{marginTop:"50px"}}>
      <div data-v-f4c3ad76 data-v-cb9ac2ee>
        <Marque />
        <Playinggames />
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
                                to="android/freehit365.apk"
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
                <Link data-v-f4c3ad76 title="Log Out" to="/home">
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
                    to="my-market"
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
                    to="favourites"
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
                    to="statements"
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
                    to="profit-loss"
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
                    to="chats"
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
                    to="open-bets"
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
                    to="settled-bets"
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
            data-v-ce5b5614
            data-v-cb9ac2ee
            className="inplay_container"
            sport_slug="cricket"
          >
            <div data-v-ce5b5614 className="all_games_container p-1 p-md-3">
              <div data-v-ce5b5614 className="game_container">
                <div data-v-ce5b5614 className="game_header text-poppins pl-1">
                  <div data-v-ce5b5614 className="d-flex align-items-center">
                    <span data-v-ce5b5614 className="mr-2">
                      CRICKET
                    </span>
                    <span data-v-ce5b5614>(19)</span>
                  </div>
                  <div data-v-ce5b5614 className="icon_set">
                    <div data-v-ce5b5614 className="icon_padding">
                      <i
                        data-v-ce5b5614
                        aria-hidden="true"
                        className="fa fa-exclamation-circle show-cursor"
                      />
                    </div>
                    <div data-v-ce5b5614 className="event-search-con">
                      <input
                        data-v-ce5b5614
                        type="text"
                        placeholder="search..."
                      />
                      <div data-v-ce5b5614 className="list-group es-content" />
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Womens Super Smash T20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Auckland Hearts Women v Central Hinds Women
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 15 5:10 AM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Womens Super Smash T20</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        International League T20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Abu Dhabi Knight Riders v Sharjah Warriors
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 15 8:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span data-v-ce5b5614 className="inplay-indicator" />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.86
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.87
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.14
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.16
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 50K</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>
                              International League T20
                            </span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 50K</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        SA20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Paarl Royals v MI Cape Town
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 15 9:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span data-v-ce5b5614 className="inplay-indicator" />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.52
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.56
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.64
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.65
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 100K</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>SA20</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 100K</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Jamaica T10
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Surrey Royals v Surrey Kings
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 15 9:30 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span data-v-ce5b5614 className="inplay-indicator" />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.06
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.95
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.99
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 5K</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Jamaica T10</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 5K</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Jamaica T10
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Cornwall Warriors v United Stars
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 12:00 AM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.56
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.81
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.22
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.8
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Jamaica T10</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Womens Super Smash T20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Otago Sparks Women v Northern Brave Women
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 5:10 AM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.78
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.94
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.06
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.3
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Womens Super Smash T20</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Super Smash T20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Otago Volts v Northern Brave
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 8:55 AM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.84
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.9
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.1
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.22
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Super Smash T20</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Bangladesh Premier League
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Fortune Barishal v Dhaka Capital
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 1:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.6
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.69
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.44
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.68
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>
                              Bangladesh Premier League
                            </span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Vijay Hazare Trophy
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Vidarbha v Maharashtra
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 1:30 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.41
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.8
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.24
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              3.45
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Vijay Hazare Trophy</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Twenty20 Big Bash
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Brisbane Heat v Hobart Hurricanes
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 2:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.81
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.82
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.2
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.24
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Twenty20 Big Bash</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Bangladesh Premier League
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Khulna Tigers v Chittagong Kings
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 6:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.04
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.36
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.74
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.96
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>
                              Bangladesh Premier League
                            </span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        International League T20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Desert Vipers v MI Emirates
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 8:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.81
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.34
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.75
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.22
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>
                              International League T20
                            </span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        SA20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Joburg Super Kings v Pretoria Capitals
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 16 9:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.74
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.98
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.02
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.36
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>SA20</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Womens One Day Internationals
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Australia Women v England Women
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 17 4:35 AM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.34
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.36
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              3.75
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              3.95
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>
                              Womens One Day Internationals
                            </span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Womens Super Smash T20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Central Hinds Women v Canterbury Magicians Women
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 17 6:40 AM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.88
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              3.4
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.42
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.14
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Womens Super Smash T20</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Test Matches
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Pakistan v West Indies
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 17 10:00 AM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.33
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.34
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              9.2
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              9.6
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              6.6
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              7
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>Test Matches</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        Bangladesh Premier League
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Durbar Rajshahi v Sylhet Strikers
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 17 1:30 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.81
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              7.4
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.4
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.22
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>
                              Bangladesh Premier League
                            </span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        SA20
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                Durban Super Giants v Sunrisers Eastern Cape
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 17 9:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.56
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.8
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>SA20</span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-ce5b5614 className="league_container">
                  <div data-v-ce5b5614 className="match_container">
                    <div
                      data-v-ce5b5614
                      className="border border-top-0 border-dark px-2"
                    >
                      <div
                        data-v-ce5b5614
                        className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                      >
                        International Twenty20 Matches
                      </div>
                      <div
                        data-v-ce5b5614
                        className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                      >
                        <div
                          data-v-ce5b5614
                          className="col-8 col-lg-3 col-xl-4 d-flex align-items-center gap-sm order-1 mb-1 mb-sm-2 cursor-pointer"
                        >
                          <div
                            data-v-ce5b5614
                            className="runner-name-date-container"
                          >
                            <div data-v-ce5b5614 className="runner-name-date">
                              <span data-v-ce5b5614 className="runners_name">
                                India v England
                              </span>
                              <span
                                data-v-ce5b5614
                                className="match_date_time d-block"
                              >
                                Jan 22 7:00 PM
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-3 pl-0 col-lg-2 col-xl-1 order-2 d-flex align-items-center gap-sm mb-1 mb-sm-2"
                        >
                          <span
                            data-v-ce5b5614
                            className="inplay-indicator hidden"
                          />
                          <i data-v-ce5b5614 className="fa fa-tv" />
                          <div
                            data-v-ce5b5614
                            className="d-flex align-items-center gap-sm"
                          >
                            <div data-v-ce5b5614 className="bet_count_block">
                              <span data-v-ce5b5614 className="bf-icon">
                                B
                              </span>
                            </div>
                            <div
                              data-v-ce5b5614
                              className="bet_count_block hidden"
                            >
                              <span data-v-ce5b5614 className="bf-icon">
                                F
                              </span>
                            </div>
                          </div>
                        </div>
                        {/**/}
                        <div
                          data-v-ce5b5614
                          className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                        >
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.75
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              1.79
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              -
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home back">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.26
                            </span>
                          </div>
                          <div data-v-ce5b5614 className="odd_blocks-home lay">
                            <span data-v-ce5b5614 className="price_odd_title">
                              2.34
                            </span>
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                        >
                          <div data-v-ce5b5614 className="d-none d-lg-flex">
                            <span data-v-ce5b5614 className="min_max_span">
                              Min : 100 |&nbsp;
                              <span data-v-ce5b5614> Max: 1</span>
                              {/**/}
                            </span>
                          </div>
                          <div data-v-ce5b5614>
                            <img
                              data-v-ce5b5614
                              src="assets/images/tick-outline.webp"
                              alt="Not Pinned"
                              className="img-pin"
                            />
                          </div>
                        </div>
                        <div
                          data-v-ce5b5614
                          className="d-flex d-lg-none justify-content-between col-12 order-5 font-size-12"
                        >
                          <div
                            data-v-ce5b5614
                            className="d-block mobile_league_name"
                          >
                            <span data-v-ce5b5614>
                              International Twenty20 Matches
                            </span>
                          </div>
                          <span
                            data-v-ce5b5614
                            className="min_max_span font-size-12"
                          >
                            Min : 100 |&nbsp;
                            <span data-v-ce5b5614> Max: 1</span>
                            {/**/}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**/}
            </div>
            <div
              data-v-ce5b5614
              id="rulesModal2"
              data-backdrop="static"
              data-keyboard="false"
              tabIndex={-1}
              aria-labelledby="rulesModalLabel"
              aria-hidden="true"
              className="modal fade"
            >
              <div
                data-v-ce5b5614
                className="modal-dialog modal-dialog-centered"
              >
                <div data-v-ce5b5614 className="modal-content">
                  <div data-v-ce5b5614 className="modal-header">
                    <h5
                      data-v-ce5b5614
                      id="rulesModalLabel"
                      className="modal-title text-dark"
                    >
                      Rules
                    </h5>
                    <button
                      data-v-ce5b5614
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                      className="close"
                    >
                      <span data-v-ce5b5614 aria-hidden="true">
                        ×
                      </span>
                    </button>
                  </div>
                  <div data-v-ce5b5614 className="modal-body">
                    {/**/}
                  </div>
                  <div data-v-ce5b5614 className="modal-footer">
                    <button
                      data-v-ce5b5614
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
                    src="assets/images/cricket"
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
      {/* End Google Tag Manager */}
      <div
        id="B2Wd7s9SU"
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
              name="a-8ilolrf66sn1"
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

export default Circket;
