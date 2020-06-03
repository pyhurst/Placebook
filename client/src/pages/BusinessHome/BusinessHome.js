import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import Card from "../../components/Card/Card";
import Jumbo from "../../components/Jumbotron/JumbotronBusinessHome/JumbotronBusinessHome";
import Navbar from "../../components/Navbar/Navbar";
const BusinessHome = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbo />
        <div className="section">
          <div className="columns">
            <div className="column">
              <Calendar />
            </div>
            <div className="column">
              <h6>Date:</h6>
              <p>Your appointments:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHome;
