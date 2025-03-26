import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Afooter() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false); // Sidebar state, default to closed
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
    setSidebarVisible((prevState) => !prevState); // Toggle sidebar visibility when clicking "Account"
  };

  const closeDropdown = (e) => {
    // Close dropdown if click happens outside
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
      setSidebarVisible(false); // Close the sidebar when clicking outside
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);
  const handlesport = () => {
    console.log("Hello");
  };
  return (
    <div data-v-cb9ac2ee className="page">
      <footer data-v-687fd205 className="page-footer">
        <div data-v-687fd205 className="d-flex align-items-center h-100">
          <ul
            data-v-687fd205
            id="pills-tab"
            role="tablist"
            className="nav nav-pills d-lg-none mobile_footer_tabs"
          >
            <li
              data-v-687fd205
              role="presentation"
              className="nav-item bootom_game_menu"
            >
              <div
                data-v-687fd205
                className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap"
              >
                <img
                  data-v-687fd205
                  src="assets/images/yuvigames.webp"
                  alt="mini"
                  className="icon-promote"
                />
              </div>
            </li>
            {/**/}
            <li data-v-687fd205 role="presentation" className="nav-item">
              <Link  data-v-687fd205 to="/dashboard" className="nav-link">
                <div data-v-687fd205 className="c-drop-container">
                  <button
                    data-v-687fd205
                    className="c-drop-button w-100 bg-transparent d-flex flex-column justify-content-center h-100 align-items-center"
                  >
                    <span data-v-687fd205 className="material-icons">
                      sports_esports
                    </span>
                    <span data-v-687fd205 onClick={handlesport}>
                      Sports
                    </span>
                  </button>
                  <div data-v-687fd205 className="c-drop-content-container">
                    <div
                      data-v-687fd205
                      id="sa-overlay"
                      className="c-drop-overlay"
                    />
                    <div data-v-687fd205 className="c-drop-content">
                      <div data-v-687fd205 className="c-all-events p-0">
                        <div
                          data-v-687fd205
                          id="accordionOuter"
                          className="accordion"
                        >
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  esports
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapseesports"
                                aria-labelledby="headingesports"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
                                </div>
                              </div>
                            </div>
                            <div data-v-687fd205 className="card">
                              <div
                                data-v-687fd205
                                id="headingmixed-martial-arts"
                              >
                                <button
                                  data-v-687fd205
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapsemixed-martial-arts"
                                  aria-expanded="false"
                                  aria-controls="collapsemixed-martial-arts"
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  mixed-martial-arts
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsemixed-martial-arts"
                                aria-labelledby="headingmixed-martial-arts"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  gaelic-games
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsegaelic-games"
                                aria-labelledby="headinggaelic-games"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  volleyball
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsevolleyball"
                                aria-labelledby="headingvolleyball"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnervolleyball2444"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnervolleyball2444"
                                          aria-expanded="false"
                                          aria-controls="collapseInnervolleyball2444"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Exclusive League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnervolleyball2444"
                                        aria-labelledby="headingInnervolleyball2444"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cheonan Skywalkers vs. Daejeon
                                            Bluefangs
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Seoul KIXX vs. Gimcheon Hi-Pass
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Hebei Baoding vs. Beijing
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Galatasaray Istanbul vs. Arkas Izmir
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Zhejiang vs. Fujian
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Malmo Vk vs. Uppsala VBS
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            TUTO Volley vs. Savo Volley
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Tiikerit vs. Akaa Volley
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sodertelge VBK vs. Floby Vk
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Foinikas Syroy vs. Pigasos Polichnis
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Habo Wolley vs. Orkelljunga VK
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Futura Volley Giovani Busto Arsizio
                                            vs. Altafratte
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            GS Panionios vs. PAOK
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Trentino Volley vs. Volley Verona
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            OK Tent Obrenovac vs. Jedinstvo
                                            Stara Pazova
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            ZOK Zeleznicar Lajkovac vs. Zok Ub
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Zhetysu Zhastar vs. Aktobe
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  handball
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsehandball"
                                aria-labelledby="headinghandball"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
                                </div>
                              </div>
                            </div>
                            <div data-v-687fd205 className="card">
                              <div data-v-687fd205 id="headingaustralian-rules">
                                <button
                                  data-v-687fd205
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseaustralian-rules"
                                  aria-expanded="false"
                                  aria-controls="collapseaustralian-rules"
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  australian-rules
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapseaustralian-rules"
                                aria-labelledby="headingaustralian-rules"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  ice-hockey
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapseice-hockey"
                                aria-labelledby="headingice-hockey"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnerice-hockey2437"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnerice-hockey2437"
                                          aria-expanded="false"
                                          aria-controls="collapseInnerice-hockey2437"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Exclusive League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnerice-hockey2437"
                                        aria-labelledby="headingInnerice-hockey2437"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Florida Panthers vs. Philadelphia
                                            Flyers
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cape Breton Eagles vs. Charlottetown
                                            Islanders
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Detroit Red Wings vs. New York
                                            Rangers
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Fort Wayne Komets vs. Kalamazoo
                                            Wings
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Brandon Wheat Kings vs. Prince
                                            Albert Raiders
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Colorado Avalanche vs. Carolina
                                            Hurricanes
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Los Angeles Kings vs. Columbus Blue
                                            Jackets
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Prince George Cougars vs. Vancouver
                                            Giants
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Kamloops Blazers vs. Saskatoon
                                            Blades
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Kelowna Rockets vs. Spokane Chiefs
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Vancouver Canucks vs. Edmonton
                                            Oilers
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sokol Krasnoyarsk vs. HK Molot
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Kapitan Stupino vs. Mikhaylov
                                            Academy Novomoskovsk
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Czechia vs. Switzerland
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            HC Red Star Kunlun vs. Spartak
                                            Moscow
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            HK Chelny vs. Neftyanik Almetyevsk
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            PSG Berani Zlin vs. SC Kolin
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Finland vs. Sweden
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            EHC Chur vs. EHC Visp
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Dundee Stars vs. Fife Flyers
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Coventry Blaze vs. Cardiff Devils
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Vancouver Canucks vs. San Jose
                                            Sharks
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Utah Hockey Club vs. Dallas Stars
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Vegas Golden Knights vs. Anaheim
                                            Ducks
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Stalnye Lisy vs. Krasnoyarskie Rysi
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Humo Tashkent vs. HC Almaty
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Dizel Penza vs. HC Akm Tula
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  basketball
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsebasketball"
                                aria-labelledby="headingbasketball"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnerbasketball2438"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnerbasketball2438"
                                          aria-expanded="false"
                                          aria-controls="collapseInnerbasketball2438"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Exclusive League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnerbasketball2438"
                                        aria-labelledby="headingInnerbasketball2438"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Piratas de Bogota vs. Sabios de
                                            Manizales
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            San Antonio Spurs vs. Utah Jazz
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            AD Atenas Cordoba vs. CA San Lorenzo
                                            de Almagro
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Union de Mar Del Plata vs. Racing de
                                            Chivilcoy
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            CA Lanus vs. Racing Club de
                                            Avellaneda
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cleveland Cavaliers vs. Brooklyn
                                            Nets
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Atlanta Hawks vs. Chicago Bulls
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            LA Clippers vs. Toronto Raptors
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Shimane Susanoo Magic vs. Shiga
                                            Lakestars
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Daegu Pegasus vs. Mobis Phoebus
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Yongin Life Blue Minx vs. Cheongju
                                            KB Stars
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Seoul SK Knights vs. Goyang
                                            Skygunners
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Enisey Krasnoyarsk vs. MBA Moscow
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Taipei Fubon Braves vs. Tainan TSG
                                            Ghosthawks
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Bursaspor vs. Bahcesehir Koleji
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cherno More IG vs. BC Spartak Pleven
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cb Moron vs. Menorca Basquet
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Basquet Girona vs. Bilbao Basket
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Real Madrid vs. CB Gran Canaria
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Avtodor Saratov vs. Zenit Saint
                                            Petersburg
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            KK Mega Basket Belgrade vs. KK
                                            Crvena zvezda Belgrade
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Ireland vs. Israel
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Mersin Buyuksehir Belediyesi vs.
                                            Anadolu Efes SK
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Greece vs. Italy
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            OGM Ormanspor vs. Cagdas Bodrum Spor
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Bears Academy vs. BK Amager
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sweden vs. Great Britain
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            BK Uralmash Yekaterinburg vs. BC
                                            Samara
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Rostock Seawolves vs. Baskets Bonn
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Estonia vs. Denmark
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            MKS Dabrowa Gornicza vs. Wilki
                                            Morskie Szczecin
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            BC Neptunas Klaipeda vs. BC Zalgiris
                                            Kaunas
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Kk Viimsi vs. BK Ogre
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Finland vs. Bulgaria
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Keravnos Strovolou Nicosia vs. AEK
                                            Larnaca
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Olimpia Milano vs. Reyer Venezia
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            AS Monaco vs. JDA Dijon Basket
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Future Team Steiermark vs. Vienna
                                            United PSV
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Germany vs. Czechia
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Luxembourg vs. Switzerland
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            CB Coruna vs. CB 1939 Canarias
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Universo Treviso Basket vs. Basket
                                            Scafati 1969
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Baskonia Vitoria-Gasteiz vs. Caprabo
                                            Lleida
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            KK Borac Cacak vs. KK Buducnost Voli
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Hapoel Haifa BC vs. Hapoel Jerusalem
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Elachem Vigevano 1955 vs.
                                            Pallacanestro Cantu
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            New Basket Brindisi vs. APU Udine
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            S.S. Avellino Basket vs. Libertas
                                            Livorno
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Austria vs. Netherlands
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Slovenia vs. Hungary
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Slovakia vs. Turkiye
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Iceland vs. Romania
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            North Macedonia vs. Portugal
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Scaligera Basket Verona vs. Nardo
                                            Basket
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Fortitudo Bologna vs. Basket Torino
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Slask Wroclaw II vs. Rosa Radom
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            BC Juventus Utena vs. BC Jonava
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            CB Breogan vs. FC Barcelona
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Pallacanestro Varese vs. Virtus
                                            Bologna
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            ASVEL Lyon-Villeurbanne vs. Nanterre
                                            92
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Spartak Subotica vs. Igokea
                                            Aleksandrovac
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Spain vs. Croatia
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            BC Olympiakos Piraeus vs. Promitheas
                                            Patras BC
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Bnei Herzliya Basket vs. Maccabi
                                            Tel-Aviv
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Dinamo Sassari vs. AS Pistoia Basket
                                            2000
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Poland vs. Belgium
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Ukraine vs. Serbia
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            KK Partizan Belgrade vs. BC Dubai
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Detroit Pistons vs. Houston Rockets
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Milwaukee Bucks vs. Boston Celtics
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Indiana Pacers vs. New York Knicks
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Dallas Mavericks vs. Portland Trail
                                            Blazers
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Golden State Warriors vs. Indiana
                                            Pacers
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Denver Nuggets vs. Phoenix Suns
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Los Angeles Lakers vs. Detroit
                                            Pistons
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Adelaide 36Ers vs. Brisbane Bullets
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            KT Sonicboom vs. Mobis Phoebus
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Shenzhen Leopards vs. Shanxi Loongs
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  baseball
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsebaseball"
                                aria-labelledby="headingbaseball"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnerbaseball2440"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnerbaseball2440"
                                          aria-expanded="false"
                                          aria-controls="collapseInnerbaseball2440"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Exclusive League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnerbaseball2440"
                                        aria-labelledby="headingInnerbaseball2440"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
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
                                id="headingamerican-football"
                              >
                                <button
                                  data-v-687fd205
                                  type="button"
                                  data-toggle="collapse"
                                  data-target="#collapseamerican-football"
                                  aria-expanded="false"
                                  aria-controls="collapseamerican-football"
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  american-football
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapseamerican-football"
                                aria-labelledby="headingamerican-football"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  snooker
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsesnooker"
                                aria-labelledby="headingsnooker"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  virtual-sports
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsevirtual-sports"
                                aria-labelledby="headingvirtual-sports"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  cricket
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsecricket"
                                aria-labelledby="headingcricket"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket906"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket906"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket906"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Womens Super Smash T20
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket906"
                                        aria-labelledby="headingInnercricket906"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Auckland Hearts Women v Central
                                            Hinds Women
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Otago Sparks Women v Northern Brave
                                            Women
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Central Hinds Women v Canterbury
                                            Magicians Women
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket924"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket924"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket924"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          International League T20
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket924"
                                        aria-labelledby="headingInnercricket924"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Abu Dhabi Knight Riders v Sharjah
                                            Warriors
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Desert Vipers v MI Emirates
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket911"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket911"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket911"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          SA20
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket911"
                                        aria-labelledby="headingInnercricket911"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Paarl Royals v MI Cape Town
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Joburg Super Kings v Pretoria
                                            Capitals
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Durban Super Giants v Sunrisers
                                            Eastern Cape
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket4996"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket4996"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket4996"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Jamaica T10
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket4996"
                                        aria-labelledby="headingInnercricket4996"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Surrey Royals v Surrey Kings
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cornwall Warriors v United Stars
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket907"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket907"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket907"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Super Smash T20
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket907"
                                        aria-labelledby="headingInnercricket907"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Otago Volts v Northern Brave
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket910"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket910"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket910"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Bangladesh Premier League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket910"
                                        aria-labelledby="headingInnercricket910"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Fortune Barishal v Dhaka Capital
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Khulna Tigers v Chittagong Kings
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Durbar Rajshahi v Sylhet Strikers
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket876"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket876"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket876"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Vijay Hazare Trophy
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket876"
                                        aria-labelledby="headingInnercricket876"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Vidarbha v Maharashtra
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket883"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket883"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket883"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Twenty20 Big Bash
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket883"
                                        aria-labelledby="headingInnercricket883"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Brisbane Heat v Hobart Hurricanes
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket468"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket468"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket468"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Womens One Day Internationals
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket468"
                                        aria-labelledby="headingInnercricket468"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Australia Women v England Women
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket2"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket2"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket2"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Test Matches
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket2"
                                        aria-labelledby="headingInnercricket2"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Pakistan v West Indies
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnercricket6"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnercricket6"
                                          aria-expanded="false"
                                          aria-controls="collapseInnercricket6"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          International Twenty20 Matches
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnercricket6"
                                        aria-labelledby="headingInnercricket6"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            India v England
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  tennis
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsetennis"
                                aria-labelledby="headingtennis"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnertennis4995"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnertennis4995"
                                          aria-expanded="false"
                                          aria-controls="collapseInnertennis4995"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Buenos Aires Challenger 2025
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnertennis4995"
                                        aria-labelledby="headingInnertennis4995"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sant Rodriguez Taverna v Mateus
                                            Alves
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Go Bueno v Ga Debru
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Jo Reis Da Silva v Murkel Dellien
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Burruchaga v Villanueva
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Em Nava v Houkes
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Olivieri v D Vallejo
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Kicker v Jua Varillas
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnertennis2551"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnertennis2551"
                                          aria-expanded="false"
                                          aria-controls="collapseInnertennis2551"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Oeiras Challenger 2025
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnertennis2551"
                                        aria-labelledby="headingInnertennis2551"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Ferreira Silva v Yevseyev
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al Kovacevic v Lajal
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Zhukayev v Butvilas
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Ritschard v Pe Araujo
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Galarneau v Elias
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Er Kirkin v Ha Medjedovic
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnertennis2554"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnertennis2554"
                                          aria-expanded="false"
                                          aria-controls="collapseInnertennis2554"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Women's Australian Open 2025
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnertennis2554"
                                        aria-labelledby="headingInnertennis2554"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Kovinic v Yastremska
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Jabeur v Osorio
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Yaf Wang v D Kasatkina
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            E Raducanu v A Anisimova
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sramkova v Iga Swiatek
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Emm Navarro v X Wang
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Putintseva v S Zhang
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            E Rybakina v I Jović
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            J Cristian v L Bronzetti
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            B Haddad Maia v Er Andreeva
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Eva Lys v V Gracheva
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Svitolina v Dolehide
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            V Kudermetova v Boulter
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Aiava v D Collins
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Keys v E Ruse
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Zarazua v J Paolini
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnertennis2553"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnertennis2553"
                                          aria-expanded="false"
                                          aria-controls="collapseInnertennis2553"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Men's Australian Open 2025
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnertennis2553"
                                        aria-labelledby="headingInnertennis2553"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Hurkacz v Kecmanovic
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cerundolo v Fa Acosta
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Shapovalov v Musetti
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Altmaier v Monfils
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            G Diallo v Khachanov
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Be Shelton v Carreno Busta
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Fritz v Garin
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Tr Boyer v De Minaur
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Moutet v Krueger
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Giron v To Etcheverry
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al Michelsen v Jame McCabe
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Marozsan v Tiafoe
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Joa Fonseca v Sonego
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Berrettini v Hol Rune
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sinner v Schoolkate
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Le Tien v Medvedev
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnertennis2542"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnertennis2542"
                                          aria-expanded="false"
                                          aria-controls="collapseInnertennis2542"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Nonthaburi Challenger 2025
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnertennis2542"
                                        aria-labelledby="headingInnertennis2542"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Spizzirri v Grenier
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sh Mochizuki v Cl Tabur
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Co Wong v Bra Holt
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Yu Shimizu v Svajda
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  soccer
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsesoccer"
                                aria-labelledby="headingsoccer"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer400"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer400"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer400"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          French Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer400"
                                        aria-labelledby="headingInnersoccer400"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Haguenau v Dunkerque
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Bourgoin Jallieu v Lyon
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            ESTAC Troyes v Rennes
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Quevilly Rouen v Angers
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Toulouse v Laval
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Thaon v Strasbourg
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Stade Briochin v Annecy
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Cannes v Lorient
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Brest v Nantes
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Espaly v Paris St-G
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer104"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer104"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer104"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Kuwaiti Premier League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer104"
                                        aria-labelledby="headingInnersoccer104"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Khaitan v Al Nasar (KUW)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al Salmiyah v Kazma SC
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer925"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer925"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer925"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Saudi Professional League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer925"
                                        aria-labelledby="headingInnersoccer925"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Shabab (KSA) v Al Riyadh SC
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Dhamk v Al-Ettifaq
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Kholood Club v Al Ahli
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Akhdoud v Al-Feiha
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Hilal v Al-Fateh (KSA)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Ittihad v Al-Raed (KSA)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Khaleej Saihat v Al Orubah
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Wahda (KSA) v Al-Quadisiya (KSA)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Taawoun Buraidah v Al Nassr
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer343"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer343"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer343"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Israeli Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer343"
                                        aria-labelledby="headingInnersoccer343"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            AS Nordia Jerusalem v FC Ashdod
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Hapoel Beer Sheva v Hapoel Eran
                                            Hadera
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Maccabi Tel Aviv v Maccabi Bnei
                                            Raina
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Hapoel Haifa v Hapoel Tel Aviv
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Hapoel Ramat Gan v Ironi Ramat
                                            HaSharon
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer43"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer43"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer43"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Egyptian Premier
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer43"
                                        aria-labelledby="headingInnersoccer43"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al Ahly Cairo v El Gounah
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Zamalek v Haras El Hodood
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Al-Masry v Pharco FC
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer345"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer345"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer345"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Greek Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer345"
                                        aria-labelledby="headingInnersoccer345"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Panathinaikos v Olympiakos
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer18"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer18"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer18"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          German Bundesliga
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer18"
                                        aria-labelledby="headingInnersoccer18"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Bochum v St Pauli
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Stuttgart v RB Leipzig
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Union Berlin v Augsburg
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Werder Bremen v FC Heidenheim
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Bayern Munich v Hoffenheim
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Eintracht Frankfurt v Dortmund
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer328"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer328"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer328"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Dutch Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer328"
                                        aria-labelledby="headingInnersoccer328"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Go Ahead Eagles v FC Twente
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            RKC Waalwijk v FC Utrecht
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Rijnsburgse Boys v Feyenoord
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            De Graafschap v Heracles
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Quick Boys v Heerenveen
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer323"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer323"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer323"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          English Women's FA Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer323"
                                        aria-labelledby="headingInnersoccer323"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Blackburn Rovers (W) v Portsmouth
                                            (W)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Leicester City (W) v Stoke City (W)
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer329"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer329"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer329"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Scottish Women's Matches
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer329"
                                        aria-labelledby="headingInnersoccer329"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Dundee United (W) v Hibernian (W)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Celtic (W) v Aberdeen (W)
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer27"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer27"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer27"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          English Premier League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer27"
                                        aria-labelledby="headingInnersoccer27"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Newcastle v Wolves
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Leicester v Crystal Palace
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Everton v Aston Villa
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Arsenal v Tottenham
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Ipswich v Brighton
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Man Utd v Southampton
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer64"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer64"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer64"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          English National League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer64"
                                        aria-labelledby="headingInnersoccer64"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            AFC Fylde v Oldham
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sutton Utd v Wealdstone
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Boston Utd v Southend
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Yeovil v Gateshead
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer338"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer338"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer338"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Belgian Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer338"
                                        aria-labelledby="headingInnersoccer338"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Club Brugge v Genk
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer12"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer12"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer12"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          English Championship
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer12"
                                        aria-labelledby="headingInnersoccer12"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Blackburn v Portsmouth
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Burnley v Sunderland
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer20"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer20"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer20"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Italian Serie A
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer20"
                                        aria-labelledby="headingInnersoccer20"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Inter v Bologna
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Roma v Genoa
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer60"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer60"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer60"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Scottish Premiership
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer60"
                                        aria-labelledby="headingInnersoccer60"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Rangers v Aberdeen
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer346"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer346"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer346"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Portuguese Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer346"
                                        aria-labelledby="headingInnersoccer346"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Braga v Lusitano
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer603"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer603"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer603"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Mexican Women's Matches
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer603"
                                        aria-labelledby="headingInnersoccer603"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Pachuca (W) v Cruz Azul (W)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Atletico San Luis (W) v Monterrey
                                            (W)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Puebla FC (W) v Club Leon FC (W)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Queretaro (W) v Mazatlan FC(W)
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Club Necaxa (W) v CF America (W)
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer772"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer772"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer772"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Indian Super League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer772"
                                        aria-labelledby="headingInnersoccer772"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Punjab FC v Mumbai City FC
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Jamshedpur FC v Mohun Bagan Super
                                            Giants
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer17"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer17"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer17"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          English League 1
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer17"
                                        aria-labelledby="headingInnersoccer17"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Shrewsbury v Wrexham
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer45"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer45"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer45"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Australian A-League Men
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer45"
                                        aria-labelledby="headingInnersoccer45"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Western United v Newcastle Jets
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Western Sydney Wanderers v Central
                                            Coast Mariners
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer81"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer81"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer81"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Australian A-League Women
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer81"
                                        aria-labelledby="headingInnersoccer81"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Western United (W) v Melbourne City
                                            (W)
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer650"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer650"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer650"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Azerbaijan Premier League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer650"
                                        aria-labelledby="headingInnersoccer650"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Qarabag FK v Shamakhi FK
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer26"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer26"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer26"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Turkish Super League
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer26"
                                        aria-labelledby="headingInnersoccer26"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Hatayspor v Galatasaray
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer19"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer19"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer19"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          German Bundesliga 2
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer19"
                                        aria-labelledby="headingInnersoccer19"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Fortuna Dusseldorf v SV Darmstadt
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Jahn Regensburg v Hannover
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer11"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer11"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer11"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          French Ligue 1
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer11"
                                        aria-labelledby="headingInnersoccer11"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Montpellier v Monaco
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Lille v Nice
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer57"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer57"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer57"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          French Ligue 2
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer57"
                                        aria-labelledby="headingInnersoccer57"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Red Star v Pau
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Amiens v Bastia
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            AC Ajaccio v Caen
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Grenoble v Martigues
                                          </button>
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Guingamp v Rodez
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer126"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer126"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer126"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          English FA Women's Super League 1
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer126"
                                        aria-labelledby="headingInnersoccer126"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Liverpool (W) v Brighton (W)
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer55"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer55"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer55"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Italian Serie B
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer55"
                                        aria-labelledby="headingInnersoccer55"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Sampdoria v Cesena
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer13"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer13"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer13"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Spanish Segunda Division
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer13"
                                        aria-labelledby="headingInnersoccer13"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            FC Cartagena v Oviedo
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer105"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer105"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer105"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Scottish League Two
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer105"
                                        aria-labelledby="headingInnersoccer105"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Clyde v Edinburgh City
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer35"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer35"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer35"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          English League 2
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer35"
                                        aria-labelledby="headingInnersoccer35"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Harrogate Town v Cheltenham
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer129"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer129"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer129"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Scottish FA Cup
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer129"
                                        aria-labelledby="headingInnersoccer129"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Brechin v Hearts
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer24"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer24"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer24"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Spanish La Liga
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer24"
                                        aria-labelledby="headingInnersoccer24"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Espanyol v Valladolid
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnersoccer22"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnersoccer22"
                                          aria-expanded="false"
                                          aria-controls="collapseInnersoccer22"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Portuguese Primeira Liga
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnersoccer22"
                                        aria-labelledby="headingInnersoccer22"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Benfica v Famalicao
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  cpl-winner-cup
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsecpl-winner-cup"
                                aria-labelledby="headingcpl-winner-cup"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  election
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapseelection"
                                aria-labelledby="headingelection"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnerelection2538"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnerelection2538"
                                          aria-expanded="false"
                                          aria-controls="collapseInnerelection2538"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Delhi Assembly Election 2025
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnerelection2538"
                                        aria-labelledby="headingInnerelection2538"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  election-1
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapseelection-1"
                                aria-labelledby="headingelection-1"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  fifa-cup-winner
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsefifa-cup-winner"
                                aria-labelledby="headingfifa-cup-winner"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  fifa-cup-winner
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsefifa-cup-winner"
                                aria-labelledby="headingfifa-cup-winner"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  kabaddi
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsekabaddi"
                                aria-labelledby="headingkabaddi"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  />
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
                                  className="btn-block text-left ss-btn"
                                >
                                  <span data-v-687fd205 className="plus-icon" />
                                  winner-cup
                                </button>
                              </div>
                              <div
                                data-v-687fd205
                                id="collapsewinner-cup"
                                aria-labelledby="headingwinner-cup"
                                data-parent="#accordionOuter"
                                className="collapse"
                              >
                                <div data-v-687fd205 className="card-body p-1">
                                  <div
                                    data-v-687fd205
                                    id="accordionInner"
                                    className="accordion"
                                  >
                                    <div data-v-687fd205 className="card">
                                      <div
                                        data-v-687fd205
                                        id="headingInnerwinner-cup2527"
                                      >
                                        <button
                                          data-v-687fd205
                                          type="button"
                                          data-toggle="collapse"
                                          data-target="#collapseInnerwinner-cup2527"
                                          aria-expanded="false"
                                          aria-controls="collapseInnerwinner-cup2527"
                                          className="btn-block text-left"
                                        >
                                          <span
                                            data-v-687fd205
                                            className="plus-icon"
                                          />
                                          Big Bash League 2024-25
                                        </button>
                                      </div>
                                      <div
                                        data-v-687fd205
                                        id="collapseInnerwinner-cup2527"
                                        aria-labelledby="headingInnerwinner-cup2527"
                                        data-parent="#accordionInner"
                                        className="collapse"
                                      >
                                        <div
                                          data-v-687fd205
                                          className="card-body pl-1 py-1 pr-0"
                                        >
                                          <button
                                            data-v-687fd205
                                            className="btn-block"
                                          >
                                            Bookmaker Big Bash CUP
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link >
            </li>
            <li data-v-687fd205 role="presentation" className="nav-item">
              <Link  data-v-687fd205 to="my-market" className="nav-link">
                <div
                  data-v-687fd205
                  className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap"
                >
                  <div data-v-687fd205 className="material-icons">
                    storefront
                  </div>
                  <span className="material-symbols-outlined"></span>
                  <span data-v-687fd205>My Market</span>
                </div>
              </Link >
            </li>
            <li data-v-687fd205 role="presentation" className="nav-item">
              <Link  data-v-687fd205 to="/indian-casino" className="nav-link">
                <div
                  data-v-687fd205
                  className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap"
                >
                  <span data-v-687fd205 className="material-icons">
                    extension
                  </span>
                  <span data-v-687fd205>Games</span>
                </div>
              </Link >
            </li>
            <li data-v-687fd205 role="presentation" className="nav-item">
              <Link 
                data-v-687fd205
                data-toggle="pill"
                id="user_account_admin"
                role="tab"
                aria-selected="false"
                className="nav-link"
              >
                <div
                  data-v-687fd205
                  className="d-flex flex-column justify-content-center h-100 align-items-center text-nowrap"
                >
                  <span data-v-687fd205 className="material-icons account-icons" style={{marginTop:"10px"}}>
                    account_circle
                  </span>

                  <span data-v-687fd205 ref={dropdownRef} style={{marginTop:"-10px"}}>
                    <Link
                      role="button"
                      to="#"
                      id="accountDropdown"
                      onClick={toggleDropdown}
                      className={`nav-link  ${
                        dropdownOpen ? "active" : ""
                      }`}
                    >
                      Account
                    </Link>

                  </span>
                </div>
              </Link >
            </li>
          </ul>
        </div>
      </footer>
      {dropdownOpen && (
        <div
          id="c"
          className="mobile_sidenav d-block d-lg-none p-2 show"
        >
          {/* Dropdown Content */}
          <div
            tabIndex={-1}
            className="sidenav-overlay"
            onClick={closeDropdown}
          />
          <div className="d-flex mb-2 pl-2">
            <div
              id="hamburger"
              className={`hamburger ${
                sidebarVisible ? "is-active" : ""
              }`}
              onClick={closeDropdown}
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </div>
          </div>

          <div className="d-flex">
            <div className="col-8">
              <p className="font-size-12">demouser1 (user)</p>
              <span className="fs-10">
                Last Login: Jan 22nd 2025, 10:47:44 AM
              </span>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <Link
                title="Log Out"
                to="/"
                onClick={closeDropdown}
              >
                LOGOUT
              </Link>
            </div>
          </div>
          <hr className="border-white" />

          {/* Dropdown Osptions */}
          <div className="text-center">
            <h6>Accounts</h6>


            
            <ul className="d-flex flex-column mb-3">
              <li>
                <Link
                  to="/my-market"
                  className="mobile_sidenav_links ex-active active"
                  onClick={closeDropdown}
                >
                  <span className="material-icons">
                    storefront
                  </span>
                  <span>My Market</span>
                </Link>
              </li>
              <li data-v-f4c3ad76=""> <Link  data-v-f4c3ad76="" to="/favourites" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">push_pin</span> <span data-v-f4c3ad76="">Pinned</span></Link ></li>
              <li data-v-f4c3ad76=""><Link  data-v-f4c3ad76="" to="/statements" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">receipt_long</span> <span data-v-f4c3ad76="">Statement</span></Link ></li>
              <li data-v-f4c3ad76=""><div data-v-f4c3ad76="" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">military_tech</span> <span data-v-f4c3ad76="">Winning</span> <span data-v-f4c3ad76="" className="font-size-14 ml-auto amount text-danger"><h6 data-v-f4c3ad76="" className="d-inline-block mb-0">
                PTI
              </h6>
              1,615.98
            </span></div></li>

            <li data-v-f4c3ad76=""><div data-v-f4c3ad76="" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">credit_score</span> <span data-v-f4c3ad76="">Credit Reference</span> <span data-v-f4c3ad76="" className="ml-auto amount">1,616.00</span></div></li>
            <li data-v-f4c3ad76=""><Link  data-v-f4c3ad76="" to="/profit-loss" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">exposure</span> <span data-v-f4c3ad76="">Profit &amp; Loss</span></Link ></li>

            <li data-v-f4c3ad76="" className="d-none mobile-show"><Link  data-v-f4c3ad76="" to="/chats" className="nav-link-chat bell-btn mr-3 ml-3"><span data-v-f4c3ad76="" className="noti-count">0</span> <i data-v-f4c3ad76="" className="fas fa-comment chat-icon"></i> <span data-v-f4c3ad76="" className="ml-4">Chat</span></Link ></li>
            <li data-v-f4c3ad76="" className="d-none mobile-show"><button data-v-f4c3ad76="" data-toggle="modal" data-target="#infoModal" className="bg-transparent bell-btn ml-3"><span data-v-f4c3ad76="" className="noti-count">0</span> <i data-v-f4c3ad76="" className="fas fa-bell fa-lg"></i> <span data-v-f4c3ad76="" className="ml-4">Notification</span></button></li>
            </ul>
          </div>
          <hr data-v-f4c3ad76="" className="border-white"></hr>
          <div data-v-f4c3ad76="" className="text-center"><h6 data-v-f4c3ad76="">Reports</h6> <ul data-v-f4c3ad76="" className="d-flex flex-column mb-3"><li data-v-f4c3ad76=""><Link  data-v-f4c3ad76="" to="/open-bets" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">menu_open</span> <span data-v-f4c3ad76="">Open Bets</span></Link ></li> <li data-v-f4c3ad76=""><Link  data-v-f4c3ad76="" to="/settled-bets" className="mobile_sidenav_links py-1"><span data-v-f4c3ad76="" className="material-icons">work</span> <span data-v-f4c3ad76="">Settled Bets</span></Link ></li> <li data-v-f4c3ad76=""><div data-v-f4c3ad76="" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">password</span> <span data-v-f4c3ad76="">Change Password</span></div></li> <li data-v-f4c3ad76="" data-toggle="modal" data-target="#rulesModal"><div data-v-f4c3ad76="" className="mobile_sidenav_links"><span data-v-f4c3ad76="" className="material-icons">grading</span> <span data-v-f4c3ad76="">Rules</span></div></li></ul></div>
        </div>

      )}
    </div>
  );
}

export default Afooter;
