import React, { useEffect } from "react";
import MyCarousel from "../../components/Carousel/Carousel.js";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar/Navbar";

const Main = () => {
  // const [state, dispatch] = useStoreContext();

  useEffect(() => {}, []);

  return (
    <div>
      <Navbar />
      <section>
        <div id="main">
          <Jumbotron />
        </div>
        <MyCarousel />
      </section>
    </div>
  );
};

export default Main;
