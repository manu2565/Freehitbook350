import React, { useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";

const LoginSignupSection = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    ic;

    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleDemoUserLogin = () => {
    setUsername("demoUser");
    setPassword("demoPassword");

    navigate("/dashboard");
  };

  return (
    <div className="registrations">
      <section className="login-signup-sec animate">
        <div className="container">
          <div className="mid-l-s-warper">
            <div className="sec-title">
              <h1>Log In</h1>
            </div>
            <div className="account-form-block">
              <form id="landing_login_form" onSubmit={handleLoginSubmit}>
                <input
                  type="hidden"
                  name="_token"
                  value="9HugmIi6ozOoCr96soG1sbqkgdgyXio9jDimQ3Ni"
                />
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control field-border"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="InputUsername"
                    name="userid"
                    placeholder="Username"
                  />
                </div>
                <div className="input-group mt-18 mb-0">
                  <input
                    type="password"
                    className="form-control field-border toggle-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="InputPassword"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="d-grid gap-2 col-12 pt-2 mx-auto mt-18">
                  <button
                    type="submit"
                    id="LoginBtnId"
                    className="btn cmn-btn text-capitalize login_now"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Log In"
                    )}
                  </button>
                </div>
                <div className="d-flex bd-highlight">
                  <div className="p-2 bd-highlight">
                    <hr className="or-title" />
                  </div>
                  <div className="p-2 bd-highlight text-light">OR</div>
                  <div className="p-2 bd-highlight">
                    <hr className="or-title" />
                  </div>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto mb-1">
                  <Link
                    to="/register"
                    className="btn btn-dark register-btn-size"
                  >
                    Register
                  </Link>
                </div>
                <p className="text-center pt-2">
                  {/* Make the text clickable and use the demo login logic */}
                  <span
                    onClick={handleDemoUserLogin}
                    className="redirect-link-button text-white cursor-pointer"
                  >
                    Sign in with Demo User account? Click Here
                  </span>
                </p>
              </form>
              <div className="d-flex justify-content-between">
                <div className="pt-3">
                  <Link
                    to={"/dash-bord"}
                    href="android/freehit365.apk"
                    className="btn btn-dark mobile-text fs-15"
                  >
                    Download APK
                  </Link>
                </div>
                <div className="pt-3 ms-1">
                  {/* Use Link for navigation */}
                  <Link
                    to="/forgotpassword"
                    className="btn btn-dark mobile-text fs-15"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginSignupSection;
