import React, { useState } from "react";
import { Link } from "react-router-dom";

function Forgetpassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("91");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Please enter a phone number.");
      return;
    }

    console.log("Phone Number:", phoneNumber);
    console.log("Country Code:", countryCode);

    // Additional logic can be added here, e.g., API call to send OTP
  };

  return (

    
    <section className="login-signup-sec registations registrations">
      <div className="container">
        <div className="mid-l-s-warper">
          <div className="sec-title">
            <h1>Trouble Logging In?</h1>
          </div>
          <div className="otp-message">
            <p className="text-center">
              Enter your phone or username and we'll send you an OTP to get back
              into your account.
            </p>
          </div>
          <div className="account-form-block">
            <form onSubmit={handleSubmit}>
              {/* Hidden token fields */}
              <input
                type="hidden"
                name="_token"
                value="XQb8YdZcLu7QhCDDbgqXxOkuCqXqPI9zQVGrvYrc"
              />
              <input
                type="hidden"
                name="recaptcha_token"
                value="YOUR_RECAPTCHA_TOKEN"
              />

              <div className="input-group mb-0">
                <div className="phone-input-bx">
                  <div className="country-code-select">
                    <select
                      className="form-select form-control form-select-lg left-border"
                      id="countrycode"
                      name="countrycode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="91">+91</option>
                      <option value="93">+93</option>
                      <option value="880">+880</option>
                      <option value="977">+977</option>
                      <option value="234">+234</option>
                      <option value="92">+92</option>
                      <option value="971">+971</option>
                      <option value="44">+44</option>
                      <option value="94">+94</option>
                      <option value="966">+966</option>
                      <option value="968">+968</option>
                      <option value="66">+66</option>
                      <option value="1">+1</option>
                    </select>
                  </div>
                  <div className="number-input-bx">
                    <input
                      type="text"
                      className="form-control input-boxes right-border"
                      id="mobileno"
                      name="mobileno"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="input-group mt-18 mb-0">
                <div className="l-btn-text-link">
                  <button type="submit" className="btn cmn-btn">
                    Next
                  </button>
                  <p>
                    Remember your password?
                    <Link to="/login" className="btn btn-dark text-white">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>

            <div className="text-center f-p-down-apk-link mt-18 mb-0">
              <Link to="/register" className="btn btn-dark text-white">
                Create New Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forgetpassword;
