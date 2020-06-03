import React, { useEffect, useState } from "react";
import MyCarousel from "../../components/Carousel/Carousel.js";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar/Navbar";

class Main extends React.Component {
  // const [state, dispatch] = useStoreContext();
  state = {
    businessCategory: [],
    user: "",
  };

  handleOnClick = (e) => {
    const event = e.target.value;
    // console.log(event)
    API.getBusiness()
      // .then(res => console.log(res.data))
      .then((res) => {
        let arr = res.data.filter((business) => event === business.category);
        // console.log(arr)
        this.setState((this.state.businessCategory = arr));
        console.log(this.state.businessCategory);
      });
  };

  componentDidMount() {
    API.checkUser()
      .then((res) => {
        console.log("test");
        console.log(res);
        this.setState({ user: res.data.user });
      })
      .catch((err) => console.log(err));
  }

  navBar = () => {
    if (this.state.user === null) {
      console.log("it is an empty string");
      return <Navbar />;
    } else {
      console.log("there is a user logged in");
      return <Navbar user="user" />;
    }
  };

  render() {
    return (
      <div>
        {this.navBar()}
        <section>
          <div id="main">
            <Jumbotron handleOnClick={this.handleOnClick} />
          </div>
          <MyCarousel businessCategory={this.state.businessCategory} />
        </section>
      </div>
    );
  }
}

export default Main;
