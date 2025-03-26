import React from "react";
import "../../../../public/assets/css/Chat.css";
import Marque from "./Marque";
import Playinggames from "./Playinggames";
import { Link } from "react-router-dom";

function Chat() {
  return (
    <div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BHFV5R"
        height="0" width="0" style="display: none; visibility: hidden"
        &gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      {/* Page*/}
      <div data-v-cb9ac2ee className="page">
        <div data-v-f4c3ad76 data-v-cb9ac2ee>
          <Marque />
          <Playinggames />
        </div>
        <div
          data-v-cb9ac2ee
          className="position-relative main-container-user inplay_container"
        >
          <div data-v-178ff5c6 data-v-cb9ac2ee>
            <div data-v-178ff5c6 className="layout-wrapper d-lg-flex">
              <div data-v-178ff5c6 className="user-chat w-100 overflow-hidden">
                <div data-v-178ff5c6 className="d-lg-flex">
                  <div
                    data-v-178ff5c6
                    className="w-100 overflow-hidden position-relative"
                  >
                    <div
                      data-v-178ff5c6
                      className="p-3 p-lg-4 border-bottom user-chat-topbar"
                    >
                      <div data-v-178ff5c6 className="row align-items-center">
                        <div data-v-178ff5c6 className="col-sm-4 col-8">
                          <div
                            data-v-178ff5c6
                            className="d-flex align-items-center"
                          >
                            <div
                              data-v-178ff5c6
                              className="d-block d-lg-none me-2 ms-0"
                            >
                              <Link
                                data-v-178ff5c6
                                to=""
                                className="user-chat-remove text-muted font-size-24 p-2"
                              >
                                <i
                                  data-v-178ff5c6
                                  className="ri-arrow-left-s-line"
                                />
                              </Link>
                            </div>
                            <div data-v-178ff5c6 className="me-3 ms-0">
                              <div data-v-178ff5c6 className="avatar-sm">
                                <span
                                  data-v-178ff5c6
                                  className="avatar-title rounded-circle letter-wise-cricle"
                                >
                                  C
                                </span>
                                <span data-v-178ff5c6 className="user-status" />
                              </div>
                            </div>
                            <div
                              data-v-178ff5c6
                              className="flex-grow-1 overflow-hidden ml-3 typing"
                            >
                              <h5
                                data-v-178ff5c6
                                className="font-size-16 mb-0 text-truncate"
                              >
                                <Link
                                  data-v-178ff5c6
                                  to="./Customer_files/chats"
                                  className="text-reset user-profile-show"
                                >
                                  Customer Support
                                </Link>
                                <i
                                  data-v-178ff5c6
                                  className="ri-record-circle-fill font-size-10 text-success d-inline-block ms-1"
                                />
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-178ff5c6
                      className="chat-conversation p-3 p-lg-4"
                    >
                      <ul data-v-178ff5c6 className="list-unstyled mb-0">
                        <div
                          data-v-644ea9c9
                          data-v-178ff5c6
                          className="infinite-loading-container"
                        >
                          <div
                            data-v-644ea9c9
                            className="infinite-status-prompt"
                            style={{
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              padding: "10px 0px",
                              display: "none",
                            }}
                          >
                            <i
                              data-v-46b20d22
                              data-v-644ea9c9
                              className="loading-default"
                            />
                          </div>
                          <div
                            data-v-644ea9c9
                            className="infinite-status-prompt"
                            style={{
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              padding: "10px 0px",
                              display: "none",
                            }}
                          >
                            No results :(
                          </div>
                          <div
                            data-v-644ea9c9
                            className="infinite-status-prompt"
                            style={{
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              padding: "10px 0px",
                              display: "none",
                            }}
                          >
                            No more data :)
                          </div>
                          <div
                            data-v-644ea9c9
                            className="infinite-status-prompt"
                            style={{
                              color: "rgb(102, 102, 102)",
                              fontSize: "14px",
                              padding: "10px 0px",
                              display: "none",
                            }}
                          >
                            Opps, something went wrong :(
                            <br data-v-644ea9c9 />
                            <button
                              data-v-644ea9c9
                              className="btn-try-infinite"
                            >
                              Retry
                            </button>
                          </div>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            04-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Plz provide me new user id
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        11:58 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        11:59 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      New id user
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        14:01 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hello sir
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        20:53 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Sir I'm forgetting my Id
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        20:54 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Please
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        20:54 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      hheo
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        23:28 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Chor Website hai meri id lock krdi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        00:49 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Mene profit bnaya tha meri id behnkelundo
                                      ne lock krdi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        00:49 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        className="dropdown-item"
                                        to=""
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      WhatsApp pe block kar diya
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        00:49 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            05-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Histry delete kaise karna bhai history
                                      delete nahin ho raha bhai kaisa karna
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        12:01 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hlo
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        20:18 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            06-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      I'd chaheye
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:02 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Jsgsh
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        19:43 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Passport galat
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        19:43 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Ji
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        20:16 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Id to thi id password bhul gaya hu
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        20:16 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            07-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      ID password bhul Gaya Hun bataoID password
                                      bhul Gaya Hun batao
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        10:52 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      7036754019
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:53 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      9159172099
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        18:50 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Deposit krna hai
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        19:58 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Withdrawal ni hora
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        21:18 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        00:05 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            08-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hello
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        11:25 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Deposit Krna he mujhe fund lakin ho nhi
                                      Raha he
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        11:25 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:12 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      I forgot my username please send me
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        23:27 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            09-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Land id
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        16:25 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Sala real id ya fake id kuchh pata nahin
                                      chalraha
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        16:25 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            10-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      I forgot my username id please send me
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        11:01 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            10-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hlo
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:44 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Why my user id locked
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:45 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Tell me
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:48 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      My Userid Sreekanth@12345
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:50 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      My Userid Sreekanth_12345
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        15:56 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      I want my user id
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        21:59 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            11-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        07:34 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      पममीठ
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        10:15 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              {/**/}
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <ul
                                      data-v-178ff5c6
                                      className="list-inline message-img mb-0"
                                    >
                                      <li
                                        data-v-178ff5c6
                                        className="list-inline-item message-img-list me-2 ms-0"
                                      >
                                        <div data-v-178ff5c6>
                                          <Link
                                            data-v-178ff5c6
                                            className="popup-img d-inline-block m-1"
                                          >
                                            <img
                                              data-v-178ff5c6
                                              src="./Customer_files/2025-01-11 04_45_38"
                                              className="img-fluid chat-image"
                                            />
                                          </Link>
                                        </div>
                                      </li>
                                    </ul>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        10:15 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu dropdown-menu-end"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        14:41 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hello
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        14:41 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            12-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      400 deposit
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        09:19 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hello
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        09:19 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hello
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        09:25 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hello
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        14:30 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Please show me deposit details
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        16:09 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi sir
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        17:27 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi sir
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        17:41 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Please respond sir
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        17:42 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Diposit nahi hota hai
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        18:10 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Amount missing
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        18:39 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hi
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        23:35 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            13-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Passport galat ogilla
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        10:39 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Deposit nahi ho raha h
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        14:57 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      कैसे करे
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        14:57 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title">
                            14-01-2025
                          </li>
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Boliye
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        12:52 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Password bhul gya hu kaise hoga
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        14:28 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Help
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        19:11 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Hello
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        19:11 PM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                        <div data-v-178ff5c6>
                          <li data-v-178ff5c6 className="date-title" />
                          <li data-v-178ff5c6 className="right">
                            <div data-v-178ff5c6 className="conversation-list">
                              <div
                                data-v-178ff5c6
                                className="user-chat-content"
                              >
                                <div data-v-178ff5c6 className="ctext-wrap">
                                  <div
                                    data-v-178ff5c6
                                    className="ctext-wrap-content"
                                  >
                                    <p data-v-178ff5c6 className="mb-0">
                                      Why are you I'd lo
                                    </p>
                                    <p
                                      data-v-178ff5c6
                                      className="chat-time mb-0"
                                    >
                                      <span
                                        data-v-178ff5c6
                                        className="align-middle"
                                      >
                                        00:44 AM
                                      </span>
                                    </p>
                                  </div>
                                  <div
                                    data-v-178ff5c6
                                    className="dropdown align-self-start"
                                  >
                                    <Link
                                      data-v-178ff5c6
                                      to="./Customer_files/chats"
                                      role="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                      className="dropdown-toggle"
                                    >
                                      <i
                                        data-v-178ff5c6
                                        className="material-icons"
                                      >
                                        more_vert
                                      </i>
                                    </Link>
                                    <div
                                      data-v-178ff5c6
                                      className="dropdown-menu"
                                    >
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        className="dropdown-item"
                                      >
                                        Edit
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons edit-icon"
                                        >
                                          edit
                                        </i>
                                      </Link>
                                      <Link
                                        data-v-178ff5c6
                                        to=""
                                        data-toggle="modal"
                                        data-target="#want-delete-chat-modal"
                                        className="dropdown-item"
                                      >
                                        Delete
                                        <i
                                          data-v-178ff5c6
                                          className="material-icons delete-icon"
                                        >
                                          delete
                                        </i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-178ff5c6
                                  className="conversation-name"
                                />
                              </div>
                              {/**/}
                              {/**/}
                            </div>
                          </li>
                        </div>
                      </ul>
                    </div>
                    {/**/}
                    <div
                      data-v-178ff5c6
                      className="chat-input-section p-3 p-lg-4 border-top mb-0"
                    >
                      <div data-v-178ff5c6 className="row g-0">
                        <div data-v-178ff5c6 className="col">
                          <div
                            data-v-178ff5c6
                            className="bottom-input-attach-btn"
                          >
                            <div
                              data-v-178ff5c6
                              data-toggle="tooltip"
                              data-placement="left"
                              title="Attachment"
                              className="attach-btn"
                            >
                              <input
                                data-v-178ff5c6
                                type="file"
                                accept="image/png, image/jpeg"
                                hidden="hidden"
                              />
                              <button
                                data-v-178ff5c6
                                type="button"
                                className="btn btn-link text-decoration-none font-size-16 btn-lg"
                              >
                                <i data-v-178ff5c6 className="material-icons">
                                  attach_file
                                </i>
                              </button>
                            </div>
                            <input
                              data-v-178ff5c6
                              type="text"
                              placeholder="Enter Message..."
                              className="form-control form-control-lg bg-light border-light"
                            />
                          </div>
                        </div>
                        <div data-v-178ff5c6 className="col-auto">
                          <div
                            data-v-178ff5c6
                            className="chat-input-links ms-md-2 me-md-0"
                          >
                            <button
                              data-v-178ff5c6
                              className="btn font-size-16 btn-lg disable-send-btn"
                            >
                              <i data-v-178ff5c6 className="material-icons">
                                send
                              </i>
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
              data-v-178ff5c6
              id="ImageMessageModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              className="modal fade"
            >
              <div
                data-v-178ff5c6
                role="document"
                className="modal-dialog modal-dialog-centered"
              >
                <div data-v-178ff5c6 className="modal-content">
                  <div data-v-178ff5c6 className="modal-header">
                    <h5
                      data-v-178ff5c6
                      id="exampleModalLabel"
                      className="modal-title"
                    />
                    <button
                      data-v-178ff5c6
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close"
                      className="close"
                    >
                      <span data-v-178ff5c6 aria-hidden="true">
                        ×
                      </span>
                    </button>
                  </div>
                  <div data-v-178ff5c6 className="modal-body">
                    <img
                      data-v-178ff5c6
                      src="https://www.freehit365.com/chats"
                      className="img-fluid"
                    />
                  </div>
                  <div data-v-178ff5c6 className="modal-footer">
                    <button
                      data-v-178ff5c6
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
                    src="/chats"
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
                <img data-v-687fd205 src="./Customer_files/cross-icon.webp" />
              </span>
              <iframe
                data-v-687fd205
                src="./Customer_files/saved_resource(1).html"
              />
            </div>
          </div>
          {/**/}
        </div>
        {/**/}

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
                      src="./Customer_files/notification-alert.svg"
                      alt=""
                    />
                  </div>
                  <div data-v-cb9ac2ee className="notify-theme-info">
                    <h3 data-v-cb9ac2ee>Turn on the Notifications</h3>
                    <div data-v-cb9ac2ee className="notify-justify-btn">
                      <button
                        data-v-cb9ac2ee
                        data-bs-dismiss="modal"
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
          src="./Customer_files/saved_resource(2).html"
        />
      </div>
    </div>
  );
}

export default Chat;
