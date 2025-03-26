import React from "react";
import { Link } from "react-router-dom";

function Recomanded() {
  return <div id="root">
  <div>
    <div className="MainLayout">
      <header className="quiz-header-wrapper ">
        <div className="container">
          <div className="quiz-header-sec">
            <div className="quiz-header-left-sec">
              <div className="quiz-heading text-white">Quiz
                Fight</div>
            </div>
            <div className="quiz-header-right-sec">
              <div className="quiz-bal-btn" id="wallet">
                <p>
                  <span>Bal : </span> <span
                    id="wallet-balance">0.02</span>
                </p>
                <div className="coin">
                  <img
                    src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                    alt="Dollar Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="AppContent">
        <section
          className="quiz-tabs-wrapper pd-footer quiz-home-wrapper">
          <div className="quiz-tabs-sec">
            <nav>
              <div className="nav nav-tabs" id="nav-tab"
                role="tablist">
                <button
                  className="nav-link active quiz-sport-bg"
                  id="nav-0-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-0"
                  type="button"
                  role="tab"
                  aria-controls="nav-0"
                  aria-selected="true">
                  Sports <span className="quiz-badge">10</span>
                </button>
              </div>
            </nav>
            <div className="container">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-sports"
                  role="tabpanel"
                  aria-labelledby="nav-sports-tab">
                  <div className="quiz-flex-bt">
                    <p className="quiz-heading">Recommended</p>
                    <Link
                      className="quiz-filter-btn  "
                      data-bs-toggle="modal"
                      data-bs-target="#filterModal">
                      <img
                        src="https://www.ludofun777.in/assets/quiz-sort.svg" />
                      Filters
                    </Link>
                    <div
                      className="quiz-modal modal fade show "
                      id="filterModal"
                      tabIndex={-1}
                      aria-labelledby="filterModalLabel"
                      aria-hidden="true">
                      <div
                        className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title">Filters</h5>
                            <button
                              type="button"
                              className="quiz-close-modal"
                              data-bs-dismiss="modal"
                              aria-label="Close">
                              <img
                                src="https://www.ludofun777.in/assets/quiz-close-square.svg"
                                alt="Close" />
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul
                              className="quiz-filter-sports-list sports-filter-list">
                              <li className>
                                <button
                                  type="button"
                                  className="sports-filter-btn">
                                  2
                                </button>
                              </li>
                              <li className>
                                <button
                                  type="button"
                                  className="sports-filter-btn">
                                  1
                                </button>
                              </li>
                              <li className>
                                <button
                                  type="button"
                                  className="sports-filter-btn">
                                  BAT
                                </button>
                              </li>
                              <li className>
                                <button
                                  type="button"
                                  className="sports-filter-btn">
                                  BALL
                                </button>
                              </li>
                              <li className>
                                <button
                                  type="button"
                                  className="sports-filter-btn">
                                  Women
                                </button>
                              </li>
                              <li className>
                                <button
                                  type="button"
                                  className="sports-filter-btn">
                                  Men
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="modal-footer justify-content-center">
                            <button
                              type="button"
                              className="btn btn-secondary quiz-theme-bdr-btn"
                              data-bs-dismiss="modal">
                              Clear
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary quiz-theme-btn">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quiz-accordion-wrapper">
                    <div className="accordion"
                      id="accordionExample">
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 32M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              Who will win the toss in India Vs
                              England? (3rd
                              T20 28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    India
                                  </span>
                                  <span
                                    className="quiz-sm-text">
                                    Total lots: 5
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    England
                                  </span>
                                  <span
                                    className="quiz-sm-text">
                                    Total lots: 3
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  1
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 8
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 33M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              How will be the gone 3rd wicket in
                              first innings
                              of a match India Vs England? (3rd
                              T20
                              28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Run-Out
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">LBW</span>
                                  <span
                                    className="quiz-sm-text">
                                    Total lots: 1
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>C</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Caught Out
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>D</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Bowled
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>E</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Stumped
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  1
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 1
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 34M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              How many runs Suryakumar Yadav
                              will score in a
                              match India Vs England? (3rd T20
                              28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    {" "}
                                    0 - 10
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    11 - 25
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>C</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    26 - 40
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>D</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    None of above
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 0
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 35M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              Which team will score highest
                              opening
                              partnership runs in a match India
                              Vs England?
                              (3rd T20 28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">IND</span>
                                  <span
                                    className="quiz-sm-text">
                                    Total lots: 1
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">ENG</span>
                                  <span
                                    className="quiz-sm-text">
                                    Total lots: 1
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 2
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 36M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              How many wickets will fall at the
                              end of 20
                              overs in 1st innings of a match
                              India Vs
                              England? (3rd T20 28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    0 - 3
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    4 - 7
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>C</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    8 - 10
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 0
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 37M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              Which team will score more in 6
                              overs of their
                              innings in a match India Vs
                              England? (3rd T20
                              28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">IND</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">ENG</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>C</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">TIE</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 0
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 38M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              Which team will score more
                              “Boundaries” in a
                              match India Vs England? (3rd T20
                              28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">IND</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">ENG</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>C</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">TIE</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 0
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 39M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              {" "}
                              Who will be the highest wicket
                              taker in a match
                              India Vs England?(3rd T20
                              28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Arshdeep Singh
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Adil Rashid
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>C</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Mohammed Shami
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>D</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    Mark Wood
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>E</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">
                                    None of above
                                  </span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 0
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 40M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              Which team will win “Man of the
                              match” award in
                              India Vs England? (3rd T20
                              28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">IND</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">ENG</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 0
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item ">
                        <h2
                          className="accordion-header active"
                          id="heading-undefined">
                          <div className="quiz-que-head">
                            <p className="quiz-lot-price">Lot
                              price:- 100</p>
                            <span className="quiz-que-time ">
                              Close Time:- 5H : 41M : 11S
                            </span>
                            <div
                              className="quiz-live-sec active">
                              <span
                                className="quiz-live-dot active" />
                              <span>LIVE</span>
                            </div>
                          </div>
                          <div
                            className="accordion-button-container">
                            <button
                              className="accordion-button w-100 "
                              type="button"
                              aria-expanded="true"
                              aria-controls="collapse-undefined">
                              {" "}
                              Who will win the match in India Vs
                              England? (3rd
                              T20 28/01/2025)
                            </button>
                            <div
                              className="expand-sign-container justify-content-end">
                              <div className="expand-sign">
                                <img
                                  src="https://www.ludofun777.in/assets/quiz-minus.svg"
                                  alt="sign" />
                              </div>
                            </div>
                          </div>
                        </h2>
                        <div
                          id="collapse-undefined"
                          className="accordion-collapse collapse show"
                          aria-labelledby="heading-undefined"
                          data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <ul
                              className="quiz-select-ans-list">
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>A</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">IND</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                              <li className="debit-btn  ">
                                <div
                                  className="quiz-select-ans-sr">
                                  <span>B</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content">
                                  <span
                                    className="quiz-theme-text">ENG</span>
                                </div>
                                <div
                                  className="quiz-select-ans-content quiz-dlr-price-sec">
                                  <span
                                    className="quiz-theme-text">
                                    <div className="pot"
                                      id="debit-pot">
                                      <div
                                        className="coin coin-animation">
                                        <img
                                          src="https://www.ludofun777.in/assets/quiz-dollar.svg"
                                          alt="coin" />
                                      </div>
                                    </div>
                                    <div
                                      className="coin-animaction">
                                      <img
                                        className="coinImg"
                                        src="https://www.ludofun777.in/assets/quiz-coin.svg"
                                        alt="coin" />
                                      <span
                                        className="debit-amount">0</span>
                                    </div>
                                    <span
                                      className="quiz-sm-text">
                                      Your lots : 0
                                    </span>
                                  </span>
                                </div>
                              </li>
                            </ul>
                            <ul className="quiz-like-btn-list">
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-green like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-up.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle one-i1-color" />
                                      <div
                                        className="particle one-i2-color" />
                                      <div
                                        className="particle one-i3-color" />
                                      <div
                                        className="particle one-i4-color" />
                                      <div
                                        className="particle one-i5-color" />
                                      <div
                                        className="particle one-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="#"
                                  className="quiz-like-btn light-red like-button ">
                                  <div
                                    className="like-wrapper ">
                                    <img
                                      className="thumbs-up"
                                      src="https://www.ludofun777.in/assets/thumbs-down.svg"
                                      alt />
                                    <div
                                      className="particles tp-6">
                                      <div
                                        className="particle two-i1-color" />
                                      <div
                                        className="particle two-i2-color" />
                                      <div
                                        className="particle two-i3-color" />
                                      <div
                                        className="particle two-i4-color" />
                                      <div
                                        className="particle two-i5-color" />
                                      <div
                                        className="particle two-i6-color" />
                                    </div>
                                  </div>
                                  0
                                </Link>
                              </li>
                              <li>
                                <div
                                  className="quiz-like-btn light-gray">
                                  Total Lots : 0
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="quiz-count-select-wrapper quiz-space"
              draggable="false"
              style={{ zIndex: 2, userSelect: "none",
              touchAction: "pan-x" }}>
              <div>
                <div className="quiz-count-select-sec">
                  <div className="quiz-count-select-btn ">
                    <div className="quiz-count-select-item">
                      <div className="select-item-img">
                        <img
                          src="https://www.ludofun777.in/assets/10x.svg"
                          alt="Quiz Coin"
                          className="quiz-circle-img" />
                        <span
                          className="select-item-con">10X</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="quiz-dark-modal quiz-count-select-content-wrapper "
                    style={{ opacity: 0, height: 0 }}>
                    <div
                      className="quiz-count-select-content-header">
                      <h5
                        className="quiz-count-select-content-title text-start">
                        Select lots Counts{" "}
                      </h5>
                    </div>
                    <div
                      className="quiz-count-select-content-body">
                      <ul className="quiz-count-select-list">
                        <li className>
                          <img
                            src="https://www.ludofun777.in/assets/1x.svg"
                            alt={1} />
                          <span>1x</span>
                        </li>
                        <li className>
                          <img
                            src="https://www.ludofun777.in/assets/5x.svg"
                            alt={5} />
                          <span>5x</span>
                        </li>
                        <li className="active">
                          <img
                            src="https://www.ludofun777.in/assets/10x.svg"
                            alt={10} />
                          <span>10x</span>
                        </li>
                        <li className>
                          <img
                            src="https://www.ludofun777.in/assets/25x.svg"
                            alt={25} />
                          <span>25x</span>
                        </li>
                        <li className>
                          <img
                            src="https://www.ludofun777.in/assets/50x.svg"
                            alt={50} />
                          <span>50x</span>
                        </li>
                        <li className>
                          <img
                            src="https://www.ludofun777.in/assets/75x.svg"
                            alt={75} />
                          <span>75x</span>
                        </li>
                        <li className>
                          <img
                            src="https://www.ludofun777.in/assets/100x.svg"
                            alt={100} />
                          <span>100x</span>
                        </li>
                        <li className>
                          <img
                            src="https://www.ludofun777.in/assets/500x.svg"
                            alt={500} />
                          <span>500x</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: 1 }} />
          </div>
        </section>
      </div>
      <footer className="quiz-footer">
        <ul>
          <li className="active">
            <Link
              to="/?q=57159274ed6655cf9acecf5ac1d0cedd41938eab0f533d87b5010e57563ed6d77f565e3600c22407e504846ac54b088c6675dce57fa6678648fc83fe3062564448e2922a61b3db9915e8e45679f2c452387b60594e61c40d68aef90b111b5fe45c317b225f9d1d22921fac8f1c2aeff443414248e3fb70435f57192c306840dfc6c388e40733213bd11cb593ed28cc569459547718410b22bfdec99cc8b7a153841712d886e9ef6668f46a72da345e2763cd93ffe23bf045470e41d728e3150008ffd773079f3069c3409294e65ca8cb11f15727fba8c592f74bbf78c2cc0392eb457cf7f0335ee309684e61c049d8d8ff5719192036af81de543ae3886e1860741b56022722e5eebb9e021f863531d1e21c1e9a3c7d74c457fd0d936658853d8b7c9cad9aba1c6709e37294352e2b8a783a6797496ccfbb05df94d8f5974e952a77c469c8bb95b1bcfb2fad34e36e63a0a75dd44ccd5ab7538682b46b601e67f326d62f87c09d74765b341e535d0ce9537f05bb2511f28d39479672aafcc62a">
              <div className="footer-icon">
                <img
                  src="https://www.ludofun777.in/assets/quiz-home.svg"
                  alt="Home" />
              </div>
              <span>HOME</span>
            </Link>
          </li>
          <li className>
            <Link to="/my-quiz">
              <div className="footer-icon">
                <img
                  src="https://www.ludofun777.in/assets/quiz.svg"
                  alt="My Quiz" />
              </div>
              <span>My QUIZ</span>
            </Link>
          </li>
          <li className>
            <Link to="/quiz-history">
              <div className="footer-icon">
                <img
                  src="https://www.ludofun777.in/assets/quiz-history.svg"
                  alt="History" />
              </div>
              <span>History</span>
            </Link>
          </li>
          <li className="profile-tab">
            <div className="footer-icon">
              <img
                src="https://www.ludofun777.in/assets/quiz-profile-user.svg"
                alt="Profile" />
            </div>
            <span>Profile</span>
          </li>
        </ul>
      </footer>
    </div>
  </div>
  <div className="Toastify" />
</div>;
}

export default Recomanded;
