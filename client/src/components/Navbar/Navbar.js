import React from "react";
import logo from "../../Images/placebook logo.png";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useUserContext } from "../../utils/UserContext";

import "bulma/css/bulma.css";

const Navbar = (props) => {
  const [userState, userDispatch] = useUserContext();
  const loGout = () => {
    API.userLogout(userState)
      .then((e) => {
        userDispatch({
          username: "",
          email: "",
          reservations: [],
          _id: "",
        });
        localStorage.removeItem("currentUser");
      })
      .then(() => {
        window.location.reload();
      });
  };

  if (props.status) {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
              width="112"
              height="30"
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
          <Link
            style={{ color: "rgb(120, 200, 166)" }}
            className="navbar-item"
            to="/about"
          >
            About Us
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div id="business-link" className="navbar-item">
              <Link style={{ color: "rgb(120, 200, 166)" }} to="/user/home">
                My Homepage
              </Link>
            </div>
            <div id="actionButtons" className="buttons">
              <Link
                style={{ color: "rgb(120, 200, 166)" }}
                to="/"
                className="button btn-secondary"
                onClick={loGout}
              >
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
              width="112"
              height="30"
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
          <Link
            style={{ color: "rgb(120, 200, 166)" }}
            className="navbar-item"
            to="/about"
          >
            About Us
          </Link>
        </div>
        <div className="navbar-end">
          <div id="business-link" className="navbar-item">
            <Link style={{ color: "rgb(120, 200, 166)" }} to="/business/pitch">
              For Businesses
            </Link>
          </div>
          <div className="navbar-item">
            <div id="actionButtons" className="buttons">
              <Link
                style={{ color: "rgb(120, 200, 166)" }}
                to="/signup"
                id="sign-up"
                className="button"
              >
                <strong>Sign up</strong>
              </Link>
              <Link
                style={{ color: "rgb(120, 200, 166)" }}
                to="/login"
                className="button is-light"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
