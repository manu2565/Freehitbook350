import React from 'react'
import '../../../../public/assets/css/Gameson.css'
import Playinggames from './Playinggames'
import Marque from './Marque'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Gameson() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [stakeAmount, setStakeAmount] = useState('');

  // Automatically close the modal after 5 seconds if it is open
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setModalOpen(false);
      }, 3000); // Close after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount or if modal is closed
    }
  }, [isModalOpen]); // Effect runs when modal is opened

  const handleAmountClick = (amount) => {
    setStakeAmount(amount);
    setModalOpen(false); // Close the modal immediately after selecting the amount
  };

  const handlePlaceBet = () => {
    // Handle place bet logic here
    setModalOpen(false); // Close the modal after placing the bet
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal when the user clicks Close
  };

  return (
    <>

      <Playinggames />
      <Marque />
      <div className="position-relative main-container-user inplay_container">
        <div className="event-detail">
          <div className="container-fluid position-relative custom">
            <div data-v-06bf57f8="" className="row " >
              <div data-v-06bf57f8="" id="scoreCollapse"
                className="collapse col-12 px-0">
                <div data-v-06bf57f8="" className="card card-body p-0  child">
                  <div data-v-06bf57f8=""
                    className="col-12 d-block d-xl-none tv_score_card_tabs px-1">
                    <ul data-v-06bf57f8="" id="pills-tab" role="tablist"
                      className="nav nav-pills w-100">
                      <li data-v-06bf57f8="" role="presentation"
                        className="nav-item text-center px-0"><Link data-v-06bf57f8=""
                          id="mobile-score-card-tab" data-toggle="pill"
                          to="#mobile-score-card" role="tab"
                          aria-controls="mobile-score-card" aria-selected="true"
                          className="nav-link active">SCORE</Link></li>
                      <li data-v-06bf57f8="" role="presentation"
                        className="nav-item text-center px-0"><Link data-v-06bf57f8=""
                          id="mobile-live-tv-tab" data-toggle="pill"
                          to="#mobile-live-tv" role="tab"
                          aria-controls="mobile-live-tv" aria-selected="false"
                          className="nav-link"> LIVE </Link></li>
                      <li data-v-06bf57f8="" className="nav-item px-0"><Link data-v-06bf57f8=""
                        id="open-bets-tab" data-toggle="pill" to="#open-bets"
                        role="tab" aria-controls="open-bets" aria-selected="false"
                        className="nav-link"><button data-v-06bf57f8=""
                          className="open_bets_button mx-auto">
                          Open Bets
                          <span data-v-06bf57f8=""
                            className="open-bets-count rounded">0</span></button></Link></li>
                      <li data-v-06bf57f8="" role="presentation"
                        className="nav-item px-0"><Link data-v-06bf57f8=""
                          className="nav-link px-0">
                          <section data-v-06bf57f8="" to="#mobile_one_click_bet"
                            role="button" aria-expanded="false"
                            aria-controls="mobile_one_click_bet"
                            className="slider-checkbox"><input data-v-06bf57f8=""
                              type="checkbox" id="OCBcheck1" /> <label data-v-06bf57f8=""
                                htmlFor="OCBcheck1"
                                className="label text-nowrap noselect">One
                              Click</label></section>
                        </Link></li>
                    </ul>
                    <div data-v-06bf57f8=""
                      className="mobile_one_click_bet d-flex d-lg-none flex-column justify-content-center w-100">
                      <div data-v-06bf57f8="" id="mobile_one_click_bet"
                        className="collapse mb-2">{/**/}</div>
                    </div>
                    <div data-v-06bf57f8="" id="pills-tabContent"
                      className="tab-content">
                      <div data-v-06bf57f8="" id="mobile-score-card" role="tabpanel"
                        aria-labelledby="mobile-score-card-tab"
                        className="tab-pane fade show active">
                        <div data-v-06bf57f8="" className="widgets"><iframe
                          data-v-06bf57f8="" id="sportradar_score"
                          src="https://scorecard.oddstrad.com/get-scorecard-iframe/4/33959019/54204215"
                          marginWidth={0} marginHeight={0} frameBorder={0}
                          width="100%" scrolling="no"
                          allowFullScreen="allowfullscreen"
                          className="sports-radar-scorecard-iframe" style={{
                            height:
                              '190px'
                          }} /></div>
                      </div>
                      <div data-v-06bf57f8="" id="mobile-live-tv" role="tabpanel"
                        aria-labelledby="mobile-live-tv-tab"
                        className="tab-pane fade"><iframe data-v-06bf57f8=""
                          scrolling="no" frameBorder={0}
                          className="tv-iframe" /></div>
                      <div data-v-06bf57f8="" id="open-bets" role="tabpanel"
                        aria-labelledby="open-bets-tab" className="tab-pane fade">
                        <div data-v-06bf57f8="" className="card open-bets-collapse">
                          <div data-v-06bf57f8="" className="card-body p-0">
                            <div data-v-06bf57f8=""
                              className="card_header p-2 d-flex justify-content-center">
                              <h6 data-v-06bf57f8="" className="card-title mb-0">No Bets
                                Found !</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-06bf57f8="" className="scoreCollapseBar d-xl-none">
                <button
                  data-v-06bf57f8="" type="button" data-toggle="collapse"
                  data-target="#scoreCollapse" aria-expanded="false"
                  aria-controls="scoreCollapse"><span data-v-06bf57f8=""
                    className="score-on"><span data-v-06bf57f8=""
                      className="material-icons">visibility</span>Show</span> <span
                        data-v-06bf57f8="" className="score-off"><span data-v-06bf57f8=""
                          className="material-icons">visibility_off</span>Hide</span></button>
                <button data-v-06bf57f8="" type="button" data-toggle="collapse"
                  data-target="#scoreCollapse" aria-expanded="false"
                  aria-controls="scoreCollapse" className="hidebar-btn">Live</button>
                <button data-v-06bf57f8="" type="button" data-toggle="collapse"
                  data-target="#scoreCollapse" aria-expanded="false"
                  aria-controls="scoreCollapse" className="hidebar-btn">Open
                  Bets</button> <button data-v-06bf57f8="" type="button"><span
                    data-v-06bf57f8=""
                    className="score-on show-cursor">Rule</span></button></div>
              <div data-v-06bf57f8=""
                className="col-12 col-xl-9 pr-xl-1 left_market_container px-1">
                <div data-v-06bf57f8="">
                  <div data-v-06bf57f8="" id="scoreCollapseWeb"
                    className="collapse col-12 px-0">
                    <div data-v-06bf57f8="" className="card card-body p-0"></div>
                  </div>
                  <div data-v-06bf57f8=""
                    className="scoreCollapseBar d-none d-xl-flex mb-2 mx-0"><button
                      data-v-06bf57f8="" type="button" data-toggle="collapse"
                      data-target="#scoreCollapseWeb" aria-expanded="false"
                      aria-controls="scoreCollapseWeb"><span data-v-06bf57f8=""
                        className="score-on"><span data-v-06bf57f8=""
                          className="material-icons">visibility</span>Show</span>
                      <span data-v-06bf57f8="" className="score-off"><span
                        data-v-06bf57f8=""
                        className="material-icons">visibility_off</span>Hide</span></button>
                    <button data-v-06bf57f8="" type="button"><span data-v-06bf57f8=""
                      className="score-on show-cursor"><span data-v-06bf57f8=""
                        className="material-icons">visibility</span>Rule</span></button></div>
                  <div data-v-06bf57f8="" className="card mb-1">
                    <div data-v-06bf57f8=""
                      className="d-flex justify-content-between px-1 px-sm-3 py-2">
                      <div data-v-06bf57f8="" className="d-flex">
                        <div data-v-06bf57f8=""
                          className="d-flex runners_name both_runners_name">{/**/} <h6
                            data-v-06bf57f8="" className="mb-0 word-break-all">Auckland
                            Aces</h6> {/**/} <h6 data-v-06bf57f8=""
                              className="text-danger text-bold mx-2 mb-0">vs</h6> {/**/}
                          <h6 data-v-06bf57f8="" className="mb-0 word-break-all">Otago
                            Volts</h6>
                        </div> <span data-v-06bf57f8=""
                          className="material-icons ml-2 sensor-icon">sensors</span>
                      </div>
                      <div data-v-06bf57f8="" className="d-flex gap-sm"><span
                        data-v-06bf57f8=""
                        className="text-poppins mb-1 above_runners_name">
                        Jan 23rd, 8:55 AM
                      </span>
                        <div data-v-06bf57f8=""><img data-v-06bf57f8=""
                          src="assets/images/tick-outline.webp" alt="Not Pinned"
                          className="img-pin" /></div>
                      </div>
                    </div>
                  </div>
                  <div data-v-06bf57f8="" className="tabs-container border-0">
                    <div data-v-06bf57f8=""
                      className="match_odds_tab_content lod-fix">{/**/} <div
                        data-v-06bf57f8="" className="tabs-header pr-2 pr-sm-3">
                        <div data-v-06bf57f8="" className="market-name">
                          Match Odds
                          <div data-v-06bf57f8=""
                            className="active cashout-container"><span
                              data-v-06bf57f8=""><span data-v-06bf57f8=""
                                className="cashout-ck-bx"><i data-v-06bf57f8=""
                                  className="fa fa-circle" style={{
                                    cursor: 'pointer'
                                  }} /></span> <span data-v-06bf57f8=""
                                    className="sub-market-name">Cash
                                Out</span></span></div>
                        </div> {/**/} <div data-v-06bf57f8=""
                          className="back_lay_header_container"><span data-v-06bf57f8=""
                            className="odd_blocks back">Back</span> <span
                              data-v-06bf57f8="" s
                              className="odd_blocks lay">Lay</span></div>
                      </div>

                      <div data-v-06bf57f8="" className="card">
                        <div data-v-06bf57f8="">
                          <div data-v-06bf57f8="" className="runner-row px-2 px-sm-3">
                            <div data-v-06bf57f8="">
                              <p data-v-06bf57f8=""
                                className="market-runner-name">Auckland Aces</p>
                              {/**/}
                            </div>
                            <div data-v-06bf57f8="" className="card"><div
                              data-v-06bf57f8=""><div data-v-06bf57f8=""
                                className="runner-row px-2 px-sm-3"><div
                                  data-v-06bf57f8=""><p data-v-06bf57f8=""
                                    className="market-runner-name">Durbar
                                    Rajshahi</p> {/**/}</div>

                                <div data-v-06bf57f8=""
                                  className="d-flex odd_blocks_container">{/**/}
                                  <div data-v-06bf57f8=""
                                    className="odd_blocks back d-none d-md-flex"><span
                                      data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                      1.43
                                    </span> <span data-v-06bf57f8=""
                                      className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                      667.759K
                                    </span></div> <div data-v-06bf57f8=""
                                      className="odd_blocks back d-none d-md-flex"><span
                                        data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                      1.44
                                    </span> <span data-v-06bf57f8=""
                                      className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                      299.615K
                                    </span></div> <div data-v-06bf57f8=""
                                      className="odd_blocks back"><span
                                        data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                      1.45
                                    </span> <span data-v-06bf57f8=""
                                      className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                      104.308K
                                    </span></div> <div data-v-06bf57f8=""
                                      className="odd_blocks lay"><span data-v-06bf57f8=""
                                        className="price_odd_title" onClick={() => setModalOpen(true)}>
                                      1.46
                                    </span> <span data-v-06bf57f8=""
                                      className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                      127.902K
                                    </span></div> <div data-v-06bf57f8=""
                                      className="odd_blocks lay d-none d-md-flex"><span
                                        data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                      1.47
                                    </span> <span data-v-06bf57f8=""
                                      className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                      484.08K
                                    </span></div> <div data-v-06bf57f8=""
                                      className="odd_blocks lay d-none d-md-flex"><span
                                        data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                      1.48
                                    </span> <span data-v-06bf57f8=""
                                      className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                      224.565K
                                    </span>
                                  </div>

                                </div>
                                {/* Conditionally render the betting slip */}



                              </div>

                            </div>

                              <div data-v-06bf57f8="">
                                <div data-v-06bf57f8=""
                                  className="runner-row px-2 px-sm-3"><div
                                    data-v-06bf57f8=""><p data-v-06bf57f8=""
                                      className="market-runner-name">Rangpur
                                      Riders</p> {/**/}</div>
                                  <div data-v-06bf57f8=""
                                    className="d-flex odd_blocks_container">{/**/}
                                    <div data-v-06bf57f8=""
                                      className="odd_blocks back d-none d-md-flex"><span
                                        data-v-06bf57f8="" className="price_odd_title">
                                        3.05
                                      </span> <span data-v-06bf57f8=""
                                        className="price_odd_subtitle">
                                        107.902K
                                      </span></div> <div data-v-06bf57f8=""
                                        className="odd_blocks back d-none d-md-flex"><span
                                          data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                        3.1
                                      </span> <span data-v-06bf57f8=""
                                        className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                        289.183K
                                      </span></div> <div data-v-06bf57f8=""
                                        className="odd_blocks back"><span
                                          data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                        3.15
                                      </span> <span data-v-06bf57f8=""
                                        className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                        59.282K
                                      </span></div> <div data-v-06bf57f8=""
                                        className="odd_blocks lay"><span data-v-06bf57f8=""
                                          className="price_odd_title" onClick={() => setModalOpen(true)}>
                                        3.2
                                      </span> <span data-v-06bf57f8=""
                                        className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                        5.686K
                                      </span></div> <div data-v-06bf57f8=""
                                        className="odd_blocks lay d-none d-md-flex"><span
                                          data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                        3.25
                                      </span> <span data-v-06bf57f8=""
                                        className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                        97.325K
                                      </span></div> <div data-v-06bf57f8=""
                                        className="odd_blocks lay d-none d-md-flex"><span
                                          data-v-06bf57f8="" className="price_odd_title" onClick={() => setModalOpen(true)}>
                                        3.3
                                      </span> <span data-v-06bf57f8=""
                                        className="price_odd_subtitle" onClick={() => setModalOpen(true)}>
                                        129.04K
                                      </span></div></div></div></div> <div
                                        data-v-06bf57f8=""
                                        className="min_max_span px-2 px-sm-3"><span
                                          data-v-06bf57f8="">Min: 100 |
                                  <span data-v-06bf57f8="">Max: 25000</span>
                                  {/**/}</span></div></div>

                          </div>
                        </div>
                        <div data-v-06bf57f8="">
                          <div data-v-06bf57f8="" className="runner-row px-2 px-sm-3">
                            <div data-v-06bf57f8="">
                              <p data-v-06bf57f8="" className="market-runner-name">Otago
                                Volts</p> {/**/}
                            </div>
                            <div data-v-06bf57f8=""
                              className="d-flex odd_blocks_container">
                              <div data-v-06bf57f8=""
                                className="suspended_banner_container"><span
                                  data-v-06bf57f8=""
                                  className="text-poppins px-3 py-1">SUSPENDED</span></div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks back d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks back d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8="" className="odd_blocks back">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8="" className="odd_blocks lay">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks lay d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks lay d-none d-md-flex">{/**/}
                                {/**/}</div>
                            </div>
                          </div>
                        </div>
                        <div data-v-06bf57f8=""
                          className="min_max_span px-2 px-sm-3"><span
                            data-v-06bf57f8="">Min: 100 |
                            <span data-v-06bf57f8="">Max: 25000</span>
                            {/**/}</span></div>

                      </div>
                      {isModalOpen && (
                        <div className="slip-bg-back lot"  >
                          <div className="card-body p-1 one_click_bet_container" >
                            <div className="bet-slip-topbar mb-2">
                              <div className="so-input-container">
                                <div className="odds_input position-relative">
                                  <input
                                    type="number"
                                    value={stakeAmount}
                                    disabled
                                    readOnly
                                    className="bg-white d-block w-75 mx-auto text-center"
                                  />
                                  <button className="odd_button_plus">+</button>
                                  <button className="odd_button_minus">-</button>
                                </div>
                                <div className="bet-stake-con">
                                  <input
                                    type="number"
                                    placeholder="Stake"
                                    className="bg-white d-block w-75 mx-auto text-center"
                                  />
                                  <button className="odd_button_plus">+</button>
                                  <button className="odd_button_minus">-</button>
                                </div>
                              </div>
                            </div>

                            <div className="bs-buttons-cont mb-2">
                              <button
                                className="stack_button select_amount_button"
                                onClick={() => handleAmountClick('100')}
                              >
                                100
                              </button>
                              <button
                                className="stack_button select_amount_button"
                                onClick={() => handleAmountClick('500')}
                              >
                                500
                              </button>
                              <button
                                className="stack_button select_amount_button"
                                onClick={() => handleAmountClick('1K')}
                              >
                                1K
                              </button>
                              <button
                                className="stack_button select_amount_button"
                                onClick={() => handleAmountClick('2K')}
                              >
                                2K
                              </button>
                              <button
                                className="stack_button select_amount_button"
                                onClick={() => handleAmountClick('5K')}
                              >
                                5K
                              </button>
                              <button
                                className="stack_button select_amount_button"
                                onClick={() => handleAmountClick('10K')}
                              >
                                10K
                              </button>
                            </div>

                            <div className="bet-slip-keypad my-2 d-lg-none">
                              <button className="key1">1</button>
                              <button className="key2">2</button>
                              <button className="key3">3</button>
                              <button className="key4">4</button>
                              <button className="key5">5</button>
                              <button className="key6">6</button>
                              <button className="key7">7</button>
                              <button className="key8">8</button>
                              <button className="key9">9</button>
                              <button className="key0">0</button>
                              <button className="key00">00</button>
                              <button className="key000">000</button>
                              <button className="key-clear">
                                <i className="far fa-times-circle fa-lg"></i>
                              </button>
                            </div>

                            <div className="p-c-buttons">
                              <button className="bg-danger text-white" onClick={handleCloseModal}>
                                Close
                              </button>
                              <button
                                className="bg-success text-white text-nowrap"
                                onClick={handlePlaceBet}
                              >
                                Place Bet
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                    <div data-v-06bf57f8=""
                      className="match_odds_tab_content lod-fix">{/**/} <div
                        data-v-06bf57f8="" className="tabs-header pr-2 pr-sm-3">
                        <div data-v-06bf57f8="" className="market-name">
                          Who Will Win The Match
                          {/**/}</div> {/**/} {/**/}
                      </div>
                      <div data-v-06bf57f8="" className="card">
                        <div data-v-06bf57f8=""
                          className="cmn-sss alltabsmain bookmarkers winnig-odds-section">
                          <div data-v-06bf57f8="" className="tabscontant-main">
                            <div data-v-06bf57f8="" className="winning-odds-price">
                              <div data-v-06bf57f8="" className="odds-label"><label
                                data-v-06bf57f8="">Auckland Aces</label> {/**/} <div
                                  data-v-06bf57f8="" className="btn lay-btn">
                                  <div data-v-06bf57f8=""
                                    className="suspended_banner_container"><span
                                      data-v-06bf57f8=""
                                      className="text-poppins px-3 py-1">SUSPENDED</span></div>
                                  {/**/}
                                </div>
                              </div>
                              <div data-v-06bf57f8="" className="odds-label"><label
                                data-v-06bf57f8="">Otago Volts</label> {/**/} <div
                                  data-v-06bf57f8="" className="btn lay-btn">
                                  <div data-v-06bf57f8=""
                                    className="suspended_banner_container"><span
                                      data-v-06bf57f8=""
                                      className="text-poppins px-3 py-1">SUSPENDED</span></div>
                                  {/**/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-v-06bf57f8=""
                          className="min_max_span px-2 px-sm-3"><span
                            data-v-06bf57f8="">Min: 100 |
                            <span data-v-06bf57f8="">Max: 25000</span>
                            {/**/}</span></div>
                      </div>
                    </div>{/**/}
                    <hr data-v-06bf57f8="" className="custom-hr-tag" />
                    <div data-v-06bf57f8="" className="row" />
                    <hr data-v-06bf57f8="" className="custom-hr-tag" /> {/**/}
                    <hr data-v-06bf57f8="" className="custom-hr-tag" /> {/**/}{/**/}<div
                      data-v-06bf57f8=""
                      className="match_odds_tab_content lod-fix">{/**/} <div
                        data-v-06bf57f8="" className="tabs-header pr-2 pr-sm-3">
                        <div data-v-06bf57f8="" className="market-name">
                          Tied Match
                          <div data-v-06bf57f8=""
                            className="active cashout-container"><span
                              data-v-06bf57f8=""><span data-v-06bf57f8=""
                                className="cashout-ck-bx"><i data-v-06bf57f8=""
                                  className="fa fa-circle" style={{
                                    cursor: 'pointer'
                                  }} /></span> <span data-v-06bf57f8=""
                                    className="sub-market-name">Cash
                                Out</span></span></div>
                        </div>
                        <div data-v-06bf57f8=""
                          className="back_lay_header_container"><span data-v-06bf57f8=""
                            className="odd_blocks back">Back</span> <span
                              data-v-06bf57f8=""
                              className="odd_blocks lay">Lay</span></div>
                      </div>
                      <div data-v-06bf57f8="" className="card">
                        <div data-v-06bf57f8="">
                          <div data-v-06bf57f8="" className="runner-row px-2 px-sm-3">
                            <div data-v-06bf57f8="">
                              <p data-v-06bf57f8=""
                                className="market-runner-name">Yes</p> {/**/}
                            </div>
                            <div data-v-06bf57f8=""
                              className="d-flex odd_blocks_container">
                              <div data-v-06bf57f8=""
                                className="suspended_banner_container"><span
                                  data-v-06bf57f8=""
                                  className="text-poppins px-3 py-1">SUSPENDED</span></div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks back d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks back d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8="" className="odd_blocks back">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8="" className="odd_blocks lay">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks lay d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks lay d-none d-md-flex">{/**/}
                                {/**/}</div>
                            </div>
                          </div>
                        </div>
                        <div data-v-06bf57f8="">
                          <div data-v-06bf57f8="" className="runner-row px-2 px-sm-3">
                            <div data-v-06bf57f8="">
                              <p data-v-06bf57f8="" className="market-runner-name">No</p>
                              {/**/}
                            </div>
                            <div data-v-06bf57f8=""
                              className="d-flex odd_blocks_container">
                              <div data-v-06bf57f8=""
                                className="suspended_banner_container"><span
                                  data-v-06bf57f8=""
                                  className="text-poppins px-3 py-1">SUSPENDED</span></div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks back d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks back d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8="" className="odd_blocks back">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8="" className="odd_blocks lay">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks lay d-none d-md-flex">{/**/}
                                {/**/}</div>
                              <div data-v-06bf57f8=""
                                className="odd_blocks lay d-none d-md-flex">{/**/}
                                {/**/}</div>
                            </div>
                          </div>
                        </div>
                        <div data-v-06bf57f8=""
                          className="min_max_span px-2 px-sm-3"><span
                            data-v-06bf57f8="">Min: 100 |
                            <span data-v-06bf57f8="">Max: 5000</span> {/**/}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-06bf57f8="" className="col-12 col-xl-3 pl-xl-1">
                <div data-v-06bf57f8="">
                  <div data-v-06bf57f8="" id="accordionTV"
                    className="accordion mb-2 d-none d-xl-block">
                    <div data-v-06bf57f8="" className="card">
                      <div data-v-06bf57f8="" id="tv" className="card-header p-0">
                        <h2 data-v-06bf57f8="" className="mb-0"><button data-v-06bf57f8=""
                          data-toggle="collapse" data-target="#collapseTV"
                          aria-expanded="true" aria-controls="collapseTV"
                          className="btn btn-block text-center"><i data-v-06bf57f8=""
                            className="fa fa-tv mr-2" />Live TV</button></h2>
                      </div>
                      <div data-v-06bf57f8="" id="collapseTV" aria-labelledby="tv"
                        data-parent="#accordionTV" className="collapse show">
                        <div data-v-06bf57f8="" className="card-body card-body-tv"
                          style={{ height: '200px' }}>
                          <div data-v-06bf57f8=""><iframe data-v-06bf57f8="" scrolling="no"
                            frameBorder={0} className="tv-iframe" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-06bf57f8="" id="accordionOCB"
                    className="accordion mb-2 d-none d-xl-block">
                    <div data-v-06bf57f8="" className="card">
                      <div data-v-06bf57f8="" id="tv" className="card-header p-0">
                        <h2 data-v-06bf57f8="" className="mb-0"><button data-v-06bf57f8=""
                          className="btn btn-block text-left"><label data-v-06bf57f8=""
                            htmlFor="OCBcheck"><input data-v-06bf57f8=""
                              type="checkbox" id="OCBcheck" className="mr-2" />
                            One Click Bet
                          </label></button></h2>
                      </div>
                      <div data-v-06bf57f8="" id="collapseOCB" aria-labelledby="tv"
                        className="collapse">
                        <div data-v-06bf57f8="" className="card-body py-2 px-1">
                          <div data-v-06bf57f8="" className="row mb-2">
                            <div data-v-06bf57f8=""
                              className="col-3 pd-0 cursor-pointer"><span
                                data-v-06bf57f8=""
                                className="one-click-bet-span">100</span></div>
                            <div data-v-06bf57f8=""
                              className="col-3 pd-0 cursor-pointer"><span
                                data-v-06bf57f8=""
                                className="one-click-bet-span">500</span></div>
                            <div data-v-06bf57f8=""
                              className="col-3 pd-0 cursor-pointer"><span
                                data-v-06bf57f8=""
                                className="one-click-bet-span">1K</span></div>
                            <div data-v-06bf57f8="" className="col-3 pd-0"><button
                              data-v-06bf57f8=""
                              className="btn one-click-action">Edit</button></div>
                          </div>
                          <div data-v-06bf57f8=""
                            className="d-flex justify-content-between text-poppins text-bold mb-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-v-06bf57f8="" id="accordionOpenBets"
                    className="accordion mb-2 d-none d-xl-block">
                    <div data-v-06bf57f8="" className="card">
                      <div data-v-06bf57f8="" id="openBets" className="card-header p-0">
                        <h2 data-v-06bf57f8="" className="mb-0"><button data-v-06bf57f8=""
                          data-toggle="collapse" data-target="#collapseOpenBets"
                          aria-expanded="true" aria-controls="collapseOpenBets"
                          className="btn btn-block text-center">Open
                          Bets</button></h2>
                      </div> <select data-v-06bf57f8=""
                        className="rounded-0 bets-select-option" />
                      <ul data-v-06bf57f8="" id="pills-tab" role="tablist"
                        className="nav nav-pills w-100 ob-nav">
                        <li data-v-06bf57f8="" className="nav-item w-50 text-center"><Link
                          data-v-06bf57f8="" to="#" className="nav-link py-1 active">
                          Match Odds </Link></li>
                        <li data-v-06bf57f8="" className="nav-item w-50 text-center"><Link
                          data-v-06bf57f8="" to="#" className="nav-link py-1"> Fancy
                        </Link></li>
                      </ul>
                      <div data-v-06bf57f8="" id="collapseOpenBets"
                        aria-labelledby="openBets" data-parent="#accordionOpenBets"
                        className="collapse show table-responsive" style={{
                          maxHeight:
                            '200px'
                        }}>
                        <table data-v-06bf57f8="" className="table table-sm m-0">
                          <thead data-v-06bf57f8="" className="thead">
                            <tr data-v-06bf57f8="">
                              <th data-v-06bf57f8="">SELECTION</th>
                              <th data-v-06bf57f8="">ODDS</th>
                              <th data-v-06bf57f8="">STAKE</th>
                              <th data-v-06bf57f8="" className="white-space-nowrap">P
                                &amp; L</th>
                              <th data-v-06bf57f8="">DATE</th>
                              <th data-v-06bf57f8="">Status</th>
                            </tr>
                          </thead>
                          <tbody data-v-06bf57f8="">
                            <tr data-v-06bf57f8="">
                              <td data-v-06bf57f8="" colSpan={5}>No records</td>
                            </tr>
                          </tbody>
                        </table>
                      </div> {/**/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Gameson