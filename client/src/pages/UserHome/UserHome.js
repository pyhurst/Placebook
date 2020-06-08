import React, { useRef } from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { STATES } from "mongoose";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

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
    console.log(e.target.getAttribute("userId"));
    console.log(e.target.getAttribute("resId"));





    API.deleteUserReservation(e.target.getAttribute("userId"), {
      businessId: e.target.getAttribute("businessId"),
      date: e.target.getAttribute("date"),
      time: e.target.getAttribute("time"),
      resId: e.target.getAttribute("resId"),
    })
      .then((userData) => {
        console.log(userData);
        localStorage.setItem("currentUser", JSON.stringify(userData.data));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deletePast = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    for (let i = 0; i < user.reservations.length; i++) {
      console.log(user.reservations[i].date);
      console.log(user.reservations[i].time);
      console.log(user.reservations[i].date.split("/"));
      console.log(user.reservations[i].time.split(" "));
      const dateSplit = user.reservations[i].date.split("/");
      const timeSplit = user.reservations[i].time.split(" ");
      const now = Date.now();
      // const date = new Date(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getDate(), new Date().getUTCHours());
      if(timeSplit[1] === "PM"){
        timeSplit[0] = parseInt(timeSplit[0]) + 12;
        // console.log(toTimestamp(parseInt(dateSplit[2]),parseInt(dateSplit[0]),parseInt(dateSplit[1]),timeSplit[0]))
        // return timeSplit[0];
      } 
      // else {
      //   return timeSplit[0];
      //   // console.log(toTimestamp(parseInt(dateSplit[2]),parseInt(dateSplit[0]),parseInt(dateSplit[1]),timeSplit[0]))
      // }
      const resStamp = toTimestamp(parseInt(dateSplit[2]),parseInt(dateSplit[0]),parseInt(dateSplit[1]),timeSplit[0],0,0,0);
      console.log("today ", now);
      console.log(resStamp)

      if(resStamp < now){
        console.log("move to past reservations")
        API.pushPastReservation(user._id, {
          resId: user.reservations[i]._id
        })
        .then(result => {
          console.log(result)
          localStorage.setItem("currentUser", JSON.stringify(result.data));
          window.location.reload("/user/home");
        })
      } else {
        console.log("stays here")
      }
      // console.log(toTimestamp(parseInt(dateSplit[2]),parseInt(dateSplit[0]),parseInt(dateSplit[1]),timeSplit[0]))
    }
    // ideas from
    // https://www.hashbangcode.com/article/convert-date-timestamp-javascript
    function toTimestamp(year,month,day,hour,minute,second,millisecond){
      var datum = new Date(Date.UTC(year,month-1,day,hour-1,minute,second,millisecond));
      return datum.getTime();
     }
  }

  React.useEffect(() => {
    deletePast();
  }, []);

  const renderAppts = () => {
    let something = apptData.reservations.map((e) => {
      return (
        <div className="row">
          <button
            className="button"
            style={{ display: "block", margin: "10px", width: "auto" }}
          >
            Day: {e.date} Time: {e.time} Place: {e.businessName}
          </button>
          <button
            businessId={e.businessId}
            date={e.date}
            time={e.time}
            userId={userId}
            resId={e._id}
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
            <div className="column">
              <Link
                style={{ color: "rgb(120, 200, 166)" }}
                to="/businessSignUp"
              >
                Create a business
              </Link>
            </div>
          </div>
          {renderAppts()}
        </div>
      </div>
    </div>
  );
};

export default Business;
