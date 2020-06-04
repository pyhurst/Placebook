import React from "react";
import MyCarousel from "../../components/Carousel/Carousel.js";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar/Navbar";

class Main extends React.Component {
  state = {
    businessCategory: [],
    username: "",
  };

  componentDidMount() {
    console.log("component mounted");
    // API.checkUser()
    //   .then((res) => {
    //     this.setState({ username: res.data.username });
    //   })
    //   .catch((err) => console.log(err));
  }

  handleOnClick = (e) => {
    const event = e.target.value;
    API.getBusiness().then((res) => {
      let arr = res.data.filter((business) => event === business.category);
      this.setState((this.state.businessCategory = arr));
    });
  };

  navBar = () => {
<<<<<<< HEAD
    if (this.state.username === null) {
      console.log("it is an empty string");
=======
    if (this.state.user === null) {
>>>>>>> master
      return <Navbar />;
    } else {
      return <Navbar user="user" />;
    }
  };

  render() {
    return (
      <div>
        <Navbar />
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
