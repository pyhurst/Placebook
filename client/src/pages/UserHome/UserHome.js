import React from "react";
import "bulma/css/bulma.css";
import { useUserContext } from "../../utils/UserContext";

const Business = () => {
  const userContext = useUserContext();
  console.log("user context should be here");
  console.log(userContext);

  const renderAppointments = () => {
    console.log(userContext[0].reservations[0]);
  };

  return (
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column">Welcome, {userContext[0].username}</div>
          <div className="column">Appointments: {renderAppointments()}</div>
        </div>
      </div>
    </div>
  );
};

export default Business;
