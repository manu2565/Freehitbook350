import React from "react";
import './quiz.css';
import Recomanded from "./Recomanded";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  const handlecrosse = () => {
    // Redirect to the '/dashboard' route
    navigate("/dashboard");
  };
  return (
<div
  data-v-cb9ac2ee=""
  className="position-relative main-container-user inplay_container">
  <div data-v-6cbe3307="" data-v-cb9ac2ee="">
    <div
      data-v-6cbe3307=""
      name="iframe_popup_info"
      id="iframe_popup_info"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="iframePopupInfoTitle"
      className="modal fade show"
      aria-modal="true"
      style={{ display: "block" }}>
      <div
        data-v-6cbe3307=""
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "100%", margin: 0 }}>
        <div data-v-6cbe3307="" className="modal-content">
          <div data-v-6cbe3307="" className="modal-header">
            <h5
              data-v-6cbe3307=""
              className="modal-title"
              style={{ textTransform: "capitalize" }}>
              Quiz
            </h5>{" "}
            <button
              data-v-6cbe3307=""
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="close-button close">
              <span data-v-6cbe3307="" aria-hidden="true" onClick={handlecrosse}>
                ×
              </span>
            </button>
          </div>{" "}
          <div
            data-v-6cbe3307=""
            className="modal-body modalss"
            style={{ padding: "0px !important" }}>
            <div data-v-6cbe3307="" className="d-flex flex-column text-center">
            
              <iframe
                data-v-6cbe3307=""
                id="quiz-url"
                src="//www.ludofun777.in?q=897e9a3aff599f4b47c3494a81549b7eba7f029288780fc1b8af75354af4323ff2be468a9b11814696f75e4523062edea0b0787e47755abaf9f35751e8c0a067ac427ccfbcfce2c8c36180315982e8e221264d5fbcff53bffc1977fa7a75c37799fd85b807745377cd396f3369c5f7598a661ef2f4210e2485fff956f2e4ae551f1cff3978718d22521b862ce799582ea8ea58c95a36b63e3f66983ceb896c65ae1d60d670dd80ba3e8c72c7d9c97e7a6e80059d25ab3ee21941485c653f62fee1b05b7ba5f81993c1003869a182a636528480d0cfccc44306279bc3cdf3ead815f1e449c57a2a414240ae66a3b48b7e0956d7ada75d0f4262c4b13f6cf560ef60fb62b19a64ab9888095661c625864ae8bf1a5f175bfe352a3d52ec7314ecbfd95a37bac55a55495b67e59e0fa21b8cdb8cdadf8fec9dcd9d11b3329667a9c5e9ad83e5d452590e49ad43acb72972c89b88844b3f8abdebe273b0e28634055ad817456de52cb29cf164740eea8dc4eac4157126d6a8ebcd869c25ef4dfe9b68"
                frameBorder={0}
                style={{ display: "block" }}>
  
              
              </iframe>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  <div
    data-v-cb9ac2ee=""
    id="firstLoginPopup"
    data-backdrop="static"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    className="modal fade">
    <div
      data-v-cb9ac2ee=""
      className="modal-dialog modal-lg modal-dialog-centered">
      <div data-v-cb9ac2ee="" className="modal-content bg-transparent border-0">
        <div
          data-v-cb9ac2ee=""
          className="modal-header bg-transparent border-0">
          <button
            data-v-cb9ac2ee=""
            type="button"
            id="closeFirstPopup"
            data-dismiss="modal"
            aria-label="Close"
            className="close flp-close-btn opacity-100">
            <i
              data-v-cb9ac2ee=""
              aria-hidden="true"
              className="fa fa-times"
              style={{ fontSize: 30 }} />
          </button>
        </div>{" "}
        <div
  data-v-6cbe3307=""
  className="modal-body"
  style={{ padding: "0px !important" }}
>
  <div data-v-6cbe3307="" className="d-flex flex-column text-center">
    <iframe
      data-v-6cbe3307=""
      id="quiz-url"
      src="//www.ludofun777.in?q=7d5f62927a890020afc3d76484ff8e8c5713b90a64670ceadf20f5e136796401596be4e147385ddd9bc6483e73f96111c3f9c1ab5c48b2c556b506f2ff5691236a8eec4fbb24b947747a97b1f314ab24663fb6e015a5aacc40ce435dc2fdfb892a9d204adbad234ec1c4dd08e8906201a202e1412ea36c638d027f303f3f23782c26b2005f55967bfde80a86baa50baac06792bf36730bc478b3fae655f107befc544bb26f2650bbfc653e4012ffd6bf753f2068a86625bcf3b22acd34709db85161f446610ce631ef16d41592a37434bea033df56846aa216f41569d19d48a916204ffbf702991d1f34dc25d3dce7341a404f404452aa041dcac82b5ab37ffb686a27662d13cc5a7bdb178cb2e5fe3d18aae31392dbaefab16c876efa82e1e15353b5004e842600b0c50d1d7126c4427da5d04e8c0b1f2f7a17760070de8de87be8013bee732fb83380744ed8c9e334bf1cbf56a19dc1e1e1f7944fa0856b135838e507ca041f8bd7f6f02ce6b2b5c2024a727c695a0eb371d06856dc4f6dc2"
      frameBorder={0}
      style={{ display: "block" }}
    />
    <Recomanded/>
  </div>
</div>
      </div>
    </div>
  </div>{" "}
  <div data-v-687fd205 data-v-cb9ac2ee="">
    <div data-v-687fd205 className="game_lobby_iframe">
      <span data-v-687fd205 className="lobby-iframe-close-icon">
        <img data-v-687fd205 src="/images/cross-icon.webp" />
      </span>{" "}
      <iframe data-v-687fd205 />
    </div>{" "}
    <footer data-v-687fd205 className="page-footer">
      <div data-v-687fd205 className="d-flex align-items-center h-100">
        <ul
          data-v-687fd205
          id="pills-tab"
          role="tablist"
          className="nav nav-pills d-lg-none mobile_footer_tabs">
          <li
            data-v-687fd205
            role="presentation"
            className="nav-item bootom_game_menu">
            <div
              data-v-687fd205
              className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap">
              <img
                data-v-687fd205
                src="/images/casino/yuvigames.gif"
                alt="mini"
                className="icon-promote" />
            </div>
          </li>{" "}
          {/**/}{" "}
          <li data-v-687fd205 role="presentation" className="nav-item">
            <Link
              data-v-687fd205
              to="javascript:void(0);"
              className="nav-link">
              <div data-v-687fd205 className="c-drop-container">
                <button
                  data-v-687fd205
                  className="c-drop-button w-100 bg-transparent d-flex flex-column justify-content-center h-100 align-items-center">
                  <span data-v-687fd205 className="material-icons">
                    sports_esports
                  </span>{" "}
                  <span data-v-687fd205>Sports</span>
                </button>{" "}
                <div data-v-687fd205 className="c-drop-content-container">
                  <div
                    data-v-687fd205
                    id="sa-overlay"
                    className="c-drop-overlay" />{" "}
                  <div data-v-687fd205 className="c-drop-content">
                    <div data-v-687fd205 className="c-all-events p-0">
                      <div
                        data-v-687fd205
                        id="accordionOuter"
                        className="accordion">
                        <div data-v-687fd205>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingesports">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseesports"
                                aria-expanded="false"
                                aria-controls="collapseesports"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                esports
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapseesports"
                              aria-labelledby="headingesports"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div
                              data-v-687fd205
                              id="headingmixed-martial-arts">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsemixed-martial-arts"
                                aria-expanded="false"
                                aria-controls="collapsemixed-martial-arts"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                mixed-martial-arts
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsemixed-martial-arts"
                              aria-labelledby="headingmixed-martial-arts"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headinggaelic-games">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsegaelic-games"
                                aria-expanded="false"
                                aria-controls="collapsegaelic-games"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                gaelic-games
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsegaelic-games"
                              aria-labelledby="headinggaelic-games"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingvolleyball">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsevolleyball"
                                aria-expanded="false"
                                aria-controls="collapsevolleyball"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                volleyball
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsevolleyball"
                              aria-labelledby="headingvolleyball"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnervolleyball2444">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnervolleyball2444"
                                        aria-expanded="false"
                                        aria-controls="collapseInnervolleyball2444"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Exclusive League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnervolleyball2444"
                                      aria-labelledby="headingInnervolleyball2444"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Cheonan Skywalkers vs. Daejeon
                                          Bluefangs
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Seoul KIXX vs. Gimcheon Hi-Pass
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Hebei Baoding vs. Beijing
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Galatasaray Istanbul vs. Arkas Izmir
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Zhejiang vs. Fujian
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Malmo Vk vs. Uppsala VBS
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          TUTO Volley vs. Savo Volley
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Tiikerit vs. Akaa Volley
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sodertelge VBK vs. Floby Vk
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Foinikas Syroy vs. Pigasos Polichnis
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Habo Wolley vs. Orkelljunga VK
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Futura Volley Giovani Busto Arsizio
                                          vs. Altafratte
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          GS Panionios vs. PAOK
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Trentino Volley vs. Volley Verona
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          OK Tent Obrenovac vs. Jedinstvo Stara
                                          Pazova
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          ZOK Zeleznicar Lajkovac vs. Zok Ub
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Zhetysu Zhastar vs. Aktobe
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Burevestnik Almaty vs. VC Atyrau
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headinghandball">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsehandball"
                                aria-expanded="false"
                                aria-controls="collapsehandball"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                handball
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsehandball"
                              aria-labelledby="headinghandball"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div
                              data-v-687fd205
                              id="headingaustralian-rules">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseaustralian-rules"
                                aria-expanded="false"
                                aria-controls="collapseaustralian-rules"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                australian-rules
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapseaustralian-rules"
                              aria-labelledby="headingaustralian-rules"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingice-hockey">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseice-hockey"
                                aria-expanded="false"
                                aria-controls="collapseice-hockey"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                ice-hockey
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapseice-hockey"
                              aria-labelledby="headingice-hockey"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnerice-hockey2437">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnerice-hockey2437"
                                        aria-expanded="false"
                                        aria-controls="collapseInnerice-hockey2437"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Exclusive League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnerice-hockey2437"
                                      aria-labelledby="headingInnerice-hockey2437"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Florida Panthers vs. Philadelphia
                                          Flyers
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Cape Breton Eagles vs. Charlottetown
                                          Islanders
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Detroit Red Wings vs. New York Rangers
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Fort Wayne Komets vs. Kalamazoo Wings
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Brandon Wheat Kings vs. Prince Albert
                                          Raiders
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Colorado Avalanche vs. Carolina
                                          Hurricanes
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Los Angeles Kings vs. Columbus Blue
                                          Jackets
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Prince George Cougars vs. Vancouver
                                          Giants
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Kamloops Blazers vs. Saskatoon Blades
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Kelowna Rockets vs. Spokane Chiefs
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Vancouver Canucks vs. Edmonton Oilers
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sokol Krasnoyarsk vs. HK Molot
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Kapitan Stupino vs. Mikhaylov Academy
                                          Novomoskovsk
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Czechia vs. Switzerland
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          HC Red Star Kunlun vs. Spartak Moscow
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          HK Chelny vs. Neftyanik Almetyevsk
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          PSG Berani Zlin vs. SC Kolin
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Finland vs. Sweden
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          EHC Chur vs. EHC Visp
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Dundee Stars vs. Fife Flyers
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Coventry Blaze vs. Cardiff Devils
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Vancouver Canucks vs. San Jose Sharks
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Utah Hockey Club vs. Dallas Stars
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Vegas Golden Knights vs. Anaheim Ducks
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Stalnye Lisy vs. Krasnoyarskie Rysi
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Humo Tashkent vs. HC Almaty
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Dizel Penza vs. HC Akm Tula
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          HORS-Kareliya Kondopoga vs. Russkie
                                          Vityazi
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingbasketball">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsebasketball"
                                aria-expanded="false"
                                aria-controls="collapsebasketball"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                basketball
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsebasketball"
                              aria-labelledby="headingbasketball"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnerbasketball2438">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnerbasketball2438"
                                        aria-expanded="false"
                                        aria-controls="collapseInnerbasketball2438"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Exclusive League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnerbasketball2438"
                                      aria-labelledby="headingInnerbasketball2438"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Piratas de Bogota vs. Sabios de
                                          Manizales
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          San Antonio Spurs vs. Utah Jazz
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          AD Atenas Cordoba vs. CA San Lorenzo
                                          de Almagro
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Union de Mar Del Plata vs. Racing de
                                          Chivilcoy
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          CA Lanus vs. Racing Club de Avellaneda
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Cleveland Cavaliers vs. Brooklyn Nets
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Atlanta Hawks vs. Chicago Bulls
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          LA Clippers vs. Toronto Raptors
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Shimane Susanoo Magic vs. Shiga
                                          Lakestars
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Daegu Pegasus vs. Mobis Phoebus
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Yongin Life Blue Minx vs. Cheongju KB
                                          Stars
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Seoul SK Knights vs. Goyang Skygunners
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Enisey Krasnoyarsk vs. MBA Moscow
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Taipei Fubon Braves vs. Tainan TSG
                                          Ghosthawks
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Bursaspor vs. Bahcesehir Koleji
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Cherno More IG vs. BC Spartak Pleven
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Cb Moron vs. Menorca Basquet
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Basquet Girona vs. Bilbao Basket
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Real Madrid vs. CB Gran Canaria
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Avtodor Saratov vs. Zenit Saint
                                          Petersburg
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          KK Mega Basket Belgrade vs. KK Crvena
                                          zvezda Belgrade
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ireland vs. Israel
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Mersin Buyuksehir Belediyesi vs.
                                          Anadolu Efes SK
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Greece vs. Italy
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          OGM Ormanspor vs. Cagdas Bodrum Spor
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Bears Academy vs. BK Amager
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sweden vs. Great Britain
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          BK Uralmash Yekaterinburg vs. BC
                                          Samara
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Rostock Seawolves vs. Baskets Bonn
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Estonia vs. Denmark
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          MKS Dabrowa Gornicza vs. Wilki Morskie
                                          Szczecin
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          BC Neptunas Klaipeda vs. BC Zalgiris
                                          Kaunas
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Kk Viimsi vs. BK Ogre
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Finland vs. Bulgaria
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Keravnos Strovolou Nicosia vs. AEK
                                          Larnaca
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Olimpia Milano vs. Reyer Venezia
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          AS Monaco vs. JDA Dijon Basket
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Future Team Steiermark vs. Vienna
                                          United PSV
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Germany vs. Czechia
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Luxembourg vs. Switzerland
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          CB Coruna vs. CB 1939 Canarias
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Universo Treviso Basket vs. Basket
                                          Scafati 1969
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Baskonia Vitoria-Gasteiz vs. Caprabo
                                          Lleida
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          KK Borac Cacak vs. KK Buducnost Voli
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Hapoel Haifa BC vs. Hapoel Jerusalem
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Elachem Vigevano 1955 vs.
                                          Pallacanestro Cantu
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          New Basket Brindisi vs. APU Udine
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          S.S. Avellino Basket vs. Libertas
                                          Livorno
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Austria vs. Netherlands
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Slovenia vs. Hungary
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Slovakia vs. Turkiye
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Iceland vs. Romania
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          North Macedonia vs. Portugal
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Scaligera Basket Verona vs. Nardo
                                          Basket
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Fortitudo Bologna vs. Basket Torino
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Slask Wroclaw II vs. Rosa Radom
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          BC Juventus Utena vs. BC Jonava
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          CB Breogan vs. FC Barcelona
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Pallacanestro Varese vs. Virtus
                                          Bologna
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          ASVEL Lyon-Villeurbanne vs. Nanterre
                                          92
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Spartak Subotica vs. Igokea
                                          Aleksandrovac
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Spain vs. Croatia
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          BC Olympiakos Piraeus vs. Promitheas
                                          Patras BC
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Bnei Herzliya Basket vs. Maccabi
                                          Tel-Aviv
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Dinamo Sassari vs. AS Pistoia Basket
                                          2000
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Poland vs. Belgium
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ukraine vs. Serbia
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          KK Partizan Belgrade vs. BC Dubai
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Detroit Pistons vs. Houston Rockets
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Milwaukee Bucks vs. Boston Celtics
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Indiana Pacers vs. New York Knicks
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Dallas Mavericks vs. Portland Trail
                                          Blazers
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Golden State Warriors vs. Indiana
                                          Pacers
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Denver Nuggets vs. Phoenix Suns
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Los Angeles Lakers vs. Detroit Pistons
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Adelaide 36Ers vs. Brisbane Bullets
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          KT Sonicboom vs. Mobis Phoebus
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Shenzhen Leopards vs. Shanxi Loongs
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Beijing Royal Fighters vs. Xinjiang
                                          Flying Tigers
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingbaseball">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsebaseball"
                                aria-expanded="false"
                                aria-controls="collapsebaseball"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                baseball
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsebaseball"
                              aria-labelledby="headingbaseball"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnerbaseball2440">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnerbaseball2440"
                                        aria-expanded="false"
                                        aria-controls="collapseInnerbaseball2440"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Exclusive League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnerbaseball2440"
                                      aria-labelledby="headingInnerbaseball2440"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Gigantes Del Cibao vs. Leones Del
                                          Escogido
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div
                              data-v-687fd205
                              id="headingamerican-football">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseamerican-football"
                                aria-expanded="false"
                                aria-controls="collapseamerican-football"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                american-football
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapseamerican-football"
                              aria-labelledby="headingamerican-football"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingsnooker">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsesnooker"
                                aria-expanded="false"
                                aria-controls="collapsesnooker"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                snooker
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsesnooker"
                              aria-labelledby="headingsnooker"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingvirtual-sports">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsevirtual-sports"
                                aria-expanded="false"
                                aria-controls="collapsevirtual-sports"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                virtual-sports
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsevirtual-sports"
                              aria-labelledby="headingvirtual-sports"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingcricket">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsecricket"
                                aria-expanded="false"
                                aria-controls="collapsecricket"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                cricket
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsecricket"
                              aria-labelledby="headingcricket"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket2">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket2"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket2"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Test Matches
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket2"
                                      aria-labelledby="headingInnercricket2"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Pakistan v West Indies
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sri Lanka v Australia
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket83">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket83"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket83"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        One Day Internationals
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket83"
                                      aria-labelledby="headingInnercricket83"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Hong Kong v Uganda
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket907">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket907"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket907"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Super Smash T20
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket907"
                                      aria-labelledby="headingInnercricket907"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Canterbury Kings v Northern Brave
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket5001">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket5001"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket5001"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Under-19s 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket5001"
                                      aria-labelledby="headingInnercricket5001"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          India Women U-19 V Scotland Women U-19
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket6">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket6"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket6"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        International Twenty20 Matches
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket6"
                                      aria-labelledby="headingInnercricket6"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          India v England
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket924">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket924"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket924"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        International League T20
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket924"
                                      aria-labelledby="headingInnercricket924"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Dubai Capitals v Sharjah Warriors
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Desert Vipers v Gulf Giants
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket911">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket911"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket911"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        SA20
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket911"
                                      aria-labelledby="headingInnercricket911"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Pretoria Capitals v Joburg Super Kings
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          MI Cape Town v Sunrisers Eastern Cape
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket910">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket910"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket910"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Bangladesh Premier League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket910"
                                      aria-labelledby="headingInnercricket910"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Rangpur Riders v Chittagong Kings
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket438">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket438"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket438"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Womens International Twenty20 Matches
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket438"
                                      aria-labelledby="headingInnercricket438"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Nepal Women v Netherlands Women
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnercricket70">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnercricket70"
                                        aria-expanded="false"
                                        aria-controls="collapseInnercricket70"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Australia NCL Women
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnercricket70"
                                      aria-labelledby="headingInnercricket70"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          South Australian Scorpions v
                                          Queensland Fire
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Tasmania Women v ACT Meteors
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Tasmania Women v ACT Meteors
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          South Australian Scorpions v
                                          Queensland Fire
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingtennis">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsetennis"
                                aria-expanded="false"
                                aria-controls="collapsetennis"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                tennis
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsetennis"
                              aria-labelledby="headingtennis"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnertennis5009">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnertennis5009"
                                        aria-expanded="false"
                                        aria-controls="collapseInnertennis5009"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Piracicaba Challenger 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnertennis5009"
                                      aria-labelledby="headingInnertennis5009"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Olivieri v Burruchaga
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Chazal v Dellien
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sanchez Izquierdo v Prado Angelo
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Cecchinato v Mateus Alves
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sakamoto v Joe Schwaerzler
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Murkel Dellien v Em Nava
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ju Torres v Coria
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ga Debru v Olivo
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          L Midon v Collarini
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Pellegrino v Dutra da Silva
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Marti Pujolras v Taberner
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Meligeni Alves v Mena
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sant Rodriguez Taverna v Ficovich
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Galan v Va Aboian
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Cam Ugo Carabelli v Jo Reis Da Silva
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Houkes v Gu Heide
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnertennis5006">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnertennis5006"
                                        aria-expanded="false"
                                        aria-controls="collapseInnertennis5006"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        WTA Linz 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnertennis5006"
                                      aria-labelledby="headingInnertennis5006"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          K Siniakova v El Avanesyan
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          M Sherif v Ruzic
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          C Tauson v A Kalinina
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Lulu Sun v Sorribes Tormo
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sramkova v El Cocciaretto
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          A Sasnovich v Zakharova
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Grabher v A Potapova
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Eva Lys v P Martic
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          D Yastremska v L Bronzetti
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnertennis5008">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnertennis5008"
                                        aria-expanded="false"
                                        aria-controls="collapseInnertennis5008"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Brisbane Challenger 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnertennis5008"
                                      aria-labelledby="headingInnertennis5008"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Schoolkate v Yi Zhou
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Go Nanda v Janvier
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sweeny v Dellavedova
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Matt Hulme v Bolt
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnertennis5003">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnertennis5003"
                                        aria-expanded="false"
                                        aria-controls="collapseInnertennis5003"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        WTA Singapore 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnertennis5003"
                                      aria-labelledby="headingInnertennis5003"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ma Timofeeva v X Wang
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Uchijima v Gadecki
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Re Marino v Xin Wang
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          J Teichmann v H Dart
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Taylo Townsend v Mertens
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Yu Starodubtseva v T Maria
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnertennis5004">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnertennis5004"
                                        aria-expanded="false"
                                        aria-controls="collapseInnertennis5004"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Koblenz Challenger 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnertennis5004"
                                      aria-labelledby="headingInnertennis5004"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Escoffier v Blancaneaux
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Max Rehberg v Ol Prihodko
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Zapata Miralles v Martineau
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Molleker v Brouwer
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Negritu v Maestrelli
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sels v Lu Nardi
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ju Engel v Brunold
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Zeppieri v F Arnaboldi
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Henri Squire v Kuzmanov
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnertennis5005">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnertennis5005"
                                        aria-expanded="false"
                                        aria-controls="collapseInnertennis5005"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        ATP Montpellier 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnertennis5005"
                                      aria-labelledby="headingInnertennis5005"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          J De Jong v Halys
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Eubanks v Kachmazov
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Coric v Lestienne
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          T Griekspoor v Bot Van de Zandschulp
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ma Bellucci v Pouille
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Mannarino v Gasquet
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Mayot v Rinderknech
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnertennis5007">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnertennis5007"
                                        aria-expanded="false"
                                        aria-controls="collapseInnertennis5007"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Cleveland OH Challenger 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnertennis5007"
                                      aria-labelledby="headingInnertennis5007"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Jame Trotter v Pieczonka
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Jac Ross v Juan Ca Aguilar
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Pinnington Jones v Ca Kingsley
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Ka Bigun v Albot
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Na Ponwith v Hilderbrand
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          An Ghibaudo v Tr McCormick
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Colton Smith v Et Quinn
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Mmoh v Rybakov
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Mi Braswell v Kozlov
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Karu Sell v O Ayeni
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Seggerman v Dostanic
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Je Wolf v Brooksby
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingsoccer">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsesoccer"
                                aria-expanded="false"
                                aria-controls="collapsesoccer"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                soccer
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsesoccer"
                              aria-labelledby="headingsoccer"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer43">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer43"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer43"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Egyptian Premier
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer43"
                                      aria-labelledby="headingInnersoccer43"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          National Bank v Petrojet
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Smouha v ZED FC
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer772">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer772"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer772"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Indian Super League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer772"
                                      aria-labelledby="headingInnersoccer772"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Punjab FC v Jamshedpur FC
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Northeast United v Hyderabad FC
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer134">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer134"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer134"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        South African Cup
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer134"
                                      aria-labelledby="headingInnersoccer134"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Magesi FC v Supersport Utd
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer17">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer17"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer17"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        English League 1
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer17"
                                      aria-labelledby="headingInnersoccer17"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Bolton v Northampton
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Rotherham v Cambridge Utd
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Mansfield v Crawley Town
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Stockport v Shrewsbury
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Peterborough v Wigan
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Wrexham v Stevenage
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Exeter v Leyton Orient
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Charlton v Bristol Rovers
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Lincoln v Blackpool
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Burton Albion v Reading
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Wycombe v Barnsley
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Huddersfield v Birmingham
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer64">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer64"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer64"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        English National League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer64"
                                      aria-labelledby="headingInnersoccer64"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Southend v AFC Fylde
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Rochdale v Boston Utd
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Barnet v Hartlepool
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer274">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer274"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer274"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        English Isthmian Premier League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer274"
                                      aria-labelledby="headingInnersoccer274"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Wingate and Finchley v Cray Wanderers
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer12">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer12"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer12"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        English Championship
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer12"
                                      aria-labelledby="headingInnersoccer12"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Portsmouth v Millwall
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer105">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer105"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer105"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Scottish League Two
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer105"
                                      aria-labelledby="headingInnersoccer105"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Bonnyrigg v Stranraer
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer23">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer23"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer23"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Scottish Championship
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer23"
                                      aria-labelledby="headingInnersoccer23"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Hamilton v Raith
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer35">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer35"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer35"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        English League 2
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer35"
                                      aria-labelledby="headingInnersoccer35"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Grimsby v Gillingham
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          MK Dons v Harrogate Town
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Salford City v Newport County
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Fleetwood Town v Walsall
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Crewe v AFC Wimbledon
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Chesterfield v Bromley
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Swindon v Tranmere
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Notts Co v Carlisle
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Accrington v Cheltenham
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Colchester v Port Vale
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Bradford v Morecambe
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Barrow v Doncaster
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer45">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer45"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer45"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Australian A-League Men
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer45"
                                      aria-labelledby="headingInnersoccer45"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Western United v Central Coast
                                          Mariners
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer94">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer94"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer94"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        UEFA Champions League
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer94"
                                      aria-labelledby="headingInnersoccer94"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sporting Lisbon v Bologna
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Stuttgart v Paris St-G
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Lille v Feyenoord
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Leverkusen v Sparta Prague
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Juventus v Benfica
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Inter v Monaco
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Aston Villa v Celtic
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Dinamo Zagreb v AC Milan
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Sturm Graz v RB Leipzig
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Young Boys v Crvena Zvezda
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          PSV v Liverpool
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Brest v Real Madrid
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Bayern Munich v Slovan Bratislava
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Red Bull Salzburg v Atletico Madrid
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Dortmund v Shakhtar
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Girona v Arsenal
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Barcelona v Atalanta
                                        </button>
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Man City v Club Brugge
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnersoccer13">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnersoccer13"
                                        aria-expanded="false"
                                        aria-controls="collapseInnersoccer13"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Spanish Segunda Division
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnersoccer13"
                                      aria-labelledby="headingInnersoccer13"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Tenerife v Deportivo
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingcpl-winner-cup">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsecpl-winner-cup"
                                aria-expanded="false"
                                aria-controls="collapsecpl-winner-cup"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                cpl-winner-cup
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsecpl-winner-cup"
                              aria-labelledby="headingcpl-winner-cup"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingelection">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseelection"
                                aria-expanded="false"
                                aria-controls="collapseelection"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                election
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapseelection"
                              aria-labelledby="headingelection"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion">
                                  <div data-v-687fd205 className="card">
                                    <div
                                      data-v-687fd205
                                      id="headingInnerelection2538">
                                      <button
                                        data-v-687fd205
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseInnerelection2538"
                                        aria-expanded="false"
                                        aria-controls="collapseInnerelection2538"
                                        className="btn-block text-left">
                                        <span
                                          data-v-687fd205
                                          className="plus-icon" />
                                        Delhi Assembly Election 2025
                                      </button>
                                    </div>{" "}
                                    <div
                                      data-v-687fd205
                                      id="collapseInnerelection2538"
                                      aria-labelledby="headingInnerelection2538"
                                      data-parent="#accordionInner"
                                      className="collapse">
                                      <div
                                        data-v-687fd205
                                        className="card-body pl-1 py-1 pr-0">
                                        <button
                                          data-v-687fd205
                                          className="btn-block">
                                          Delhi Assembly Election 2025
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingelection-1">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseelection-1"
                                aria-expanded="false"
                                aria-controls="collapseelection-1"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                election-1
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapseelection-1"
                              aria-labelledby="headingelection-1"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingfifa-cup-winner">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsefifa-cup-winner"
                                aria-expanded="false"
                                aria-controls="collapsefifa-cup-winner"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                fifa-cup-winner
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsefifa-cup-winner"
                              aria-labelledby="headingfifa-cup-winner"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingfifa-cup-winner">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsefifa-cup-winner"
                                aria-expanded="false"
                                aria-controls="collapsefifa-cup-winner"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                fifa-cup-winner
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsefifa-cup-winner"
                              aria-labelledby="headingfifa-cup-winner"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingkabaddi">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsekabaddi"
                                aria-expanded="false"
                                aria-controls="collapsekabaddi"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                kabaddi
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsekabaddi"
                              aria-labelledby="headingkabaddi"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                          <div data-v-687fd205 className="card">
                            <div data-v-687fd205 id="headingwinner-cup">
                              <button
                                data-v-687fd205
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsewinner-cup"
                                aria-expanded="false"
                                aria-controls="collapsewinner-cup"
                                className="btn-block text-left ss-btn">
                                <span
                                  data-v-687fd205
                                  className="plus-icon" />
                                winner-cup
                              </button>
                            </div>{" "}
                            <div
                              data-v-687fd205
                              id="collapsewinner-cup"
                              aria-labelledby="headingwinner-cup"
                              data-parent="#accordionOuter"
                              className="collapse">
                              <div data-v-687fd205 className="card-body p-1">
                                <div
                                  data-v-687fd205
                                  id="accordionInner"
                                  className="accordion" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>{" "}
          <li data-v-687fd205 role="presentation" className="nav-item">
            <Link data-v-687fd205 to="/my-market" className="nav-link">
              <div
                data-v-687fd205
                className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap">
                <span data-v-687fd205 className="material-icons">
                  storefront
                </span>{" "}
                <span data-v-687fd205>My Market</span>
              </div>
            </Link>
          </li>{" "}
          <li data-v-687fd205 role="presentation" className="nav-item">
            <Link
              data-v-687fd205
              to="/games/live-casino"
              className="nav-link">
              <div
                data-v-687fd205
                className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap">
                <span data-v-687fd205 className="material-icons">
                  extension
                </span>{" "}
                <span data-v-687fd205>Games</span>
              </div>
            </Link>
          </li>{" "}
          <li data-v-687fd205 role="presentation" className="nav-item">
            <Link
              data-v-687fd205
              data-toggle="pill"
              id="user_account_admin"
              role="tab"
              aria-selected="false"
              className="nav-link">
              <div
                data-v-687fd205
                className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap">
                <span data-v-687fd205 className="material-icons">
                  account_circle
                </span>{" "}
                <span data-v-687fd205>Account</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </div>{" "}
  {/**/}
</div>
  );
}

export default Quiz;
