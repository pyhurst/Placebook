import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import API from "../../utils/API";
import Time from "../../components/Timeslots/Timeslots";
import Schedule from "../../components/Schedule/Schedule";
import { useBizContext } from "../../utils/BusinessContext";
import { useParams } from "react-router-dom";

function Business() {
  const {id} = useParams();
  const [state, dispatch] = useBizContext();

  useEffect(() => {
    API.getBusinessById(id).then(result => {

      dispatch({
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
    })
    .catch((err) => console.log(err));
  },[])

  return (
    <div className="container">
      <div className="section">
        <ul>
          <li>{state.name}</li>
          <li>{state.address}</li>
          <li>{state.phone}</li>
          <li>Opens at: {state.times.open}</li>
          <li>Closes at: {state.times.close}</li>
          <li>Owner Id: {state.ownerId}</li>
          <li>Timeslots: {state.times.timeslot_length} Minutes</li>
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
  );
};

export default Business;
