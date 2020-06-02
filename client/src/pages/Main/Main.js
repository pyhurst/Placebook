import React, { useEffect } from "react";
import MyCarousel from "../../components/Carousel/Carousel.js";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
import API from "../../utils/API.js";

const Main = () => {
  // const [state, dispatch] = useStoreContext();

  useEffect(() => {}, []);

  return (
    <section>
      <div id="main">
        <Jumbotron />
      </div>
      <MyCarousel />
    </section>
  );
};

export default Main;
