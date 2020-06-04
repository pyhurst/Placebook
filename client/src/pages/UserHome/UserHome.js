import React, { useEffect } from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";

const Business = () => {
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

  // const renderAppointments = () => {
  //   console.log(userContext[0].reservations[0]);
  // };
  const navBar = () => {
    if (userState.username === "") {
      return <Navbar />;
    } else {
      console.log(userState);
      return <Navbar user="user" />;
    }
  };

  return (
    <div>
      {navBar()}
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
