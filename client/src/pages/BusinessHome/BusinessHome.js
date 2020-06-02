import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";

const BusinessHome = () => {
  return (
    <div className="container">
      <h3>Business Name</h3>
      <ul>
        <li>location</li>
      </ul>
      <div className="section">
        <div className="columns">
          <div className="column">
            <Calendar />
          </div>
          <div className="column">
            <h1>Schedule:</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
