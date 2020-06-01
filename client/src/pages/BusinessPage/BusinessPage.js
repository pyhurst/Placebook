import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import "bulma/css/bulma.css";
import API from "../../utils/API";

const Business = () => {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    loadBusiness();
  }, []);

  function loadBusiness() {
    console.log("test1");
    API.getBusiness()
      .then((res) => {
        console.log(res);
        // setBusiness(res.data)
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="section">
        <h1>(Business Image)</h1>
        <ul>
          <li>-Name</li>
          <li>-Address</li>
          <li>-Phone</li>
          <li>-Hours</li>
        </ul>
      </div>
      <div className="section">
        <Calendar />
      </div>
    </div>
  );
};

export default Business;
