import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import "./Carousel.css";
import API from "../../utils/API";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class MyCarousel extends React.Component {
  state = {
    business: [],
  };

  componentDidMount() {
    API.getBusiness()
      .then((results) => {
        console.log(results.data);
        this.setState((this.state.business = results.data));
        console.log("test");
        console.log(this.state.business);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Carousel responsive={responsive}>
          {this.state.business.map((biz) => {
            return (
              <Card
                key={biz._id}
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

export default MyCarousel;
