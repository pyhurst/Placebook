import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import Jumbo from "../../components/Jumbotron/JumbotronBusinessHome/JumbotronBusinessHome";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";

const BusinessHome = () => {
  const userDispatch = useUserContext();
  const [userAuth, setuserAuth] = useState("");

  useEffect(() => {
    API.checkUser()
      .then((userResult) => {
        setuserAuth(userResult.data.user.username);
        userDispatch({
          type: "ADD_USER",
          username: userResult.data.user.username,
          email: userResult.data.user.email,
          reservations: userResult.data.user.reservations,
          _id: userResult.data.user._id,
        });
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
      <div className="container">
        <Jumbo />
        <div className="section">
          <div className="columns">
            <div className="column">
              <Calendar />
            </div>
            <div className="column">
              <h6>Date:</h6>
              <p>Your appointments:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
