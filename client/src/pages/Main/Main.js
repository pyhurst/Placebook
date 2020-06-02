<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
// import API from "../../utils/API";
// import Card from "../../components/Card/Card";
=======
import React, { useEffect } from "react";
import MyCarousel from "../../components/Carousel/Carousel.js";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
import API from "../../utils/API.js";
>>>>>>> master

const Main = () => {
 
// const [state, dispatch] = useStoreContext();

useEffect(() => {

},[])


  return (
    <section>
      <div id="main">
        <Jumbotron />
      </div>
<<<<<<< HEAD

      <Carousel />
=======
      <MyCarousel />
>>>>>>> master
    </section>
  );
};

export default Main;
