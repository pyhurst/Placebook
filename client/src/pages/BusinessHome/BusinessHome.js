import React, { useState } from "react";
import Calendarapp from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import Jumbo from "../../components/Jumbotron/JumbotronBusinessHome/JumbotronBusinessHome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useBizContext } from "../../utils/BusinessContext";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "./BusinessHome.css";

const BusinessHome = () => {
  const [bizState, bizDispatch] = useBizContext();
  const [userState, userDispatch] = useUserContext();
  const [date, setDate] = React.useState(new Date());
  const [customerNamesState, setCustomerNamesState] = useState([]);
  const [customerDisplayState, setCustomerDisplayState] = useState("noDisplay");
  const [appointments, setAppointments] = useState([]);

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

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    API.findOneBiz(user._id, {
      date: date.toLocaleDateString(),
    })
      .then((bizResult) => {
        setCustomerDisplayState("noDisplay");
        setAppointments(bizResult.data.business.reservations);
        bizDispatch({
          type: "UPDATE_BIZ",
          businessId: bizResult.data.business._id,
          name: bizResult.data.business.name,
          address: bizResult.data.business.address,
          phone: bizResult.data.business.phone,
          reservations: bizResult.data.todaysReservations,
          times: {
            open: bizResult.data.business.times.open,
            close: bizResult.data.business.times.close,
            timeslot_length: bizResult.data.business.times.timeslot_length,
            capacity: bizResult.data.business.times.capacity,
          },
        });
      })
      .catch((err) => console.log(err));
  }, [date]);

  const renderAppts = () => {
    console.log(bizState);
    let something = bizState.reservations.map((e) => {
      return (
        <div className="row">
          <button
            className="btn btn-secondary"
            style={{ display: "block", margin: "10px", width: "auto" }}
            value={e._id}
            onClick={displayCustomerNames}
          >
            Time: {e.time}
          </button>
        </div>
      );
    });
    return something;
  };

  const displayCustomerNames = (e) => {
    console.log(e.target.value);
    const findResId = e.target.value;
    bizState.reservations.map((res) => {
      if(res._id === findResId){
        console.log(res.customerIds)
        // res.customerIds.map(id => {
        //   setCustomerNamesState(...customerNamesState, id)
        // })
        setCustomerNamesState(res.customerIds)
        console.log(customerNamesState)
        setCustomerDisplayState("display")
      }
    })
  };

  return (
    <div>
      <Navbar status={userState.username} />
      <div className="container">
        <Jumbo date={date.toLocaleDateString()}/>
        <div className="section busPageSec">
          <div className="columns">
            <div className="column">
              <Calendarapp handleOnChange={setDate} />
            </div>
            <div className="column">
              <p>Your appointments: </p>
              {renderAppts()}
              <div id="displayCustomerNames" className={customerDisplayState}>
                <p>Customer Names: </p>
                <ul>
                {customerNamesState.map(e => {
                  return (<li>{e}</li>)
                })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="section busPageSec">
          {/* <div className="column">
            <h6>Date: {date.toLocaleDateString()}</h6>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessHome;
