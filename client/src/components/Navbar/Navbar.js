import React, { Component } from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

import "bulma/css/bulma.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </Link>
          <Link
            to="#"
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <Link className="navbar-item" to="/about">
            About Us
          </Link>
        </div>
        <div className="navbar-end">
          <div id="business-link" className="navbar-item">
            <Link to="/business">For Businesses</Link>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <Link to="#" id="sign-up" className="button">
                <strong>Sign up</strong>
              </Link>
              <Link to="#" className="button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
