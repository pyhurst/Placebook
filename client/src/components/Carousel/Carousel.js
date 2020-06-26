import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import API from "../../utils/API";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
//MAPS OVER BUSINESSES TO CREATE CARD COMPONENTS
class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    business: [],
  };

  componentDidMount() {
    API.getBusiness()
      .then((results) => {
        this.setState((this.state.business = results.data));
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.props.businessCategory.length !== 0) {
      return (
        <div id="carouselContainer">
          <Carousel responsive={responsive}>
            {this.props.businessCategory.map((biz) => {
              return (
                <Card
                  key={biz._id}
                  image={biz.image}
                  _id={biz._id}
                  name={biz.name}
                  category={biz.category}
                  address={biz.address}
                  city={biz.city}
                  phone={biz.phone}
                />
                
              );
            })}
          </Carousel>
        </div>
      );
    } else {
      return (
        <div id="carouselContainer">
          <Carousel responsive={responsive}>
            {this.state.business.map((biz) => {
              return (
                <Card
                  key={biz._id}
                  image={biz.image}
                  _id={biz._id}
                  name={biz.name}
                  category={biz.category}
                  address={biz.address}
                  city={biz.city}
                  phone={biz.phone}
                />
              );
            })}
          </Carousel>
        </div>
      );
    }
  }
}

export default MyCarousel;
