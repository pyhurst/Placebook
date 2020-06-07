import React, { useRef } from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { STATES } from "mongoose";
import { Redirect } from "react-router-dom";

const Business = () => {
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
  let theStorage = JSON.parse(localStorage.getItem("currentUser"));
  let userId = theStorage._id;
  let apptData = {
    amount: theStorage.reservations.length,
    reservations: theStorage.reservations,
  };

  const deleteInfo = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.getAttribute("date"));
    console.log(e.target.getAttribute("time"));
    console.log(e.target.getAttribute("businessId"));
    console.log(e.target.getAttribute("userid"));

    /*
    need to do an API call to delete reservation from the user model
    need to do an API call to delete reservation from the business model
    need to update local storage with the removed reservation

      API.deletReservation({
        
      })
  
    
    
    */
  };

  const renderAppts = () => {
    let something = apptData.reservations.map((e) => {
      return (
        <div className="row">
          <button
            className="button"
            style={{ display: "block", margin: "10px", width: "auto" }}
          >
            Day: {e.date} Time: {e.time} Place: {e.businessId}
          </button>
          <button
            businessId={e.businessId}
            date={e.date}
            time={e.time}
            userid={userId}
            className="button"
            style={{ display: "block", margin: "10px", width: "auto" }}
            onClick={deleteInfo}
          >
            Remove
          </button>
        </div>
      );
    });
    return something;
  };

  return (
    <div>
      <Navbar status={userState.username} />
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">Welcome, {userState.username} </div>
            <div className="column">Appointments: {apptData.amount}</div>
          </div>
          {renderAppts()}
        </div>
      </div>
    </div>
  );
};

export default Business;
