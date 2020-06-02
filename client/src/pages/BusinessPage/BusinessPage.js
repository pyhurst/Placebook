import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import API from "../../utils/API";
import Time from "../../components/Timeslots/Timeslots";
import Schedule from "../../components/Schedule/Schedule";
import { useBizContext } from "../../utils/BusinessContext";

function Business() {
  const bizContext = useBizContext();

  // const [business, setBusiness] = useState({
  //   name: "",
  //   address: "",
  //   phone: "",
  //   ownerId: "",
  //   reservations: [],
  //   times: {
  //     open: 0,
  //     close: 0,
  //     timeslot_length: 0,
  //   },
  // });



  function loadBusiness() {
    console.log("test1");
    console.log(bizContext[0]);
    // API.getBusiness()
    //   .then((res) => {
    //     setBusiness({
    //       ...business,
    //       name: res.data[0].name,
    //       address: res.data[0].address,
    //       phone: res.data[0].phone,
    //       ownerId: res.data[0].ownerId,
    //       reservations: res.data[0].reservations,
    //       times: {
    //         open: res.data[0].times.open,
    //         close: res.data[0].times.close,
    //         timeslot_length: res.data[0].times.timeslot_length,
    //       },
    //     });
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));
  }
  useEffect(() => {
    loadBusiness();
  }, [bizContext]);

  return (
    <div className="container">
      <div className="section">
        <ul>
          <li>{bizContext[0].name}</li>
          <li>{bizContext[0].address}</li>
          <li>{bizContext[0].phone}</li>
          <li>Opens at: {bizContext[0].times.open}</li>
          <li>Closes at: {bizContext[0].times.close}</li>
          <li>Owner Id: {bizContext[0].ownerId}</li>
          <li>Timeslots: {bizContext[0].times.timeslot_length}</li>
        </ul>
      </div>
      <div className="section">
        <div className="row">
          <div className="column is-two-fifths-desktop is-full-mobile is-full-tablet">
            <Calendar />
          </div>
          <div className="column is-three-fifths-desktop is-full-mobile is-full-tablet">
            <h1>Date: putdatehere</h1>
            <Schedule openTime={7} closeTime={10} timeslot={15} capacity={30}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
