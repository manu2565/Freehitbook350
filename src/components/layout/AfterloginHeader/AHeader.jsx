import React, { useState, useEffect, useRef } from "react";
import ThemesSeting from '../AfterloginHeader/ThemesSetting'
import {NavLink, useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";


function AHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isThemesChangerOpen, setIsThemesChangerOpen] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const dropdownRef = useRef(null);
 
  // Create a ref to track the dropdown container
 

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };


  const handlecrosse = () => {
    setShowChangePasswordModal(false);
    
   
  };
 
  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleOptionClick = () => {
    setDropdownOpen(false); // Close dropdown
  };

 
  const toggleThemesChanger = () => {
    setIsThemesChangerOpen((prev) => !prev);
  };
  const openChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };

  const closeChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };


  return (
    <div data-v-cb9ac2ee className="page">
      <div data-v-f4c3ad76 data-v-cb9ac2ee>
        <header data-v-f4c3ad76 className="w-100">
          <div data-v-f4c3ad76 className="h-100">
            <div data-v-f4c3ad76 className="d-flex h-100">
              <ThemesSeting/>
              <div
                data-v-f4c3ad76
                className="col-3 d-flex align-items-center justify-content-start pl-0"
              >
                <div
                  data-v-f4c3ad76
                  className="logo_container pl-2 pl-sm-3 mr-3 mr-xl-5"
                >
                  <NavLink
                    data-v-f4c3ad76
                    to="/dashboard"
                    className="ex-active logo-className"
                    aria-current="page"
                  >
                    <img
                      data-v-f4c3ad76
                      src="assets/images/freehit365.webp"
                      alt="logo"
                      className="logo_image"
                    />
                  </NavLink>
                </div>
                <div
                  data-v-f4c3ad76
                  className="search_container d-none d-lg-flex"
                >
                  <i data-v-f4c3ad76 className="fa fa-search" />
                  <input
                    data-v-f4c3ad76
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                  <div
                    data-v-f4c3ad76
                    className="search-result-container"
                    style={{ display: "none" }}
                  >
                    <div data-v-f4c3ad76 className="list-group search-scroll">
                      <div data-v-f4c3ad76>
                        <NavLink
                          data-v-f4c3ad76
                          className="list-group-item list-group-item-action search-box"
                        >
                          No items match your search
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-f4c3ad76
                className="ml-auto d-flex align-items-center after-login-nav right-section"
              >
                <ul
                  id="pills-tab"
                  role="tablist"
                  className="nav nav-pills flex-nowrap text-nowrap after_login_nav d-none d-lg-flex mr-3"
                >
                  {/* Pinned */}
                  <li data-v-f4c3ad76 role="presentation" className="nav-item">
                    <NavLink data-v-f4c3ad76 to="favourites" className="nav-link ">
                      Pinned
                    </NavLink>
                  </li>

                  {/* My Market */}
                  <li role="presentation" className="nav-item">
                    <NavLink data-v-f4c3ad76 to="my-market" className="nav-link">
                      My Market
                    </NavLink>
                  </li>
              
                  {/* Account Dropdown */}
                  <li className="nav-item dropdown" style={{display:"flex"}}>
                    <NavLink
                      data-v-f4c3ad76
                      role="button"
                      to="#"
                      id="accountDropdown"
                      onClick={toggleDropdown}
                      className={`nav-link  ${
                        dropdownOpen ? "active" : ""
                      }`}
                    >
                      Account<IoMdArrowDropdown />
                    </NavLink>

                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        aria-labelledby="accountDropdown"
                        className="dropdown-menu px-3"
                        style={{ display: "block" }}
                      >
                        {/* User Info */}
                        <div className="d-flex justify-content-between">
                          <span className="font-size-14">demouser1 (User)</span>
                          <span className="font-size-12">
                            Last Login: Jan 18th 2025, 11:30:41 PM
                          </span>
                        </div>
                        <div className="dropdown-divider" />

                        {/* Account Details */}
                        <div className="d-flex justify-content-around">
                          <div className="text-center">
                            <span className="material-icons">
                              military_tech
                            </span>
                            <p className="font-size-14 font-weight-bold text-danger">
                              <span>PTI</span> 1,615.88
                            </p>
                          </div>
                          <div className="text-center">
                            <span className="material-icons">credit_score</span>
                            <p className="font-size-14 font-weight-bold">
                              1,616.00
                            </p>
                          </div>
                        </div>
                        <div className="dropdown-divider" />

                        {/* Dropdown NavLinks */}
                        <NavLink
                          to="/open-bets"
                          className="dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="material-icons">menu_open</span>
                          Open Bets
                        </NavLink>
                        <NavLink
                          to="/open-bets"
                          className="dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="material-icons">work</span>
                          Settled Bets
                        </NavLink>
                        <NavLink
                          to="/open-bets"
                          className="dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="material-icons">receipt_long</span>
                          Statement
                        </NavLink>
                        <NavLink
                          to="/open-bets"
                          className="dropdown-item"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="material-icons">exposure</span>
                          Profit & Loss
                        </NavLink>
                        <NavLink
                          to="#"
                          data-toggle="modal"
                          data-target="#changePassword"
                          className="dropdown-item"
                         
                          onClick={() => {
                            setDropdownOpen(false);
                            openChangePasswordModal();
                          }}
                        >
                          <span className="material-icons" >password</span>
                          Change Password
                        </NavLink>

                        {/* Logout */}
                        <div className="dropdown-divider" />
                        <NavLink
                          to="/"
                          className="dropdown-item logout"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="material-icons">logout</span>
                          <span className="material-icons">logout</span>
                          Logout
                        </NavLink>
                      </div>
                    )}
                  </li>
                   {/* Change Password Modal */}
      {showChangePasswordModal && (
         <div
         data-v-f4c3ad76=""
         id="changePassword"
         data-backdrop="static"
         data-keyboard="false"
         tabIndex={-1}
         aria-labelledby="changePasswordLabel"
         className="modal fade show change-password-container"
         aria-modal="true"
         role="dialog"
         style={{ display: "block" }}
       >
         <div data-v-f4c3ad76="" className="modal-dialog modal-dialog-centered">
           <div data-v-f4c3ad76="" className="modal-content">
             <div data-v-f4c3ad76="" className="modal-header py-2">
               <h6
                 data-v-f4c3ad76=""
                 id="changePasswordLabel"
                 className="modal-title text-center w-100"
               >
                 Change Password
               </h6>{" "}
               <button
                 data-v-f4c3ad76=""
                 type="button"
                 data-dismiss="modal"
                 aria-label="Close"
                 className="close"
               >
                 <span data-v-f4c3ad76="" aria-hidden="true"onClick={handlecrosse}>
                   ×
                 </span>
               </button>
             </div>{" "}
             <div data-v-f4c3ad76="" className="modal-body w-75 mx-auto" style={{borderRadius:"12px",background:"#2a2a2a",border:"none"}}>
               <form
                 data-v-f4c3ad76=""
                 autoComplete="off"
                 className="change-password d-flex flex-column align-items-center"
               >
                 <input
                   data-v-f4c3ad76=""
                   type="password"
                   placeholder="Current Password"
                   className="mb-3 w-100"
                 />{" "}
                 {/**/}{" "}
                 <input
                   data-v-f4c3ad76=""
                   type="password"
                   placeholder="New Password"
                   className="mb-3 w-100"
                 />{" "}
                 {/**/}{" "}
                 <input
                   data-v-f4c3ad76=""
                   type="password"
                   placeholder="Confirm New Password"
                   className="mb-3 w-100"
                 />{" "}
                 {/**/}{" "}
                 <button data-v-f4c3ad76="" className="change-password-submit-button">
                   Submit
                 </button>
               </form>
             </div>
           </div>
         </div>
       </div>
      )}
                </ul>
                {/**/}
                <NavLink
                  data-v-f4c3ad76
                  to="/deposit"
                  className={({ isActive }) => (isActive ? "nav-link blink_me active" : "nav-link blink_me")}
                >
                  Deposit
                </NavLink>
                <div
                  data-v-f4c3ad76
                  className="d-flex flex-column mx-2 bal-ex-block"
                >
                  <div
                    data-v-f4c3ad76
                    className="header_balance d-flex align-items-center"
                  >
                    <span data-v-f4c3ad76>
                      <i data-v-f4c3ad76 className="fas fa-coins" />
                    </span>
                    <span data-v-f4c3ad76 className="user-balance">
                      0.12
                    </span>
                  </div>
                  <div
                    data-v-f4c3ad76
                    className="header_exposure d-flex align-items-center"
                  >
                    <span data-v-f4c3ad76>Ex</span>
                    <span data-v-f4c3ad76 className="user-exposure">
                      0.00
                    </span>
                  </div>
                </div>
                <NavLink
                  data-v-f4c3ad76
                  to="/chats"
                  className="nav-link-chat bell-btn mr-3 mobile-hide"
                >
                  <span data-v-f4c3ad76 className="noti-count">
                    0
                  </span>
                  <i data-v-f4c3ad76 className="fas fa-comment chat-icon" />
                </NavLink>
                <button
                  data-v-f4c3ad76
                  data-toggle="modal"
                  data-target="#infoModal"
                  className="bg-transparent bell-btn mobile-hide"
                >
                  <span data-v-f4c3ad76 className="noti-count">
                    0
                  </span>
                  <i data-v-f4c3ad76 className="fas fa-bell fa-lg" />
                </button>
                <div>
      {/* Settings Button */}
      <div className="c-drop-container d-flex">
        <button
          className="c-drop-button my-auto bg-transparent"
          onClick={toggleThemesChanger} // Toggles the ThemesChanger visibility
        >
          <i className="fa fa-cog chat-icon" aria-hidden="true"></i>
        </button>
      </div>

     
    </div>
              </div>
               {/* Conditionally Render ThemesChanger */}
      {isThemesChangerOpen && <ThemesSeting/>}
              {/**/}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default AHeader;
