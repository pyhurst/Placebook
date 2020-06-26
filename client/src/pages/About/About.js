import React from "react";
import "./About.css";
import { Jumbotron } from "reactstrap";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useUserContext } from "../../utils/UserContext";

const About = () => {
  const [userState, userDispatch] = useUserContext();

  const checkLocal = () => {
    let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
    if (storageStatus) {
      if (storageStatus.email !== null && userState.username === "") {
        userDispatch({
          type: "ADD_USER",
          username: storageStatus.username,
          email: storageStatus.email,
          reservations: storageStatus.reservations,
          _id: storageStatus._id,
        });
      }
    }
  };
  checkLocal();

  return (
    <div>
      <Navbar status={userState.username} />
      <div id="about">
        <Jumbotron id="aboutJumbo">
          <h1 className="display-3">We're Placebook</h1>
          <h5 className="lead">How can Placebook benefit you?</h5>
          <hr className="my-2" />
          <h6>Perfect for businesses</h6>
          <hr className="my-2" />
          <p>
            Placebook is an innovative app designed to help your business thrive
            during COVID-19 and onwards. Not all types of businesses are
            equipped with reservation systems--that's where Placebook comes in.
            This app allows your business to accept customer reservations and
            keep track of these reservations via designated time slots and
            capacities.
          </p>
          <hr className="my-2" />
          <h6>A simple way to reserve</h6>
          <hr className="my-2" />
          <p>
            Skip the 6-feet-apart lines and reserve your timeslots for any
            outing in advance. Placebook allows users to easily search through
            available businesses, create an account, and make or cancel
            upcoming reservations. Don't see a business you think should be
            here? Have questions or comments? Email us at{" "}
            <a href="mailto: placebookservices@gmail.com">placebookservices@gmail.com</a>.
          </p>
        </Jumbotron>
        <Footer />
      </div>
    </div>
  );
};

export default About;
