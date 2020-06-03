import React, { useEffect, useState } from "react";
import MyCarousel from "../../components/Carousel/Carousel.js";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
import API from "../../utils/API.js";

class Main extends React.Component {
  // const [state, dispatch] = useStoreContext();
 state = {
   businessCategory: []
 }

 handleOnClick = (e) => {
    const event = e.target.value
    // console.log(event)
    API.getBusiness()
      // .then(res => console.log(res.data))
      .then(res => {
        let arr = res.data.filter((business) => event === business.category)
      // console.log(arr)
      this.setState(this.state.businessCategory = arr)
      console.log(this.state.businessCategory)
      })
  }

  // useEffect(() => {}, []);
render() {
  return (
    <section>
      <div id="main">
        <Jumbotron handleOnClick={this.handleOnClick}/>
      </div>
      <MyCarousel businessCategory={this.state.businessCategory}/>
    </section>
  );
}
};

export default Main;
