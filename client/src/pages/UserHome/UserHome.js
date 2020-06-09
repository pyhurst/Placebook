import React, { useRef } from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { STATES } from "mongoose";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

const Business = () => {
  const [userState, userDispatch] = useUserContext();
  const [pastResNameState, setpastResNameState] = React.useState([]);
  const [pastResIdState, setpastResIdState] = React.useState([]);
  // const [pastResState, setpastResState] = React.useState([]);

  const checkLocal = () => {
    let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
    if (storageStatus) {
      if (storageStatus.email !== null && userState.username === "") {
        userDispatch({
          type: "ADD_USER",
          username: storageStatus.username,
          email: storageStatus.email,
          reservations: storageStatus.reservations,
          pastReservations: storageStatus.pastReservations,
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
      // ["8", "AM"]
      // ["8:30", "PM"]
      // ["12", "PM"]
      const now = Date.now();
      let resStamp;
      if (timeSplit[0].includes(":")) {
        console.log("includes");
        const colonSplit = timeSplit[0].split(":");
        console.log(colonSplit[0]);

        if (timeSplit[1] === "PM" && colonSplit[0] < 12) {
          console.log(colonSplit[0]);
          colonSplit[0] = parseInt(timeSplit[0]) + 12;
          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            parseInt(colonSplit[0]),
            29,
            0,
            0
          );
          if (resStamp < now) {
            console.log("move to past reservations");
            API.pushPastReservation(user._id, {
              resId: user.reservations[i]._id,
            }).then((result) => {
              console.log(result);
              localStorage.setItem("currentUser", JSON.stringify(result.data));
              window.location.reload("/user/home");
            });
          } else {
            console.log("stays here");
          }
        } else {
          console.log(colonSplit[0]);

          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            parseInt(colonSplit[0]),
            29,
            0,
            0
          );
          if (resStamp < now) {
            console.log("move to past reservations");
            API.pushPastReservation(user._id, {
              resId: user.reservations[i]._id,
            }).then((result) => {
              console.log(result);
              localStorage.setItem("currentUser", JSON.stringify(result.data));
              window.location.reload("/user/home");
            });
          } else {
            console.log("stays here");
          }
        }
      } else {
        if (timeSplit[1] === "PM" && timeSplit[0] < 12) {
          timeSplit[0] = parseInt(timeSplit[0]) + 12;
          console.log("nope");
          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            parseInt(timeSplit[0]),
            0,
            0,
            0
          );
        } else {
          resStamp = toTimestamp(
            parseInt(dateSplit[2]),
            parseInt(dateSplit[0]),
            parseInt(dateSplit[1]),
            parseInt(timeSplit[0]),
            0,
            0,
            0
          );
        }
        console.log("today ", now);
        console.log(resStamp);
        // if(timeSplit[1] === "PM"){
        //   timeSplit[0] = parseInt(timeSplit[0]) + 12;
        if (resStamp < now) {
          console.log("move to past reservations");
          API.pushPastReservation(user._id, {
            resId: user.reservations[i]._id,
          }).then((result) => {
            console.log(result);
            localStorage.setItem("currentUser", JSON.stringify(result.data));
            window.location.reload("/user/home");
          });
        } else {
          console.log("stays here");
        }
      }
      // const resStamp = toTimestamp(parseInt(dateSplit[2]),parseInt(dateSplit[0]),parseInt(dateSplit[1]),timeSplit[0],0,0,0);
      // console.log("today ", now);
      // console.log(resStamp)

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

  //manage the state of past favorites
  const past = () => {
    // const temp = userState.pastReservations.map(reservations => reservations)
    // console.log('first')
    // console.log(JSON.stringify(userState))
    // console.log(JSON.stringify(userState.pastReservations.length))
    // const length = parseInt(userState.pastReservations.length);
    // console.log(typeof length)
    // const pastArray = [];

    // for (let i = 0; i < length; i++) {
    //   // console.log('worked')
    //   // console.log(userState.pastReservations[i])
    //   // JSON.stringify();
    //   // let aTag = `<a href="/home">${JSON.stringify(userState.pastReservations[i].businessName)}</a>`
    //   pastArray.push(userState.pastReservations[i])
    // }
    const nameArray = [];
    const IdArray = [];

    // setpastResState(userState.pastReservations.map(reservations =>
    //   // array = array.push(reservations.businessName);
    //   reservations
    // ));
    // console.log(pastResState);
    // return pastArray;
    for (let i = 0; i < userState.pastReservations.length; i++) {
      if (
        nameArray.includes(userState.pastReservations[i].businessName) === false
      ) {
        nameArray.push(userState.pastReservations[i].businessName);
        IdArray.push(userState.pastReservations[i].businessId);
      }
    }
    setpastResNameState(nameArray);
    setpastResIdState(IdArray);
  };

  React.useEffect(() => {
    deletePast();
    past();
  }, [userState]);

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
            Cancel
          </button>
        </div>
      );
    });
    return something;
  };

  return (
    <div>
      <Navbar status={userState.username} />

      <Jumbotron>
        <h1>Welcome, {userState.username} </h1>
        <h2>Appointments: {apptData.amount}</h2>
        <h4>
          Favorite Spots:{" "}
          {pastResNameState.map((pastRes, i) => {
            return (
              <a
                style={{ display: "block" }}
                href={`/business/page/${pastResIdState[i]}`}
              >
                {pastRes}
              </a>
            );
          })}
        </h4>

        <br />
        <Link
          className="btn btn-secondary"
          style={{ color: "white", textShadow: "1px 1px 1px darkcyan" }}
          to="/businessSignUp"
        >
          Create a business*
        </Link>
        <br />
        <br />
        <h6>
          *When you create a business account, you will not be able to make
          personal reservations.
        </h6>
      </Jumbotron>
      <div className="container">{renderAppts()}</div>
    </div>
  );
};

export default Business;
