import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";

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
