import React from "react";
import MyCarousel from "../../components/Carousel/Carousel.js";
import Jumbotron from "../../components/Jumbotron/JumbotronHomePage/Jumbotron";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar/Navbar";
import { UserContext } from "../../utils/UserContext";

class Main extends React.Component {
  static contextType = UserContext;
  state = {
    businessCategory: [],
    data: null,
    username: "",
    email: "",
    reservations: [],
    _id: "",
  };

  checkLocal = () => {
    let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
    if (storageStatus) {
      if (storageStatus.username !== null && this.state.data === null) {
        this.setState({
          username: storageStatus.username,
          email: storageStatus.email,
          reservations: storageStatus.reservations,
          _id: storageStatus._id,
        });
      }
    }
  };

  componentDidMount() {
    this.checkLocal();
  }

  handleOnClick = (e) => {
    const event = e.target.value;
    API.getBusiness().then((res) => {
      let arr = res.data.filter((business) => event === business.category);
      this.setState((this.state.businessCategory = arr));
    });
  };

  render() {
    return (
      <div>
        <Navbar status={this.state.username} />
        <section>
          <div id="main">
            <Jumbotron handleOnClick={this.handleOnClick} />
            {this.state.username ? <h2 style={{textAlign: "center"}}>Hi, {this.state.username}!</h2> : ""}
          </div>
          <MyCarousel businessCategory={this.state.businessCategory} />
        </section>
        <div style={{height: "200px"}}></div>
      </div>
    );
  }
}

export default Main;
