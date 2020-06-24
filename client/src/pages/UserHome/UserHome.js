import React from "react";
import "bulma/css/bulma.css";
import Navbar from "../../components/Navbar/Navbar";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import Footer from "../../components/Footer/Footer";
import "./UserHome.css";

const Business = () => {
  const [userState, userDispatch] = useUserContext();
  const [pastResNameState, setpastResNameState] = React.useState([]);
  const [pastResIdState, setpastResIdState] = React.useState([]);
  let theStorage = JSON.parse(localStorage.getItem("currentUser"));
  let userId = theStorage._id;
  let apptData = {
    amount: theStorage.reservations.length,
    reservations: theStorage.reservations,
  };

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
        const colonSplit = timeSplit[0].split(":");

        if (timeSplit[1] === "PM" && colonSplit[0] < 12) {
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
            API.pushPastReservation(user._id, {
              resId: user.reservations[i]._id,
            }).then((result) => {
              localStorage.setItem("currentUser", JSON.stringify(result.data));
              window.location.reload("/user/home");
            });
          }
        } else {
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
            API.pushPastReservation(user._id, {
              resId: user.reservations[i]._id,
            }).then((result) => {
              localStorage.setItem("currentUser", JSON.stringify(result.data));
              window.location.reload("/user/home");
            });
          }
        }
      } else {
        if (timeSplit[1] === "PM" && timeSplit[0] < 12) {
          timeSplit[0] = parseInt(timeSplit[0]) + 12;
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

        if (resStamp < now) {
          API.pushPastReservation(user._id, {
            resId: user.reservations[i]._id,
          }).then((result) => {
            localStorage.setItem("currentUser", JSON.stringify(result.data));
            window.location.reload("/user/home");
          });
        }
      }
    }
    // ideas from
    // https://www.hashbangcode.com/article/convert-date-timestamp-javascript
    function toTimestamp(year, month, day, hour, minute, second, millisecond) {
      var datum = new Date(
        Date.UTC(year, month - 1, day + 1, hour - 1, minute, second, millisecond)
      );
      return datum.getTime();
    }
  };

  //manage the state of past favorites
  const past = () => {
    const nameArray = [];
    const IdArray = [];

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
          <li
            // className="button"
            style={{ display: "block", margin: "10px", width: "auto" }}
          >
            Day: {e.date} Time: {e.time} Place: {e.businessName}
          </li>
          <button
            id="cancel"
            businessId={e.businessId}
            date={e.date}
            time={e.time}
            userId={userId}
            resId={e._id}
            className="btn btn-secondary"
            style={{ paddingTop: "-.2rem" }}
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
    <>
      <Navbar status={userState.username} />

      <Jumbotron style={{marginBottom: 0}}>
        <div className="container">
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
        </div>
      </Jumbotron>
      <div id="upcoming">
      <div className="container"><h5>Upcoming Reservations: </h5><ul>{renderAppts()}</ul></div>
      </div>
      <Footer />
    </>
  );
};

export default Business;
