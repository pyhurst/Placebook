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
      .then((userResult) => {
        this.setState({ username: userResult.data.user.username });
      })

      .catch((err) => console.log(err));
  }

  handleOnClick = (e) => {
    const event = e.target.value;
    API.getBusiness().then((res) => {
      let arr = res.data.filter((business) => event === business.category);
      this.setState((this.state.businessCategory = arr));
    });
  };

  navBar = () => {
    if (this.state.username) {
      return <Navbar status="user" />;
    } else {
      return <Navbar />;
    }
  };

  render() {
    return (
      <div>
        {this.navBar()}
        <section>
          <div id="main">
            <Jumbotron handleOnClick={this.handleOnClick} />
            {this.state.username ? <h1>Hi, {this.state.username}</h1> : ""}
          </div>
          <MyCarousel businessCategory={this.state.businessCategory} />
        </section>
      </div>
    );
  }
}

export default Main;
