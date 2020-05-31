import React from "react";
import "./Main.css";
import Carousel from "../../components/Carousel/Carousel";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const Main = () => {
  return (
    <div id="main">
      <Jumbotron />
      <Carousel />
    </div>
  );
};

export default Main;
