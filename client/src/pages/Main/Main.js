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
    API.checkUser()
      .then((res) => {
        console.log("didmount");
        console.log(res);
        this.setState({ username: res.data.username });
      })
      .catch((err) => console.log(err));
  }

  handleOnClick = (e) => {
    const event = e.target.value;
    API.getBusiness().then((res) => {
      let arr = res.data.filter((business) => event === business.category);
      this.setState((this.state.businessCategory = arr));
      console.log(this.state.businessCategory);
    });
  };

  logState = () => {
    console.log("huuuuuu");
    console.log(this.state.username);
    console.log("huuuuuu");
    console.log(this.state);
    console.log("bye");
  };

  navBar = () => {
    if (this.state.username === null) {
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
        <Navbar />
        {this.logState()}
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
