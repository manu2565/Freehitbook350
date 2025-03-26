import React from "react";
import AHeader from "../AHeader";
import Marque from "../Marque";
import Afooter from "../Afooter";
import Playinggames from "../Playinggames";
import { Link } from "react-router-dom";

function Openbets() {
  return (
    <>
      <div data-v-cb9ac2ee className="page" style={{marginTop:"50px"}}>
        <div data-v-f4c3ad76 data-v-cb9ac2ee>
          <Marque />
          <Playinggames />
          {/**/}{" "}
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
                </button>{" "}
                <div
                  data-v-f4c3ad76
                  className="login-container my-auto p-3 px-md-0"
                >
                  <div
                    data-v-f4c3ad76
                    className="d-flex flex-column h-100 justify-content-center"
                  >
                    {/**/} <br data-v-f4c3ad76 />{" "}
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
                            {/**/}{" "}
                            <div className="form-group">
                              <input
                                type="text"
                                placeholder="Username"
                                className="form-control mb-2"
                              />
                            </div>{" "}
                            <div className="form-group">
                              <input
                                type="password"
                                placeholder="Password"
                                className="form-control mb-2"
                              />{" "}
                              <i
                                id="togglePassword"
                                className="bi bi-eye-slash"
                              />
                            </div>{" "}
                            <button
                              type="button"
                              title="Login"
                              className="align-self-center login-signup-button mb-3"
                            >
                              Login
                            </button>{" "}
                            <p className="text-center pt-2">
                              <Link
                                to=";"
                                id="submitDemoUserForm"
                                className="redirect-link-button text-white cursor-pointer"
                              >
                                Sign in with Demo User account? Click Here.
                              </Link>
                            </p>{" "}
                            <p className="text-center mb-2">
                              <Link className="redirect-link-button">
                                Don't have an account ?
                              </Link>{" "}
                              <Link
                                to="/android/freehit365.apk"
                                className="redirect-link-button pull-right"
                              >
                                DOWNLOAD APK
                              </Link>
                            </p>
                          </form>
                        </div>
                      </div>{" "}
                      {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            data-v-f4c3ad76
            id="mobile-sidenav"
            className="mobile_sidenav d-block d-lg-none p-2"
          >
            <div data-v-f4c3ad76 tabIndex={-1} className="sidenav-overlay" />{" "}
            <div data-v-f4c3ad76 className="d-flex mb-2 pl-2">
              <div
                data-v-f4c3ad76
                id="hamburger"
                className="hamburger is-active d-lg-none"
              >
                <span data-v-f4c3ad76 className="line" />{" "}
                <span data-v-f4c3ad76 className="line" />{" "}
                <span data-v-f4c3ad76 className="line" />
              </div>
            </div>{" "}
            <div data-v-f4c3ad76 className="d-flex">
              <div data-v-f4c3ad76 className="col-8">
                <p data-v-f4c3ad76 className="font-size-12">
                  demouser1 (user)
                </p>{" "}
                <span data-v-f4c3ad76 className="fs-10">
                  Last Login: Jan 19th 2025, 10:44:25 AM
                </span>
              </div>{" "}
              <div
                data-v-f4c3ad76
                className="col-4 d-flex justify-content-center align-items-center"
              >
                <Link data-v-f4c3ad76 title="Log Out" to="/home">
                  LOGOUT
                </Link>
              </div>
            </div>{" "}
            <hr data-v-f4c3ad76 className="border-white" />{" "}
            <div data-v-f4c3ad76 className="text-center">
              <h6 data-v-f4c3ad76>Accounts</h6>{" "}
              <ul data-v-f4c3ad76 className="d-flex flex-column mb-3">
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/my-market"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      storefront
                    </span>{" "}
                    <span data-v-f4c3ad76>My Market</span>
                  </Link>
                </li>{" "}
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/favourites"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      push_pin
                    </span>{" "}
                    <span data-v-f4c3ad76>Pinned</span>
                  </Link>
                </li>{" "}
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/open-bets"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      receipt_long
                    </span>{" "}
                    <span data-v-f4c3ad76>Statement</span>
                  </Link>
                </li>{" "}
                <li data-v-f4c3ad76>
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      military_tech
                    </span>{" "}
                    <span data-v-f4c3ad76>Winning</span>{" "}
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
                </li>{" "}
                <li data-v-f4c3ad76>
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      credit_score
                    </span>{" "}
                    <span data-v-f4c3ad76>Credit Reference</span>{" "}
                    <span data-v-f4c3ad76 className="ml-auto amount">
                      1,616.00
                    </span>
                  </div>
                </li>{" "}
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/profit-loss"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      exposure
                    </span>{" "}
                    <span data-v-f4c3ad76>Profit &amp; Loss</span>
                  </Link>
                </li>{" "}
                <li data-v-f4c3ad76 className="d-none mobile-show">
                  <Link
                    data-v-f4c3ad76
                    to="/chats"
                    className="nav-link-chat bell-btn mr-3 ml-3"
                  >
                    <span data-v-f4c3ad76 className="noti-count">
                      0
                    </span>{" "}
                    <i data-v-f4c3ad76 className="fas fa-comment chat-icon" />{" "}
                    <span data-v-f4c3ad76 className="ml-4">
                      Chat
                    </span>
                  </Link>
                </li>{" "}
                <li data-v-f4c3ad76 className="d-none mobile-show">
                  <button
                    data-v-f4c3ad76
                    data-toggle="modal"
                    data-target="#infoModal"
                    className="bg-transparent bell-btn ml-3"
                  >
                    <span data-v-f4c3ad76 className="noti-count">
                      0
                    </span>{" "}
                    <i data-v-f4c3ad76 className="fas fa-bell fa-lg" />{" "}
                    <span data-v-f4c3ad76 className="ml-4">
                      Notification
                    </span>
                  </button>
                </li>
              </ul>
            </div>{" "}
            <hr data-v-f4c3ad76 className="border-white" />{" "}
            <div data-v-f4c3ad76 className="text-center">
              <h6 data-v-f4c3ad76>Reports</h6>{" "}
              <ul data-v-f4c3ad76 className="d-flex flex-column mb-3">
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/open-bets"
                    className="mobile_sidenav_links"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      menu_open
                    </span>{" "}
                    <span data-v-f4c3ad76>Open Bets</span>
                  </Link>
                </li>{" "}
                <li data-v-f4c3ad76>
                  <Link
                    data-v-f4c3ad76
                    to="/settled-bets"
                    aria-current="page"
                    className="mobile_sidenav_links py-1 ex-active active"
                  >
                    <span data-v-f4c3ad76 className="material-icons">
                      work
                    </span>{" "}
                    <span data-v-f4c3ad76>Settled Bets</span>
                  </Link>
                </li>{" "}
                <li data-v-f4c3ad76>
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      password
                    </span>{" "}
                    <span data-v-f4c3ad76>Change Password</span>
                  </div>
                </li>{" "}
                <li
                  data-v-f4c3ad76
                  data-toggle="modal"
                  data-target="#rulesModal"
                >
                  <div data-v-f4c3ad76 className="mobile_sidenav_links">
                    <span data-v-f4c3ad76 className="material-icons">
                      grading
                    </span>{" "}
                    <span data-v-f4c3ad76>Rules</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>{" "}
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
                  </h6>{" "}
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
                </div>{" "}
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
                    />{" "}
                    {/**/}{" "}
                    <input
                      data-v-f4c3ad76
                      type="password"
                      placeholder="New Password"
                      className="mb-3 w-100"
                    />{" "}
                    {/**/}{" "}
                    <input
                      data-v-f4c3ad76
                      type="password"
                      placeholder="Confirm New Password"
                      className="mb-3 w-100"
                    />{" "}
                    {/**/}{" "}
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
          </div>{" "}
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
                </div>{" "}
                <div
                  data-v-f4c3ad76
                  className="modal-body p-0 empty-notification"
                >
                  {" "}
                  <div data-v-f4c3ad76 className="border-bottom">
                    No notification found!
                  </div>
                </div>{" "}
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
          </div>{" "}
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
                  </h6>{" "}
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
                </div>{" "}
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
                        Kabaddi{" "}
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
                    </li>{" "}
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id="Matka"
                        className="rt-link"
                      >
                        Matka
                      </Link>
                    </li>{" "}
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link
                        data-v-f4c3ad76
                        to=";"
                        id="Indian-Casino"
                        className="rt-link"
                      >
                        Indian Casino
                      </Link>
                    </li>{" "}
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
                  </ul>{" "}
                  <div data-v-f4c3ad76 id="rules_des" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          data-v-cb9ac2ee
          className="position-relative main-container-user inplay_container"
        >
          <div data-v-0d0025fe data-v-cb9ac2ee className="inplay_container">
            <ul
              data-v-14475de2
              data-v-0d0025fe
              id="pills-tab"
              role="tablist"
              className="nav nav-pills topbar"
            >
              <li data-v-14475de2 role="presentation" className="nav-item">
                <Link data-v-14475de2 to="/open-bets" className="nav-link">
                  Open Bets
                </Link>
              </li>{" "}
              <li data-v-14475de2 role="presentation" className="nav-item">
                <Link
                  data-v-14475de2
                  to="/open-bets"
                  aria-current="page"
                  className="nav-link ex-active active"
                >
                  Settled Bets
                </Link>
              </li>{" "}
              <li data-v-14475de2 role="presentation" className="nav-item">
                <Link data-v-14475de2 to="/open-bets" className="nav-link">
                  Statement
                </Link>
              </li>{" "}
              <li data-v-14475de2 role="presentation" className="nav-item">
                <Link data-v-14475de2 to="/open-bets" className="nav-link">
                  Profit &amp; Loss
                </Link>
              </li>
            </ul>{" "}
            <div data-v-0d0025fe className="b-shadow">
              <form
                data-v-0d0025fe
                autoComplete="off"
                className="accounts_form p-2"
              >
                <div data-v-0d0025fe className="row justify-content-between">
                  <div
                    data-v-0d0025fe
                    className="col-4 col-xl d-flex justify-content-sm-center"
                  >
                    <div data-v-0d0025fe className="form-group">
                      <label data-v-0d0025fe htmlFor="settled-select-bet-type">
                        Bet Type
                      </label>{" "}
                      <select
                        data-v-0d0025fe
                        id="settled-select-bet-type"
                        className="form-control form-control-sm"
                      >
                        <option data-v-0d0025fe value={2}>
                          Settled
                        </option>
                        <option data-v-0d0025fe value={4}>
                          Void
                        </option>
                        <option data-v-0d0025fe value={5}>
                          Invalid
                        </option>
                      </select>
                    </div>
                  </div>{" "}
                  <div
                    data-v-0d0025fe
                    className="col-4 col-xl d-flex justify-content-sm-center"
                  >
                    <div data-v-0d0025fe className="form-group">
                      <label data-v-0d0025fe htmlFor="settled-select-type">
                        Select Type
                      </label>{" "}
                      <select
                        data-v-0d0025fe
                        id="settled-select-type"
                        className="form-control form-control-sm"
                      >
                        <option data-v-0d0025fe value={1}>
                          Sports
                        </option>
                        <option data-v-0d0025fe value={2}>
                          Games
                        </option>
                      </select>
                    </div>
                  </div>{" "}
                  <div
                    data-v-0d0025fe
                    className="col-4 col-xl d-flex justify-content-sm-center"
                  >
                    <div data-v-0d0025fe className="form-group">
                      <label data-v-0d0025fe htmlFor="settled-subtype">
                        Select Subtype
                      </label>{" "}
                      <select
                        data-v-0d0025fe
                        id="settled-subtype"
                        className="form-control form-control-sm"
                      >
                        <option data-v-0d0025fe value="all">
                          All
                        </option>{" "}
                        <option data-v-0d0025fe value={1000}>
                          Virtual Sports
                        </option>
                        <option data-v-0d0025fe value={4}>
                          cricket
                        </option>
                        <option data-v-0d0025fe value={2}>
                          tennis
                        </option>
                        <option data-v-0d0025fe value={1}>
                          soccer
                        </option>
                        <option data-v-0d0025fe value={519}>
                          FIFA CUP WINNER
                        </option>
                        <option data-v-0d0025fe value={522}>
                          WINNER CUP
                        </option>
                        <option data-v-0d0025fe value={523}>
                          ELECTION
                        </option>
                        <option data-v-0d0025fe value={4345}>
                          ELECTION
                        </option>
                        <option data-v-0d0025fe value={4344}>
                          WINNER CUP
                        </option>
                        <option data-v-0d0025fe value={6422}>
                          Snooker
                        </option>
                        <option data-v-0d0025fe value={6423}>
                          American Football
                        </option>
                        <option data-v-0d0025fe value={7511}>
                          Baseball
                        </option>
                        <option data-v-0d0025fe value={7522}>
                          Basketball
                        </option>
                        <option data-v-0d0025fe value={7524}>
                          Ice Hockey
                        </option>
                        <option data-v-0d0025fe value={61420}>
                          Australian Rules
                        </option>
                        <option data-v-0d0025fe value={468328}>
                          Handball
                        </option>
                        <option data-v-0d0025fe value={998917}>
                          Volleyball
                        </option>
                        <option data-v-0d0025fe value={2152880}>
                          Gaelic Games
                        </option>
                        <option data-v-0d0025fe value={26420387}>
                          Mixed Martial Arts
                        </option>
                        <option data-v-0d0025fe value={27454571}>
                          Esports
                        </option>
                        <option data-v-0d0025fe value={27454572}>
                          Kabaddi{" "}
                        </option>
                        <option data-v-0d0025fe value={4343}>
                          FIFA CUP WINNER
                        </option>
                      </select>
                    </div>
                  </div>{" "}
                  <div
                    data-v-0d0025fe
                    className="col-6 col-md-4 col-xl d-flex justify-content-sm-center"
                  >
                    <div data-v-0d0025fe className="form-group">
                      <label data-v-0d0025fe htmlFor="settled-from">
                        From
                      </label>{" "}
                      <span data-v-0d0025fe title-position="left">
                        <input
                          data-v-0d0025fe
                          className="bg-white border px-2 py-1 rounded"
                        />
                        <div
                          data-v-39b30300
                          className="vc-popover-content-wrapper"
                        >
                          {/**/}
                        </div>
                      </span>
                    </div>
                  </div>{" "}
                  <div
                    data-v-0d0025fe
                    className="col-6 col-md-4 col-xl d-flex justify-content-sm-center"
                  >
                    <div data-v-0d0025fe className="form-group">
                      <label data-v-0d0025fe htmlFor="settled-to">
                        To
                      </label>{" "}
                      <span data-v-0d0025fe title-position="left">
                        <input
                          data-v-0d0025fe
                          className="bg-white border px-2 py-1 rounded"
                        />
                        <div
                          data-v-39b30300
                          className="vc-popover-content-wrapper is-interactive"
                          style={{ margin: "0px" }}
                        >
                          {/**/}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>{" "}
                <div
                  data-v-0d0025fe
                  className="d-flex gap-sm mt-2 justify-content-between justify-content-sm-center align-items-center mb-3"
                >
                  <input
                    data-v-0d0025fe
                    type="text"
                    id="settled-search"
                    placeholder="Search"
                    className="form-control form-control-sm"
                  />{" "}
                  <button
                    data-v-0d0025fe
                    type="button"
                    className="form_submit_button"
                  >
                    Submit
                  </button>{" "}
                  <i data-v-0d0025fe className="fas fa-file-excel fa-2x" />{" "}
                  <i data-v-0d0025fe className="fas fa-file-pdf fa-2x" />
                </div>
              </form>{" "}
              <div data-v-0d0025fe id="my_bets" className="table_container">
                <table data-v-0d0025fe className="table">
                  <thead data-v-0d0025fe>
                    <tr data-v-0d0025fe>
                      <th data-v-0d0025fe scope="col">
                        #
                      </th>{" "}
                      <th data-v-0d0025fe scope="col">
                        Event/Selection
                      </th>{" "}
                      <th data-v-0d0025fe scope="col">
                        Odds/Rate
                      </th>{" "}
                      <th data-v-0d0025fe scope="col">
                        Stake
                      </th>{" "}
                      <th data-v-0d0025fe scope="col">
                        Date
                      </th>{" "}
                      <th data-v-0d0025fe scope="col">
                        Profit/Loss
                      </th>{" "}
                      <th data-v-0d0025fe scope="col">
                        Commission
                      </th>{" "}
                      <th
                        data-v-0d0025fe
                        scope="col"
                        className="white-space-nowrap"
                      >
                        Total P&amp;L
                      </th>{" "}
                      <th data-v-0d0025fe scope="col">
                        Status
                      </th>{" "}
                      {/**/}
                    </tr>
                  </thead>{" "}
                  <tbody data-v-0d0025fe>
                    {" "}
                    <tr data-v-0d0025fe className="text-center">
                      <td data-v-0d0025fe colSpan={11}>
                        No Records Found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>{" "}
              <nav
                data-v-0d0025fe
                className="d-flex flex-wrap justify-content-center align-items-center mt-3 mb-1"
              >
                <ul
                  data-v-82963a40
                  data-v-0d0025fe
                  className="pagination pagination-sm justify-content-center mb-2 mr-4"
                >
                  {/**/}{" "}
                  <li data-v-82963a40 className="disabled">
                    <Link data-v-82963a40 tabIndex={-1}>
                      Prev
                    </Link>
                  </li>{" "}
                  <li data-v-82963a40 className="disabled">
                    <Link data-v-82963a40 tabIndex={-1}>
                      Next
                    </Link>
                  </li>{" "}
                  {/**/}
                </ul>{" "}
                <div
                  data-v-0d0025fe
                  className="d-flex justify-content-center align-items-center"
                >
                  <div data-v-0d0025fe className="entries_select_container">
                    <span data-v-0d0025fe>show</span>{" "}
                    <select data-v-0d0025fe name id className="entries_select">
                      <option data-v-0d0025fe value={25}>
                        25
                      </option>{" "}
                      <option data-v-0d0025fe value={50}>
                        50
                      </option>{" "}
                      <option data-v-0d0025fe value={100}>
                        100
                      </option>
                    </select>{" "}
                    <span data-v-0d0025fe>entries</span>
                  </div>
                </div>
              </nav>
            </div>
          </div>{" "}
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
                </div>{" "}
                <div data-v-cb9ac2ee className="modal-body">
                  <img
                    data-v-cb9ac2ee
                    src="#"
                    alt=""
                    className="login-first-image w-100"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div data-v-687fd205 data-v-cb9ac2ee>
            <div data-v-687fd205 className="game_lobby_iframe">
              <span data-v-687fd205 className="lobby-iframe-close-icon">
                <img data-v-687fd205 src="/images/cross-icon.webp" />
              </span>{" "}
              <iframe data-v-687fd205 />
            </div>{" "}
            <Afooter />
          </div>{" "}
          {/**/}
        </div>{" "}
        {/**/}{" "}
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
                </h5>{" "}
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
              </div>{" "}
              <div data-v-cb9ac2ee className="modal-body">
                <ul data-v-cb9ac2ee className="issues-list" />
              </div>
            </div>
          </div>
        </div>{" "}
        <button
          data-v-cb9ac2ee
          data-bs-toggle="modal"
          data-bs-target="#notification-alert"
        />{" "}
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
                      src="images/notification-alert.svg"
                      alt=""
                    />
                  </div>{" "}
                  <div data-v-cb9ac2ee className="notify-theme-info">
                    <h3 data-v-cb9ac2ee>Turn on the Notifications</h3>{" "}
                    <div data-v-cb9ac2ee className="notify-justify-btn">
                      <button
                        data-v-cb9ac2ee
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        className="btn cancel-but"
                      >
                        Cancel
                      </button>{" "}
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
    </>
  );
}

export default Openbets;
