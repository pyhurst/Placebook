import React, { useEffect, useState } from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { STATES } from "mongoose";

const Business = () => {
  const [userState, userDispatch] = useUserContext();
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
      {userAuth}
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
