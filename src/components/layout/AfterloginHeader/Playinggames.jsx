import React,{ useRef }  from "react";
import { Link } from "react-router-dom";

function Playinggames() {
  const scrollContainerRef = useRef(null);


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  // Scroll Right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };
  return (
    <div data-v-369c5808 data-v-f4c3ad76>
      <div data-v-369c5808 id="main_nav_tabs" className="d-flex mt-0">
        <ul
          data-v-369c5808
          id="main-tab"
          className="nav nav-pills mt-1 px-1 pb-2 text-center main-tab mx-auto"
          ref={scrollContainerRef}>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link ex-active active"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
              aria-current="page"
            >
              <span
                data-v-369c5808
                className="material-icons"
                style={{ fontSize: "15px" }}
              >
                play_circle_outline
              </span>
              <span data-v-369c5808 className="main-tab-name">
                Inplay
              </span>
              {/**/}
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/cricket.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                cricket
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/circket.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                tennis
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/soccer.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                soccer
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/cricket-fight"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/cricket.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Cricket Fight
              </span>
              <span data-v-369c5808 className="main-tab-count" />
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/quiz"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/quiz.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Quiz
              </span>
              <span data-v-369c5808 className="main-tab-count" />
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/casino.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Indian Casino
              </span>
              <span data-v-369c5808 className="main-tab-count" />
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/casino.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                International Casino
              </span>
              <span data-v-369c5808 className="main-tab-count" />
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/matka-market"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/matka.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Matka
              </span>
              <span data-v-369c5808 className="main-tab-count" />
            </Link>
          </li>
          {/**/}
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/cricket.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                cricket
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/circket.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                tennis
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/soccer.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                soccer
              </span>
            </Link>
          </li>
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/circket.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Snooker
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/american-football.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                American Football
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/baseball.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Baseball
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/basketball.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Basketball
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/ice-hockey.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Ice Hockey
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/australian-rules.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Australian Rules
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/handball.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Handball
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/volleyball.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Volleyball
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/gaelic-games.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Gaelic Games
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/mixed-martial-arts.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Mixed Martial Arts
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/esports.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Esports
              </span>
            </Link>
          </li>
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/fifa-cup-winner.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                FIFA CUP WINNER
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/cpl-winner-cup.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                WINNER CUP
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/circket"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/election-1.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                ELECTION
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/election.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                ELECTION
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/winner-cup.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                WINNER CUP
              </span>
            </Link>
          </li>
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          {/**/}
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/kabaddi.webp"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                Kabaddi
              </span>
            </Link>
          </li>
          <li data-v-369c5808 className="nav-item">
            <Link
              data-v-369c5808
              to="/indian-casino"
              className="nav-link"
              role="tab"
              data-toggle="pill"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <img
                data-v-369c5808
                src="assets/images/fifa-cup-winner.png"
                alt=""
                className="main-tab-image"
              />
              <span data-v-369c5808 className="main-tab-name">
                FIFA CUP WINNER
              </span>c
            </Link>
          </li>
        </ul>
        <button data-v-369c5808 id="scrollLeft" className="scroll-btn left" onClick={scrollLeft}>
          <span data-v-369c5808 className="material-icons">
            navigate_before
          </span>
        </button>
        <button data-v-369c5808 id="scrollRight" className="scroll-btn right" onClick={scrollRight}>
          <span data-v-369c5808 className="material-icons">
            navigate_next
          </span>
        </button>
      </div>
    </div>
  );
}

export default Playinggames;
