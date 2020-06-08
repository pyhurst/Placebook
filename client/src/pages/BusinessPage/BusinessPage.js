import React, { useEffect, useState } from "react";
import Calendarapp from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import API from "../../utils/API";
import Schedule from "../../components/Schedule/Schedule";
import { useBizContext } from "../../utils/BusinessContext";
import { useUserContext } from "../../utils/UserContext";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


function Business() {
  const { id } = useParams();
  const [bizState, bizDispatch] = useBizContext();
  const [userState, userDispatch] = useUserContext();
  const [date, setDate] = useState(new Date());
  const [userAuth, setuserAuth] = useState("");

  useEffect(() => {
    API.getBusinessByIdPost(id, {
      date: date.toLocaleDateString()
    }).then((result) => {
      console.log(result)
      bizDispatch({
        type: "UPDATE_BIZ",
        businessId: result.data.business._id,
        name: result.data.business.name,
        address: result.data.business.address,
        phone: result.data.business.phone,
        reservations: result.data.todaysReservations,
        times: {
          open: result.data.business.times.open,
          close: result.data.business.times.close,
          timeslot_length: result.data.business.times.timeslot_length,
          capacity: result.data.business.times.capacity,
        },
      });
    });

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
  }, [date]);

  return (
    <div>
      <Navbar status={userState.username} />
      <div className="container" style={{backgroundColor: "rgb(100, 180, 214)", borderRadius: "5px"}}>
        <div className="section">
          <ul style={{color: "rgb(107, 114, 125)"}}>
            <li style={{color: "white", fontSize: "3em", textShadow: "1px 2px 3px rgb(120, 200, 166)"}}>{bizState.name}</li>
            {/* <li>Name: {userState.username}</li> */}
            <li>{bizState.address}</li>
            <li>{bizState.phone}</li>
            <li>Opens at: {bizState.times.open}, Closes at: {bizState.times.close}</li>
            {/* <li>Owner Id: {bizState.ownerId}</li> */}
            <li>Timeslots: {bizState.times.timeslot_length} Minutes</li>
          </ul>
        </div>
        <div className="section">
          <div className="row">
            <div className="column is-two-fifths-desktop is-full-mobile is-full-tablet">
              <Calendarapp handleOnChange={setDate}/>
              {/* <Calendar handleOnChange={handleOnChange} value={date}/> */}
            </div>
            <div className="column is-three-fifths-desktop is-full-mobile is-full-tablet">
              <h4 style={{color: "white"}}>Selected Date: {date.toLocaleDateString()}</h4>
              <Schedule dataSelectedDate={date.toLocaleDateString()} todaysReservations={bizState.reservations} />
              {/* bizstate.date */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
