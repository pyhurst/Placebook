import React from "react";
import "bulma/css/bulma.css";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import Navbar from "../../components/Navbar/Navbar";

const Business = () => {
  const userContext = useUserContext();
  console.log("user context should be here");
  console.log(userContext);
  // useEffect(()=> {
  //   API.getMyInfo().then(success => {
  //     //set the context to my user
  //   })
  // })

  // const renderAppointments = () => {
  //   console.log(userContext[0].reservations[0]);
  // };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">Welcome, {userContext[0].username}</div>
            <div className="column">Appointments: </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
