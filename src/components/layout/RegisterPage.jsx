import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const RegisterPage = () => {
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("91");
  
  const navigate = useNavigate();

  const handleMobileChange = (e) => setMobile(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCountryCodeChange = (e) => setCountryCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with data:", {
      mobile,
      username,
      password,
      countryCode,
    });
    // After form submission, navigate to the login page
    navigate("/login");
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div className="registrations">
      <div className="mobile-navbar">
        <div id="myNav" className="overlay">
          <Link href="#" className="closebtn" onClick={closeNav}>
            <img src="assets/images/menu-red-icon.webp" alt="" />
          </Link>
          <div className="overlay-content">
          <Link to="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/best-providers">Best Providers</Link>
            <Link href="/sports">Sports</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
          <div className="navbar-bottom-logo">
          <Link to="/">
              <img src="assets/images/freehit365.webp" alt="" />
          </Link >
          </div>
        </div>
      </div>

      {/* Header Section */}

      {/* Registration Form Section */}
      <section className="login-signup-sec register-page-sec registations">
        <div className="container">
          <div className="mid-l-s-warper">
            <div className="sec-title">
              <Link className="navbar-brand" href="/register#">
                <img src="assets/images/freehit365.webp" alt="" />
              </Link>
            </div>
            <div className="account-form-block">
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_token"
                  value="9HugmIi6ozOoCr96soG1sbqkgdgyXio9jDimQ3Ni"
                />
                <div className="input-group mb-0">
                  <div className="phone-input-bx">
                    <div className="country-code-select">
                      <select
                        className="form-select form-control left-border"
                        id="countrycode"
                        name="countrycode"
                        value={countryCode}
                        onChange={handleCountryCodeChange}
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
                        className="form-control right-border input-boxes"
                        value={mobile}
                        id="mobile"
                        name="mobile"
                        placeholder="Mobile Number*"
                        onChange={handleMobileChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="input-group mt-18 mb-0">
                  <input
                    type="text"
                    className="form-control field-border"
                    value={username}
                    name="username"
                    id="usernameregister"
                    placeholder="User Name*"
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="input-group mt-18 mb-0">
                  <input
                    type="password"
                    className="form-control field-border toggle-password"
                    name="password"
                    id="password"
                    placeholder="Password*"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <input
                  type="hidden"
                  className="form-control"
                  name="name"
                  id="fullnameregister"
                  placeholder="Name*"
                  value="dasddsd"
                />
                <div className="d-grid gap-2 col-12 mt-18">
                  <button type="submit" className="btn cmn-btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-between">
              <div className="pt-3">
                <Link
                  href="android/freehit365.apk"
                  className="text-white btn btn-dark"
                >
                  Download APK
                </Link>
              </div>
              <div className="pt-3">
                <Link href="/login" className="text-white btn btn-dark">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
   
    </div>
  );
};

export default RegisterPage;
