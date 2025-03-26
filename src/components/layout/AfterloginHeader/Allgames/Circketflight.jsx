import React from "react";
import Slider from "./Slider";
import Marque from "../Marque";
import Playinggames from "../Playinggames";
import { Link } from "react-router-dom";

function Circketflight() {
  return (
    <>
    <div style={{marginTop:"50px"}}>
    <Marque />
   
    <Playinggames/>
    </div>
    <section
      data-v-4a078946
      data-v-cb9ac2ee
      className="team-vs-play cricket-fight_body_bg pt-2"
    >
      <div data-v-4a078946 className="container">
        <div data-v-4a078946 className="menu-nav flex-between">
          <div data-v-4a078946 className="menu-nav_left">
            <Link
              data-v-4a078946
              to=""
              className="cricket_btn"
            >
              <span data-v-4a078946>My Contests</span>
            </Link>
          </div>
          <div data-v-4a078946 className="menu-nav_right flex-box">
            <button
              data-v-4a078946
              data-toggle="modal"
              data-target="#ruleModal"
              className="rules_modal"
            >
              <img data-v-4a078946 src="assets/images/rule.svg" alt="" />
            </button>
            <button
              data-v-4a078946
              data-toggle="modal"
              data-target="#howplayModal"
              className="cricket_btn how_to_play"
            >
              How to play
            </button>
          </div>
        </div>
        <div data-v-4a078946 className="team_match_list">
          <div data-v-4a078946 className="cricket-fight-slider">
            <div
              data-v-3d1a4f76
              data-v-4a078946
              dir="ltr"
              className="owl-carousel owl-theme slick-slider slick-initialized"
            >
              <button
                data-v-21137603
                data-v-3d1a4f76
                type="button"
                data-role="none"
                className="slick-arrow slick-prev"
                style={{ display: "block" }}
              >
                Previous
              </button>
              <Slider />
              <button
                data-v-21137603
                data-v-3d1a4f76
                type="button"
                data-role="none"
                className="slick-arrow slick-next"
                style={{ display: "block" }}
              >
                Next
              </button>
            </div>
          </div>
          <div data-v-4a078946 className="match_event">
            <div
              data-v-4a078946
              data-toggle="modal"
              data-target="#matchReminderModal"
              className="set_reminder"
            >
              <img data-v-4a078946 src="assets/images/reminder.svg" alt="" />
            </div>
            <Link
              data-v-4a078946
              to=";"
              className="cricket_list_wrapper"
            >
              <div data-v-4a078946 className="event_name">
                <h2 data-v-4a078946>Bangladesh Premier League</h2>
              </div>
              <div data-v-4a078946 className="match-team flex-between">
                <div data-v-4a078946 className="match-team_a team_align">
                  <figure data-v-4a078946 className="team-img">
                    <img
                      data-v-4a078946
                      src="assets/images/1706180634.jpg"
                      alt=""
                    />
                  </figure>
                  <span data-v-4a078946>Fortune Barishal</span>
                </div>
                <div data-v-4a078946 className="match-team_b team_align">
                  <span data-v-4a078946>Dhaka Capitals</span>
                  <figure data-v-4a078946 className="team-img">
                    <img
                      data-v-4a078946
                      src="assets/images/1735722859.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div data-v-4a078946 className="match_start_timeline">
                <span data-v-4a078946>Jan 16 2025, 1:00 PM</span>
              </div>
            </Link>
          </div>
          <div data-v-4a078946 className="match_event">
            <div
              data-v-4a078946
              data-toggle="modal"
              data-target="#matchReminderModal"
              className="set_reminder"
            >
              <img data-v-4a078946 src="assets/images/reminder.svg" alt="" />
            </div>
            <Link
              data-v-4a078946
              to=";"
              className="cricket_list_wrapper"
            >
              <div data-v-4a078946 className="event_name">
                <h2 data-v-4a078946>Bangladesh Premier League</h2>
              </div>
              <div data-v-4a078946 className="match-team flex-between">
                <div data-v-4a078946 className="match-team_a team_align">
                  <figure data-v-4a078946 className="team-img">
                    <img
                      data-v-4a078946
                      src="assets/images/1706180594.jpg"
                      alt=""
                    />
                  </figure>
                  <span data-v-4a078946>Khulna Tigers</span>
                </div>
                <div data-v-4a078946 className="match-team_b team_align">
                  <span data-v-4a078946>Chittagong Kings</span>
                  <figure data-v-4a078946 className="team-img">
                    <img
                      data-v-4a078946
                      src="assets/images/1735848680.png"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div data-v-4a078946 className="match_start_timeline">
                <span data-v-4a078946>Jan 16 2025, 6:00 PM</span>
              </div>
            </Link>
          </div>
          <div data-v-4a078946 className="match_event">
            <div
              data-v-4a078946
              data-toggle="modal"
              data-target="#matchReminderModal"
              className="set_reminder"
            >
              <img data-v-4a078946 src="assets/images/reminder.svg" alt="" />
            </div>
            <Link
              data-v-4a078946
              to=";"
              className="cricket_list_wrapper"
            >
              <div data-v-4a078946 className="event_name">
                <h2 data-v-4a078946>International League T20</h2>
              </div>
              <div data-v-4a078946 className="match-team flex-between">
                <div data-v-4a078946 className="match-team_a team_align">
                  <figure data-v-4a078946 className="team-img">
                    <img
                      data-v-4a078946
                      src="assets/images/1706168128.jpg"
                      alt=""
                    />
                  </figure>
                  <span data-v-4a078946>Desert Vipers</span>
                </div>
                <div data-v-4a078946 className="match-team_b team_align">
                  <span data-v-4a078946>Mi Emirates</span>
                  <figure data-v-4a078946 className="team-img">
                    <img
                      data-v-4a078946
                      src="assets/images/1706168122.jpg"
                      alt=""
                    />
                  </figure>
                </div>
              </div>
              <div data-v-4a078946 className="match_start_timeline">
                <span data-v-4a078946>Jan 16 2025, 8:00 PM</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        data-v-a4e2de58
        data-v-4a078946
        id="matchReminderModal"
        data-backdrop="static"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
        className="modal fade"
      >
        <div
          data-v-a4e2de58
          className="modal-dialog modal-dialog-centered loginModal-sec registerModal-sec filter-sec b_fix"
        >
          <div data-v-a4e2de58 className="modal-content">
            <div
              data-v-a4e2de58
              className="modal-body language-modal matchReminder_modal p-0"
            >
              <div data-v-a4e2de58 className="modal-header container-close">
                <div data-v-a4e2de58 className="thm-heading">
                  <h3 data-v-a4e2de58>Match Reminder</h3>
                  <p data-v-a4e2de58 className="text-light">
                    Would you like to set reminder for match?
                  </p>
                </div>
                <button
                  data-v-a4e2de58
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="bt-close"
                >
                  <img
                    data-v-a4e2de58
                    src="assets/images/offcanvas-close.svg"
                    alt=""
                  />
                </button>
              </div>
              <div
                data-v-a4e2de58
                className="bet-detail-tabs-sec inner-modal-tabs stake-bet-place changepass-modal matchReminder-modal"
              >
                <div data-v-a4e2de58 className="reminder_type">
                  <div data-v-a4e2de58 className="row g-2">
                    <div data-v-a4e2de58 className="col-4 mb-2">
                      <div data-v-a4e2de58 className="form-item">
                        <button
                          data-v-a4e2de58
                          type="button"
                          className="reminder-btn thm-btn-h thm-btn"
                        >
                          <div data-v-a4e2de58>Before 10 minutes</div>
                        </button>
                      </div>
                    </div>
                    <div data-v-a4e2de58 className="col-4 mb-2">
                      <div data-v-a4e2de58 className="form-item">
                        <button
                          data-v-a4e2de58
                          type="button"
                          className="reminder-btn thm-btn-h thm-btn"
                        >
                          <div data-v-a4e2de58>Before 15 minutes</div>
                        </button>
                      </div>
                    </div>
                    <div data-v-a4e2de58 className="col-4 mb-2">
                      <div data-v-a4e2de58 className="form-item">
                        <button
                          data-v-a4e2de58
                          type="button"
                          className="reminder-btn thm-btn-h thm-btn"
                        >
                          <div data-v-a4e2de58>Before 20 minutes</div>
                        </button>
                      </div>
                    </div>
                    <div data-v-a4e2de58 className="col-4 mb-2">
                      <div data-v-a4e2de58 className="form-item">
                        <button
                          data-v-a4e2de58
                          type="button"
                          className="reminder-btn thm-btn-h thm-btn"
                        >
                          <div data-v-a4e2de58>Before 25 minutes</div>
                        </button>
                      </div>
                    </div>
                    <div data-v-a4e2de58 className="col-4 mb-2">
                      <div data-v-a4e2de58 className="form-item">
                        <button
                          data-v-a4e2de58
                          type="button"
                          className="reminder-btn thm-btn-h thm-btn"
                        >
                          <div data-v-a4e2de58>Before 30 minutes</div>
                        </button>
                      </div>
                    </div>
                    <div data-v-a4e2de58 className="col-4 mb-2">
                      <div data-v-a4e2de58 className="form-item">
                        <button
                          data-v-a4e2de58
                          type="button"
                          className="reminder-btn thm-btn-h thm-btn"
                        >
                          <div data-v-a4e2de58>Before 40 minutes</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-a4e2de58 className="bet_palce_button modal-fix-btn">
                <button
                  data-v-a4e2de58
                  data-dismiss="modal"
                  className="thm-border-btn thm-btn-h w-50"
                >
                  Cancel
                </button>
                <button
                  data-v-a4e2de58
                  disabled="disabled"
                  className="thm-btn thm-btn-h w-50 matchReminder-btn"
                >
                  Save
                  <span data-v-a4e2de58>
                    <b data-v-a4e2de58 />
                    <b data-v-a4e2de58 />
                    <b data-v-a4e2de58 />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-v-4a078946
        id="ruleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
        className="modal fade"
      >
        <div className="modal-dialog modal-dialog-centered loginModal-sec registerModal-sec filter-sec fix-rule-sec b_fix">
          <div className="modal-content">
            <div className="modal-header container-close">
              <div className="thm-heading">
                <h3>Rules</h3>
              </div>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="bt-close"
              >
                <img src="assets/images/offcanvas-close.svg" alt="" />
              </button>
            </div>
            <div className="modal-body language-modal rule-modal-sec">
              <div className="fancy-tabs-wrapper">
                <div className="login-tabs-sec scoreCollapseBartabs">
                  <ul
                    id="myTab"
                    role="tablist"
                    className="nav nav-tabs border-0"
                  >
                    <li role="presentation" className="nav-item">
                      <button
                        id="pills-fancy-tab"
                        data-toggle="pill"
                        data-target="#pills-fancy"
                        type="button"
                        role="tab"
                        aria-controls="pills-fancy"
                        aria-selected="true"
                        className="nav-link active"
                      >
                        English
                      </button>
                    </li>
                    <li role="presentation" className="nav-item">
                      <button
                        id="pills-fancy-tab"
                        data-toggle="pill"
                        data-target="#pills-fancy"
                        type="button"
                        role="tab"
                        aria-controls="pills-fancy"
                        aria-selected="true"
                        className="nav-link"
                      >
                        kannda
                      </button>
                    </li>
                    <li role="presentation" className="nav-item">
                      <button
                        id="pills-fancy-tab"
                        data-toggle="pill"
                        data-target="#pills-fancy"
                        type="button"
                        role="tab"
                        aria-controls="pills-fancy"
                        aria-selected="true"
                        className="nav-link"
                      >
                        telugu
                      </button>
                    </li>
                  </ul>
                </div>
                <div id="pills-tabContent" className="tab-content">
                  <div
                    id="pills-fancy"
                    role="tabpanel"
                    aria-labelledby="pills-fancy-tab"
                    className="tab-pane fade show active"
                  >
                    <div className="event-wrapper language-list">
                      <p>
                        Fantasy Rule: In this the team is formed by the first
                        player and six players. If the first player does not
                        play then the run ball even in the second will be zero.
                      </p>
                    </div>
                  </div>
                  <div
                    id="pills-fancy"
                    role="tabpanel"
                    aria-labelledby="pills-fancy-tab"
                    className="tab-pane fade show active"
                    style={{ display: "none" }}
                  >
                    <div className="event-wrapper language-list">
                      <h2>
                        ಫ್ಯಾಂಟಸಿ ನಿಯಮ: ಇದರಲ್ಲಿ ಮೊದಲ ಆಟಗಾರ ಮತ್ತು ಆರು ಆಟಗಾರರಿಂದ
                        ತಂಡವನ್ನು ರಚಿಸಲಾಗುತ್ತದೆ. ಮೊದಲ ಆಟಗಾರನು ಆಡದಿದ್ದರೆ
                        ಎರಡನೆಯದರಲ್ಲಿಯೂ ರನ್ ಬಾಲ್ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ.
                      </h2>
                    </div>
                  </div>
                  <div
                    id="pills-fancy"
                    role="tabpanel"
                    aria-labelledby="pills-fancy-tab"
                    className="tab-pane fade show active"
                    style={{ display: "none" }}
                  >
                    <div className="event-wrapper language-list">
                      <p>
                        ఫాంటసీ నియమం: ఇందులో జట్టు మొదటి ఆటగాడు మరియు ఆరుగురు
                        ఆటగాళ్లతో ఏర్పడుతుంది. మొదటి ఆటగాడు ఆడకపోతే రెండో బంతికి
                        కూడా రన్ బాల్ సున్నా అవుతుంది.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet_palce_button modal-fix-btn">
              <button
                data-dismiss="modal"
                className="thm-btn thm-btn-h w-50 m-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-v-6ce04e89
        data-v-4a078946
        id="howplayModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
        className="modal fade"
      >
        <div
          data-v-6ce04e89
          className="modal-dialog modal-dialog-centered loginModal-sec registerModal-sec filter-sec b_fix"
        >
          <div data-v-6ce04e89 className="modal-content">
            <div
              data-v-6ce04e89
              className="modal-body language-modal matchReminder_modal howplayModal_match p-0 play_modal"
            >
              <div data-v-6ce04e89 className="modal-header container-close">
                <div data-v-6ce04e89 className="thm-heading">
                  <h3 data-v-6ce04e89 className="text-white">
                    HOW TO PLAY
                  </h3>
                </div>
                <button
                  data-v-6ce04e89
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="bt-close"
                >
                  <img
                    data-v-6ce04e89
                    src="assets/images/offcanvas-close.svg"
                    alt=""
                  />
                </button>
              </div>
              <div
                data-v-6ce04e89
                className="bet-detail-tabs-sec inner-modal-tabs"
              >
                <div data-v-6ce04e89 className="refer-video mt-0">
                  <div data-v-6ce04e89 className="thm-heading">
                    <h3 data-v-6ce04e89>How to Play</h3>
                    <video
                      data-v-6ce04e89
                      controls="controls"
                      src="//newprojectclick.s3.ap-south-1.amazonaws.com/tutorials/1732646173.mp4"
                      className="video-display"
                    />
                  </div>
                </div>
                <div data-v-6ce04e89 className="steps-procss-sec">
                  <div data-v-6ce04e89 id="wrapper">
                    <div
                      data-v-6ce04e89
                      id="content-wrapper"
                      className="d-flex flex-column"
                    >
                      <div data-v-6ce04e89 id="content">
                        <div data-v-6ce04e89 className="stage stage-info">
                          <div data-v-6ce04e89 className="stage-item active">
                            <input
                              data-v-6ce04e89
                              type="radio"
                              name="rGroup"
                              defaultValue={1}
                              id={1}
                            />
                            <label
                              data-v-6ce04e89
                              htmlFor={1}
                              className="select-steps"
                            >
                              <span data-v-6ce04e89>1</span>
                            </label>
                            <div
                              data-v-6ce04e89
                              aria-disabled="true"
                              className="stage-item-text"
                            >
                              <span
                                data-v-6ce04e89
                                className="stage-item-text-green"
                              >
                                Select a match
                              </span>
                            </div>
                            <div data-v-6ce04e89 className="cursor-helper" />
                          </div>
                          <div data-v-6ce04e89 className="stage-item">
                            <input
                              data-v-6ce04e89
                              type="radio"
                              name="rGroup"
                              defaultValue={1}
                              id={2}
                            />
                            <label
                              data-v-6ce04e89
                              htmlFor={2}
                              className="select-steps"
                            >
                              <span data-v-6ce04e89>2</span>
                            </label>
                            <div
                              data-v-6ce04e89
                              aria-disabled="true"
                              className="stage-item-text"
                            >
                              <span data-v-6ce04e89 className>
                                Choose player
                              </span>
                            </div>
                            <div data-v-6ce04e89 className="cursor-helper" />
                          </div>
                          <div data-v-6ce04e89 className="stage-item">
                            <input
                              data-v-6ce04e89
                              type="radio"
                              name="rGroup"
                              defaultValue={1}
                              id={3}
                            />
                            <label
                              data-v-6ce04e89
                              htmlFor={3}
                              className="select-steps"
                            >
                              <span data-v-6ce04e89>3</span>
                            </label>
                            <div
                              data-v-6ce04e89
                              aria-disabled="true"
                              className="stage-item-text"
                            >
                              <span data-v-6ce04e89 className>
                                Place Bets
                              </span>
                            </div>
                            <div data-v-6ce04e89 className="cursor-helper" />
                          </div>
                        </div>
                        <div data-v-6ce04e89 className="stage-content">
                          <div
                            data-v-6ce04e89
                            className="stage-content-item active"
                          >
                            <div
                              data-v-6ce04e89
                              className="stage-content-item-block stageOne text-center"
                            >
                              <img
                                data-v-6ce04e89
                                src="assets/images/1688110891.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-6ce04e89
                  className="eventlist-sub-son justify-content-center"
                >
                  <p data-v-6ce04e89>
                    Please select a match from the provided list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**/}
    </section>
    </>
  );
}

export default Circketflight;
