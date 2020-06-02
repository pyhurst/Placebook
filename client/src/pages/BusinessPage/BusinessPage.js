import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import API from "../../utils/API";
import Time from "../../components/Timeslots/Timeslots";
import Schedule from "../../components/Schedule/Schedule";

const Business = () => {
  const [business, setBusiness] = useState({
    name: "",
    address: "",
    phone: "",
    ownerId: "",
    reservations: [],
    times: {
      open: 0,
      close: 0,
      timeslot_length: 0,
    },
  });

  useEffect(() => {
    loadBusiness();
  }, []);

  function loadBusiness() {
    console.log("test1");
    API.getBusiness()
      .then((res) => {
        setBusiness({
          ...business,
          name: res.data[0].name,
          address: res.data[0].address,
          phone: res.data[0].phone,
          ownerId: res.data[0].ownerId,
          reservations: res.data[0].reservations,
          times: {
            open: res.data[0].times.open,
            close: res.data[0].times.close,
            timeslot_length: res.data[0].times.timeslot_length,
          },
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="section">
        <ul>
          <li>{business.name}</li>
          <li>{business.address}</li>
          <li>{business.phone}</li>
          <li>Opens at: {business.times.open}</li>
          <li>Closes at: {business.times.close}</li>
          <li>Owner Id: {business.ownerId}</li>
          <li>Timeslots: {business.times.timeslot_length}</li>
        </ul>
      </div>
      <div className="section">
        <div className="row">
          <div className="column is-two-fifths-desktop is-full-mobile is-full-tablet">
            <Calendar />
          </div>
          <div className="column is-three-fifths-desktop is-full-mobile is-full-tablet">
            <h1>Date: putdatehere</h1>
            <Schedule openTime={7} closeTime={20} timeslot={60} capacity={30}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
