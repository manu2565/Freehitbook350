import React from "react";
import './Changepass.css'

function Changepassword() {
  const handleCancel = () => {
    console.log("Right cancels");
  };
  return (
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
            <span data-v-f4c3ad76="" aria-hidden="true">
              ×
            </span>
          </button>
        </div>{" "}
        <div data-v-f4c3ad76="" className="modal-body w-75 mx-auto">
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
  
  
  );
}

export default Changepassword;
