import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { STATES } from "mongoose";

const Business = () => {
  const [userState, userDispatch] = useUserContext();
  let userStatus;
  useEffect(() => {
    userStatus = 0;
    API.checkUser()
      .then((userResult) => {
        console.log("checkUser result:", userResult.data.user);
        if (userResult.data.user === null) {
          console.log("we are logged out");
        } else {
          userStatus = 1;
          userDispatch({
            type: "ADD_USER",
            username: userResult.data.user.username,
            email: userResult.data.user.email,
            reservations: userResult.data.user.reservations,
            _id: userResult.data.user._id,
          });
        }
      })

      .catch((err) => console.log(err));
  }, []);

  const navBar = () => {
    if (userStatus === 0) {
      console.log("the user status is 0");
      return <Navbar />;
    } else {
      return <Navbar status="user" />;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">Welcome, {userState.username} </div>
            <div className="column">Appointments: </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
