import React from "react";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { useUserContext } from "../../utils/UserContext";
import "./Navbar.css";
import "bulma/css/bulma.css";

//different Navbars based on whether user is logged in 
const Navbar = (props) => {
  const [userState, userDispatch] = useUserContext();
  const [navbarDisplayState, setNavbarDisplayState] = React.useState("not-active");

  const logOut = () => {
    API.userLogout(userState)
      .then((e) => {
        userDispatch({
          username: "",
          email: "",
          reservations: [],
          _id: "",
        });
        localStorage.removeItem("currentUser");
        localStorage.removeItem("type");
        if (localStorage.getItem("isBusiness")) {
          localStorage.removeItem("isBusiness");
        }
      })
      .then(() => {
        window.location.reload();
      });
  };

  const bizCheck = () => {
    if (localStorage.getItem("type")) {
      window.location = "/business/home";
    } else {
      window.location = "/user/home";
    }
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  const burgerClick = () => {
    console.log('clicked')
    if(navbarDisplayState === "is-active"){
      setNavbarDisplayState("not-active");
    } else {
      setNavbarDisplayState("is-active");
    }
  };

  if (props.status) {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="Placebook Logo"
              width="112"
              height="30"
            />
          </Link>
          </div>

          <Link
            role="button"
            className={"navbar-burger burger " + navbarDisplayState}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={burgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>

        <div id="navbarBasicExample" className={"navbar-menu " + navbarDisplayState}>
          <div className="navbar-start">
            <Link
              style={{ color: "rgb(120, 200, 166)" }}
              className="navbar-item"
              to="/about"
            >
              About Us
          </Link>
          </div>
          <Link
            style={{ color: "rgb(120, 200, 166)" }}
            className="navbar-item"
            onClick={bizCheck}>
            My Homepage
              </Link>
          <Link
            style={{ color: "rgb(120, 200, 166)" }}
            to="/"
            className="button btn-secondary"
            onClick={logOut}
          >
            Log Out
              </Link>
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
              alt="Placebook Logo"
              title="Placebook Home"
              width="112"
              height="30"
            />
          </Link>
          </div>

          <Link
            role="button"
            className={"navbar-burger burger " + navbarDisplayState}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={burgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        <div id="navbarBasicExample" className={"navbar-menu " + navbarDisplayState}>
        <div className="navbar-start">
          <Link
            style={{ color: "rgb(120, 200, 166)" }}
            className="navbar-item"
            to="/about"
          >
            About Us
          </Link>
        </div>
        {/* <div className="navbar-end"> */}
            <Link
              style={{ color: "rgb(120, 200, 166)" }}
              className="navbar-item"
              to="/business/pitch">
              For Businesses
            </Link>
              <Link
                style={{ color: "rgb(120, 200, 166)" }}
                to="/signup"
                id="sign-up"
                className="button navbar-item"
              >
                <strong style={{ color: "white" }} onClick={clearStorage}>
                  Sign up
                </strong>
              </Link>
              <Link
                style={{ color: "rgb(120, 200, 166)" }}
                to="/login"
                className="button is-light navbar-item"
              >
                Log in
              </Link>
            </div>
      </nav>
    );
  }
};

export default Navbar;
