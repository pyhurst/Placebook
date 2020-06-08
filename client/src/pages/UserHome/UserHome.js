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
    API.deleteUserReservation(e.target.getAttribute("userId"), {
      businessId: e.target.getAttribute("businessId"),
      date: e.target.getAttribute("date"),
      time: e.target.getAttribute("time"),
      resId: e.target.getAttribute("resId"),
    })
      .then((userData) => {
        localStorage.setItem("currentUser", JSON.stringify(userData.data));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const deletePast = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    for (let i = 0; i < user.reservations.length; i++) {
      const dateSplit = user.reservations[i].date.split("/");
      const timeSplit = user.reservations[i].time.split(" ");
      const now = Date.now();
      let resStamp;
      if (timeSplit[0].includes(":")) {
        const colonSplit = timeSplit[0];
        if (timeSplit[1] === "PM") {
          colonSplit[0] = parseInt(timeSplit[0]) + 12;
          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            colonSplit[0],
            30,
            0,
            0
          );
        } else {
          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            colonSplit[0],
            30,
            0,
            0
          );
        }
      } else {
        if (timeSplit[1] === "PM") {
          timeSplit[0] = parseInt(timeSplit[0]) + 12;
          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            timeSplit[0],
            0,
            0,
            0
          );
        } else {
          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            timeSplit[0],
            0,
            0,
            0
          );
        }
      }

      if (resStamp < now) {
        API.pushPastReservation(user._id, {
          resId: user.reservations[i]._id,
        }).then((result) => {
          localStorage.setItem("currentUser", JSON.stringify(result.data));
          window.location.reload("/user/home");
        });
      } else {
        console.log("stays here");
      }
      // console.log(toTimestamp(parseInt(dateSplit[2]),parseInt(dateSplit[0]),parseInt(dateSplit[1]),timeSplit[0]))
    }
    // ideas from
    // https://www.hashbangcode.com/article/convert-date-timestamp-javascript
    function toTimestamp(year, month, day, hour, minute, second, millisecond) {
      var datum = new Date(
        Date.UTC(year, month - 1, day, hour - 1, minute, second, millisecond)
      );
      return datum.getTime();
    }
  };

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
