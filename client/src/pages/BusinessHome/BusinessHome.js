import React, { useEffect } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import Jumbo from "../../components/Jumbotron/JumbotronBusinessHome/JumbotronBusinessHome";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";

const BusinessHome = () => {
  const [userState, userDispatch] = useUserContext();

  useEffect(() => {
    API.checkUser()
      .then((userResult) => {
        console.log(userResult);
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
    if (userState.username === "") {
      return <Navbar />;
    } else {
      return <Navbar user="user" />;
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
