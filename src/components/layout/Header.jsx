import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = React.useState(false);

  const location = useLocation(); // Get the current location from the router

  // Open the menu only after the route changes
  const openNav = () => {
    if (location.pathname) {
      setIsMenuOpen(true);
    }
  };

  const closeNav = () => setIsMenuOpen(false);

  // Ensure the menu closes when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {isMenuOpen && (
        <div className="mobile-navbar">
          <div
            id="myNav"
            className="overlay"
            style={{
              height: "100%",
            }}
          >
            <button className="closebtn" onClick={closeNav}>
              <img src="assets/images/menu-red-icon.webp" alt="Close" />
            </button>
            <div className="overlay-content">
              <Link to="/" className="active" onClick={closeNav}>
                Home
              </Link>
              <Link to="/about" onClick={closeNav}>
                About Us
              </Link>
              <Link to="/providers" onClick={closeNav}>
                Best Providers
              </Link>
              <Link to="/sports" onClick={closeNav}>
                Sports
              </Link>
              <Link to="/blogs" onClick={closeNav}>
                Blogs
              </Link>
              <Link to="/login" onClick={closeNav}>
                Login
              </Link>
              <Link to="/register" onClick={closeNav}>
                Register
              </Link>
            </div>
            <div className="navbar-bottom-logo">
              <Link to="/" onClick={closeNav}>
                <img src="assets/images/freehit365.webp" alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      )}

<header className="header-style" style={{padding:"0px 20px"}}>
  <nav className="navbar navbar-expand-lg header-box">
    <div className="container navbar-style header-main">
      {/* Brand Logo */}
      <NavLink className="navbar-brand" to="/">
        <img src="assets/images/freehit365.webp" alt="Logo" />
      </NavLink>

      {/* Mobile Login/Register */}
      <div className="mobile-login-reg btns-log">
        <button className="btn btn-outline-dark auth-btn lm-1">
          <NavLink className="nav-link mr-0" to="/login">
            Login
          </NavLink>
        </button>
        <button className="btn btn-outline-dark auth-btn">
          <NavLink className="nav-link mr-0" to="/register">
            Register
          </NavLink>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="colla"
        aria-label="Toggle navigation"
        onClick={openNav}
      style={{padding:"0px"}}>
        <span className="navbar-open-btn">
          <img src="assets/images/menu-green-icon.webp" alt="Menu" />
        </span>
      </button>

      {/* Navbar Links */}
      <div
        className="collapse navbar-collapse flex-grow-1 text-right"
        id="navbarNav"
        style={{ marginLeft: '25px' }}
      >
      <ul className="navbar-nav ml-auto flex-nowrap navbar-item">
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-link nav-font active" : "nav-link nav-font"
      }
      to="/"
    >
      Home
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-link nav-font active" : "nav-link nav-font"
      }
      to="/about"
    >
      About Us
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-link nav-font active" : "nav-link nav-font"
      }
      to="/providers"
    >
      Best Providers
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-link nav-font active" : "nav-link nav-font"
      }
      to="/sports"
    >
      Sports
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav-link nav-font active" : "nav-link nav-font"
      }
      to="/blogs"
    >
      Blogs
    </NavLink>
  </li>
</ul>
      </div>

      {/* How To Play Button */}
      <button
        className="nav-btn htp-btn py-1 py-sm-2 mr-md-3 nav-red-button"
        data-toggle="modal"
        data-target="#how-to-play"
        onClick={() => setIsHighlighted(true)}
      >
        How To Play
      </button>
    </div>

    {/* Desktop Login/Register */}
    <ul className="navbar-nav ms-auto flex-nowrap">
  <li className="nav-item hide-mobile-auth-btn">
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "btn btn-outline-dark nav-link auth-btn lm-1 active"
          : "btn btn-outline-dark nav-link auth-btn lm-1"
      }
      to="/login"
    >
      Login
    </NavLink>
  </li>
  <li className="nav-item hide-mobile-auth-btn">
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "btn btn-outline-dark nav-link auth-btn lm-1 active"
          : "btn btn-outline-dark nav-link auth-btn lm-1"
      }
      to="/register"
    >
      Register
    </NavLink>
  </li>
</ul>
  </nav>
</header>


    </>
  );
}

export default Header;
