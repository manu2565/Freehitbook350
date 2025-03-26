import React, { useState } from "react";
import Afooter from "./Afooter";
import "../../../../public/assets/css/games.css";
import { useNavigate, Link } from "react-router-dom";

function Allplaycards() {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);

  };
  const navigate = useNavigate();

  const handleSpanClick = () => {
    navigate("/match-details");
  };
  return (
    <div
      data-v-cb9ac2ee
      className="position-relative main-container-user inplay_container"
    >
      <div data-v-69d8d8ca data-v-cb9ac2ee>
        <div data-v-69d8d8ca className="game-list-sec">
          <ul data-v-69d8d8ca>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/nkc_lobby.webp"
                    alt="NKC Lobby"
                    title="NKC Lobby"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      NKC Lobby
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/twist.webp"
                    alt="Twist"
                    title="Twist"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Twist
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/aviator.webp"
                    alt="Aviator"
                    title="Aviator"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Aviator
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/instant_lottery.webp"
                    alt="Instant Lottery"
                    title="Instant Lottery"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Instant Lottery
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/blast_off.webp"
                    alt="Blast Off"
                    title="Blast Off"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Blast Off
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/jetx.webp"
                    alt="Jet X"
                    title="Jet X"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Jet X
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/ninja_cut.webp"
                    alt="Ninja Cut"
                    title="Ninja Cut"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Ninja Cut
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/aviatrix.webp"
                    alt="Aviatrix"
                    title="Aviatrix"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Aviatrix
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/crash_royal.webp"
                    alt="Crash Royale"
                    title="Crash Royale"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Crash Royale
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/aviator_3d.webp"
                    alt="Aviator 3D"
                    title="Aviator 3D"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Aviator 3D
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/andar_bahar.webp"
                    alt="Andar Bahar"
                    title="Andar Bahar"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Andar Bahar
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/ludo.webp"
                    alt="Ludo"
                    title="Ludo"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Ludo
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/sequence.webp"
                    alt="Sequence Cards"
                    title="Sequence Cards"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Sequence Cards
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/rummy.webp"
                    alt="Rummy"
                    title="Rummy"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Rummy
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/mines.webp"
                    alt="Mines"
                    title="Mines"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Mines
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/plinko.webp"
                    alt="Plinko"
                    title="Plinko"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Plinko
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/color_prediction.webp"
                    alt="Color Prediction"
                    title="Color Prediction"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Color Prediction
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/red_and_black.webp"
                    alt="Red and Black"
                    title="Red and Black"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Red and Black
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/baccarat.webp"
                    alt="Baccarat"
                    title="Baccarat"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Baccarat
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/rider.webp"
                    alt="Rider"
                    title="Rider"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      Rider
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li data-v-69d8d8ca>
              <div data-v-69d8d8ca className="loading">
                <div data-v-69d8d8ca className="game-img-xy">
                  <img
                    data-v-69d8d8ca
                    onLoad={handleImageLoad}
                    src="assets/images/pumpedx.webp"
                    alt="PumpedX"
                    title="PumpedX"
                    className="game-image-banner"
                    style={{ cursor: "pointer" }}
                  />
                  <div data-v-69d8d8ca className="casino-bottom">
                    <span data-v-69d8d8ca className="casino-game-name">
                      PumpedX
                    </span>
                    <button data-v-69d8d8ca>
                      <i data-v-69d8d8ca className="far fa-play-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div data-v-69d8d8ca className="all_games_container p-1 p-md-3">
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca>
            <div data-v-69d8d8ca className="game_container">
              <div data-v-69d8d8ca className="game_header pl-1">
                <div data-v-69d8d8ca className="d-flex align-items-center">
                  <span data-v-69d8d8ca className="mr-2 font-weight-bold">
                    cricket
                  </span>
                  <span data-v-69d8d8ca>(3)</span>
                </div>
                <div data-v-69d8d8ca className="event-search-con">
                  <input data-v-69d8d8ca type="text" placeholder="search..." />
                  <div data-v-69d8d8ca className="list-group es-content" />
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      International League T20
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" style={{ cursor: "pointer" }}
                              onClick={handleSpanClick}>
                              Abu Dhabi Knight Riders v Sharjah Warriors
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 8:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div data-v-69d8d8ca className="bet_count_block mr-2">
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div data-v-69d8d8ca className="bet_count_block">
                            <span data-v-69d8d8ca className="bf-icon">

                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.97
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.98
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.02
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.04
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 50K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>International League T20</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 8:00 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 50K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      SA20
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Paarl Royals v MI Cape Town
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 9:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div data-v-69d8d8ca className="bet_count_block mr-2">
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div data-v-69d8d8ca className="bet_count_block">
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.44
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.48
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.68
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.69
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 100K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>SA20</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 9:00 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 100K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Jamaica T10
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Surrey Royals v Surrey Kings
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 9:30 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.57
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.6
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.66
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.76
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 5K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>Jamaica T10</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 9:30 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 5K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
            </div>
          </div>
          <div data-v-69d8d8ca>
            <div data-v-69d8d8ca className="game_container">
              <div data-v-69d8d8ca className="game_header pl-1">
                <div data-v-69d8d8ca className="d-flex align-items-center">
                  <span data-v-69d8d8ca className="mr-2 font-weight-bold">
                    tennis
                  </span>
                  <span data-v-69d8d8ca>(4)</span>
                </div>
                <div data-v-69d8d8ca className="event-search-con">
                  <input data-v-69d8d8ca type="text" placeholder="search..." />
                  <div data-v-69d8d8ca className="list-group es-content" />
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Buenos Aires Challenger 2025
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Sant Rodriguez Taverna v Mateus Alves
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 6:30 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 10K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>
                            Buenos Aires Challenger 2025
                          </span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 6:30 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 10K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Oeiras Challenger 2025
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Ferreira Silva v Yevseyev
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 7:35 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.71
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.74
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.32
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.42
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 10K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>Oeiras Challenger 2025</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 7:35 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 10K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Buenos Aires Challenger 2025
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Go Bueno v Ga Debru
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 7:40 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.26
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            2.3
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.76
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.8
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 10K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>
                            Buenos Aires Challenger 2025
                          </span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 7:40 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 10K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Oeiras Challenger 2025
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Zhukayev v Butvilas
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 9:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.28
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.29
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            -
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            4.4
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            4.8
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 10K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>Oeiras Challenger 2025</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 9:00 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 10K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
            </div>
          </div>
          <div data-v-69d8d8ca>
            <div data-v-69d8d8ca className="game_container">
              <div data-v-69d8d8ca className="game_header pl-1">
                <div data-v-69d8d8ca className="d-flex align-items-center">
                  <span data-v-69d8d8ca className="mr-2 font-weight-bold">
                    soccer
                  </span>
                  <span data-v-69d8d8ca>(3)</span>
                </div>
                <div data-v-69d8d8ca className="event-search-con">
                  <input data-v-69d8d8ca type="text" placeholder="search..." />
                  <div data-v-69d8d8ca className="list-group es-content" />
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Kuwaiti Premier League
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Khaitan v Al Nasar (KUW)
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 8:10 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            13
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            70
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.19
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.23
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            5.7
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            8
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 25K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>Kuwaiti Premier League</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 8:10 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 25K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Saudi Professional League
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Al-Shabab (KSA) v Al Riyadh SC
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 8:35 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            8
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            8.4
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            3.5
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            3.55
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.68
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.69
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 500K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>Saudi Professional League</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 8:35 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 500K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  <div
                    data-v-69d8d8ca
                    className="border border-top-0 border-dark px-2"
                  >
                    <div
                      data-v-69d8d8ca
                      className="league_name font-weight-bold d-none d-lg-block cursor-pointer mobile_league_name"
                    >
                      Saudi Professional League
                    </div>
                    <div
                      data-v-69d8d8ca
                      className="row flex-wrap flex-lg-nowrap pt-1 pt-sm-0"
                    >
                      <div
                        data-v-69d8d8ca
                        className="col-8 col-lg-3 col-xl-4 d-flex align-items-center justify-content-between order-1 mb-1 mb-sm-2 cursor-pointer"
                      >
                        <div
                          data-v-69d8d8ca
                          className="runner-name-date-container"
                        >
                          <div data-v-69d8d8ca className="runner-name-date">
                            <span data-v-69d8d8ca className="runners_name" onClick={handleSpanClick}>
                              Dhamk v Al-Ettifaq
                            </span>
                            <span
                              data-v-69d8d8ca
                              className="match_date_time d-block"
                            >
                              Jan 15 9:00 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-3 col-lg-2 col-xl-1 pl-0 order-2 d-flex mb-1 mb-sm-2"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center"
                        >
                          <i data-v-69d8d8ca className="fa fa-tv" />
                        </div>
                        <div
                          data-v-69d8d8ca
                          className="d-flex align-items-center ml-2"
                        >
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block mr-2 hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              B
                            </span>
                          </div>
                          <div
                            data-v-69d8d8ca
                            className="bet_count_block hidden"
                          >
                            <span data-v-69d8d8ca className="bf-icon">
                              F
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        data-v-69d8d8ca
                        className="col-12 col-lg-5 mb-1 mb-md-2 order-4 order-lg-2 odd_blocks_container cursor-pointer"
                      >
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            28
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            30
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            9.4
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            9.8
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home back">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.15
                          </span>
                        </div>
                        <div data-v-69d8d8ca className="odd_blocks-home lay">
                          <span data-v-69d8d8ca className="price_odd_title">
                            1.16
                          </span>
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="col-1 col-lg-2 d-flex pl-0 pl-md-2 mb-1 mb-sm-2 align-items-center justify-content-around order-2 order-lg-3"
                      >
                        <div data-v-69d8d8ca className="d-none d-lg-flex">
                          <span data-v-69d8d8ca className="min_max_span">
                            Min : 100 |&nbsp;
                            <span data-v-69d8d8ca> Max: 500K</span>
                            
                          </span>
                        </div>
                        <div data-v-69d8d8ca>
                          <img
                            data-v-69d8d8ca
                            src="assets/images/tick-outline.webp"
                            alt="Not Pinned"
                            className="img-pin"
                          />
                        </div>
                      </div>
                      <div
                        data-v-69d8d8ca
                        className="d-flex d-lg-none justify-content-between col-12 text-right order-5 font-size-12"
                      >
                        <div
                          data-v-69d8d8ca
                          className="d-block mobile_league_name"
                        >
                          <span data-v-69d8d8ca>Saudi Professional League</span>
                          <span
                            data-v-69d8d8ca
                            className="match_date_time d-none"
                          >
                            Jan 15 9:00 PM
                          </span>
                        </div>
                        <span
                          data-v-69d8d8ca
                          className="min_max_span font-size-12"
                        >
                          Min : 100 |&nbsp;
                          <span data-v-69d8d8ca> Max: 500K</span>
                          
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
              <div data-v-69d8d8ca className="league_container">
                <div data-v-69d8d8ca className="match_container">
                  
                </div>
              </div>
            </div>
          </div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
          <div data-v-69d8d8ca></div>
        </div>
        <div data-v-69d8d8ca className="casino-gif">
          <Link data-v-69d8d8ca to="/india-casino" className>
            <img
              data-v-69d8d8ca
              src="assets/images/international-casino.webp"
              alt="International"
              style={{ maxHeight: "100%" }}
            />
          </Link>
          <Link data-v-69d8d8ca to="games/live-casino" className>
            <img
              data-v-69d8d8ca
              src="assets/images/indian-casino.webp"
              alt="Indian"
              style={{ maxHeight: "100%" }}
            />
          </Link>
        </div>
        <div data-v-69d8d8ca="" className="whatsapp-support mt-2"><Link data-v-69d8d8ca="" target="_blank" title="Whatsapp" to="https://api.whatsapp.com/send/?phone=wa.me" className="whatsapp-support-link"><img data-v-69d8d8ca="" src="assets/images/whatsapp-icon.png" alt="" /> Whatsapp Support
        </Link> <p data-v-69d8d8ca="">
            Get your queries, new updates and latest offers via whatsapp support.
          </p></div>
        <div
          data-v-69d8d8ca
          name="live_cards_info"
          id="live_cards_info"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="liveCasinoModalTitle"
          aria-hidden="true"
          className="modal fade"
        >
          <div data-v-69d8d8ca className="modal-dialog modal-dialog-centered">
            <div data-v-69d8d8ca className="modal-content">
              <div
                data-v-69d8d8ca
                className="modal-body position-relative py-5"
              >
                <button
                  data-v-69d8d8ca
                  data-dismiss="modal"
                  className="close-button close"
                >
                  <span data-v-69d8d8ca aria-hidden="true">
                    ×
                  </span>
                </button>
                <div data-v-69d8d8ca className="d-flex flex-column text-center">
                  <img
                    data-v-69d8d8ca
                    src="assets/images/casino_popup.jpg"
                    alt="World Casino"
                    className="top-image mx-auto mb-2"
                  />
                  <p data-v-69d8d8ca className="my-3">
                    All Casino Game Profit Loss would be 2 times. For Example,
                    If you win 1000 in any Casino Game you will get 2000 balance
                    in our exchange. Same applicable for loss.
                  </p>
                  <p data-v-69d8d8ca className="mb-3">
                    Casino Game mey Jeet Har double ho gee. Agr Casino Game mey
                    1000 win kray gey to app k Exchange account mey 2000 aye gye
                    or agr 1000 Lose kray gey to aap k exchange account sey 2000
                    minus ho gey.
                  </p>
                  <button
                    data-v-69d8d8ca
                    className="agree-button mx-auto font-weight-bold"
                  >
                    OK, I AGREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-69d8d8ca
          name="supernowa_info"
          id="supernowa_info"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="liveCasinoModalTitle"
          aria-hidden="true"
          className="modal fade"
        >
          <div data-v-69d8d8ca className="modal-dialog modal-dialog-centered">
            <div data-v-69d8d8ca className="modal-content">
              <div
                data-v-69d8d8ca
                className="modal-body position-relative py-5"
              >
                <button
                  data-v-69d8d8ca
                  data-dismiss="modal"
                  className="close-button close"
                >
                  <span data-v-69d8d8ca aria-hidden="true">
                    ×
                  </span>
                </button>
                <div data-v-69d8d8ca className="d-flex flex-column text-center">
                  <img
                    data-v-69d8d8ca
                    src="assets/images/casino_popup.jpg"
                    alt="World Casino"
                    className="top-image mx-auto mb-2"
                  />
                  <p data-v-69d8d8ca className="my-3">
                    All Casino Game Profit Loss would be 2 times. For Example,
                    If you win 1000 in any Casino Game you will get 2000 balance
                    in our exchange. Same applicable for loss.
                  </p>
                  <p data-v-69d8d8ca className="mb-3">
                    Casino Game mey Jeet Har double ho gee. Agr Casino Game mey
                    1000 win kray gey to app k Exchange account mey 2000 aye gye
                    or agr 1000 Lose kray gey to aap k exchange account sey 2000
                    minus ho gey.
                  </p>
                  <button
                    data-v-69d8d8ca
                    className="agree-button mx-auto font-weight-bold"
                  >
                    OK, I AGREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-v-69d8d8ca
          id="rulesModal"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex={-1}
          aria-labelledby="rulesModalLabel"
          aria-hidden="true"
          className="modal fade"
        >
          <div data-v-69d8d8ca className="modal-dialog modal-dialog-centered">
            <div data-v-69d8d8ca className="modal-content">
              <div data-v-69d8d8ca className="modal-header">
                <h5
                  data-v-69d8d8ca
                  id="rulesModalLabel"
                  className="modal-title text-dark"
                >
                  Rules
                </h5>
                <button
                  data-v-69d8d8ca
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="close"
                >
                  <span data-v-69d8d8ca aria-hidden="true">
                    ×
                  </span>
                </button>
              </div>
              <div data-v-69d8d8ca className="modal-body">
                
              </div>
              <div data-v-69d8d8ca className="modal-footer">
                <button
                  data-v-69d8d8ca
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
                src="assets/images/saved_resource"
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
          <iframe data-v-687fd205 src="assets/images/saved_resource(1).html" />
        </div>
        <Afooter />
      </div>
      
    </div>
  );
}

export default Allplaycards;
