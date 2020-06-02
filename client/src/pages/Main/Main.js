import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
// import API from "../../utils/API";
// import Card from "../../components/Card/Card";

const Main = () => {
  return (
    <section>
      <div id="main">
        <Jumbotron />
      </div>

      <Carousel />
    </section>
  );
};

export default Main;
