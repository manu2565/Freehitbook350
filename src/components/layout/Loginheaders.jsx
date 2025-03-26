import React,{useEffect} from "react";


import Marque from "./AfterloginHeader/Marque";
import Playinggames from "./AfterloginHeader/Playinggames";
import Allplaycards from "./AfterloginHeader/Allplaycards";
import { Link } from "react-router-dom";

const Loginheaders = () => {
  useEffect(() => {
    // Make sure the modal is available after the page load
    const modal = document.getElementById('notification-alert');
    if (window.bootstrap && window.bootstrap.Modal) {
      const modalInstance = new window.bootstrap.Modal(modal);
      modalInstance.show();
    }
  }, []);

  const handleClose = () => {
    const modal = document.getElementById('notification-alert');
    if (window.bootstrap && window.bootstrap.Modal) {
      const modalInstance = new window.bootstrap.Modal(modal);
      modalInstance.hide(); // Manually hide the modal
    }
  };
  return (
    <>
      <div data-v-cb9ac2ee className="page">
        <div data-v-cb9ac2ee style={{ marginTop: "50px" }}>
          <Marque />
          <Playinggames />

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
                    to="/matka-market"
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
                  
                    <input
                      data-v-f4c3ad76
                      type="password"
                      placeholder="New Password"
                      className="mb-3 w-100"
                    />
                  
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
            className="modal fade"
            aria-hidden="true"
            style={{ display: "none" }}
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
                      <Link data-v-f4c3ad76 to=";" id={7} className="rt-link">
                        Virtual Sports
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={3} className="rt-link">
                        cricket
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={2} className="rt-link">
                        tennis
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={1} className="rt-link">
                        soccer
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={40} className="rt-link">
                        FIFA CUP WINNER
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={41} className="rt-link">
                        WINNER CUP
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={44} className="rt-link">
                        ELECTION
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={48} className="rt-link">
                        ELECTION
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={51} className="rt-link">
                        WINNER CUP
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={52} className="rt-link">
                        Snooker
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={53} className="rt-link">
                        American Football
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={54} className="rt-link">
                        Baseball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={55} className="rt-link">
                        Basketball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={56} className="rt-link">
                        Ice Hockey
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={57} className="rt-link">
                        Australian Rules
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={58} className="rt-link">
                        Handball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={59} className="rt-link">
                        Volleyball
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={60} className="rt-link">
                        Gaelic Games
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={62} className="rt-link">
                        Mixed Martial Arts
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={63} className="rt-link">
                        Esports
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={256} className="rt-link">
                        Kabaddi
                      </Link>
                    </li>
                    <li data-v-f4c3ad76 className="rt-item">
                      <Link data-v-f4c3ad76 to=";" id={267} className="rt-link">
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
        <Allplaycards />
        {/**/}
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
                    onClick={handleClose} // Handle close manually
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
    </>
  );
};

export default Loginheaders;
