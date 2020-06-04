import React, { useEffect, useState } from "react";
import "./About.css";
import { Jumbotron } from "reactstrap";
import Navbar from "../../components/Navbar/Navbar";
import API from "../../utils/API";

const About = () => {
  const [userAuth, setuserAuth] = useState("");

  useEffect(() => {
    API.checkUser()
      .then((userResult) => {
        setuserAuth(userResult.data.user.username);
      })

      .catch((err) => console.log(err));
  }, []);

  const navBar = () => {
    console.log("navbar function");
    if (userAuth !== "") {
      return <Navbar status="user" />;
    } else {
      return <Navbar />;
    }
  };

  return (
    <div>
      {navBar()}
      <div id="about">
        <Jumbotron>
          <h1 className="display-3">We're Placebook.</h1>
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
            available businesses, create an account, and make, update, or cancel
            upcoming reservations. Don't see a business you think should be
            here? Have questions or comments? Email us at{" "}
            <a href="#">placebookservices@placebook.com</a>.
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};

export default About;
