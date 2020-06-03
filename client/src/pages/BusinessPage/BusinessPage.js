import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import API from "../../utils/API";
import Time from "../../components/Timeslots/Timeslots";
import Schedule from "../../components/Schedule/Schedule";
import { useBizContext } from "../../utils/BusinessContext";
import { useUserContext } from "../../utils/UserContext";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Business() {
  const { id } = useParams();
  const [bizState, bizDispatch] = useBizContext();
  const [userState, userDispatch] = useUserContext();

  useEffect(() => {
    API.getBusinessById(id).then((result) => {
      bizDispatch({
        type: "UPDATE_BIZ",
        businessId: result.data._id,
        name: result.data.name,
        address: result.data.address,
        phone: result.data.phone,
        reservations: [result.data.reservations],
        times: {
          open: result.data.times.open,
          close: result.data.times.close,
          timeslot_length: result.data.times.timeslot_length,
          capacity: result.data.times.capacity,
        },
      });
    });

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

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="section">
          <ul>
            <li>{bizState.name}</li>
            <li>Name: {userState.username}</li>
            <li>{bizState.address}</li>
            <li>{bizState.phone}</li>
            <li>Opens at: {bizState.times.open}</li>
            <li>Closes at: {bizState.times.close}</li>
            <li>Owner Id: {bizState.ownerId}</li>
            <li>Timeslots: {bizState.times.timeslot_length} Minutes</li>
          </ul>
        </div>
        <div className="section">
          <div className="row">
            <div className="column is-two-fifths-desktop is-full-mobile is-full-tablet">
              <Calendar />
            </div>
            <div className="column is-three-fifths-desktop is-full-mobile is-full-tablet">
              <h1>Date: putdatehere</h1>
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
