import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import "./Carousel.css";
import { useStoreContext } from "../../utils/BusinessContext";
import API from "../../utils/API";
import axios from "axios";

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
  // const [state, setState] = useState({
  //   business: []
  // });
  state = {
    business: [],
  };

  componentDidMount() {
    axios
      .get("/api/businesses/all")
      .then((results) => {
        console.log(results.data);
        this.setState((this.state.business = results.data));
        console.log("test");
        console.log(this.state.business);
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   axios.get("/api/businesses/all")
  //     .then(results => {
  //       console.log(results.data)
  //       setState({...state, business: [results.data]})
  //       console.log("test")
  //       console.log(state)
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // function loadBusinesses() {
  // Axios.get("/api/businesses/all")
  //   .then(results => {
  //     console.log(results.data)
  //     setState(...state, results.data)
  //     console.log("test")
  //     console.log(state)
  //   })
  //   .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        {/* <h1>{state.business}</h1> */}
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
