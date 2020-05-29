import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import API from "../utils/API";
import "./Main.css";

const Main = () => {
  return (
    <div id="main">
      <h1>this is our main page</h1>
      <Dropdown />
    </div>
  );
};

export default Main;
