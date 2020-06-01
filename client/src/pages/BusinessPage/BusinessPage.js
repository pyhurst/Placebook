import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
// import API from "../../utils/API";

const Business = () => {
  return (
    <div class="container">
      <div class="section">
        <h1>(Business Image)</h1>
        <ul>
          <li>-Name</li>
          <li>-Address</li>
          <li>-Phone</li>
          <li>-Hours</li>
        </ul>
      </div>
      <div class="section">
        <Calendar />
      </div>
    </div>
  );
};

export default Business;
