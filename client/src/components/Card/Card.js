import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <MDBCol>
        <MDBCard style={{ width: "15rem" , "height": "30rem", boxShadow: "1rem 0 .4rem rgb(120, 200, 166, 0.5), -1rem 0 .4rem rgb(120, 200, 166, 0.5)"}}>
          <Link to={"/business/page/" + props._id}>
          <MDBCardImage
            className="img-fluid"
            style={{"height": "16rem"}}
            src={props.image}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle style={{"color": "rgb(120, 200, 166)"}} >{props.name}</MDBCardTitle>
            <MDBCardText>{props.category}</MDBCardText>
            <MDBCardText>{props.address}, {props.city}</MDBCardText>
            <MDBCardText>{props.phone}</MDBCardText>
            {/* <Link to={"/business/page/" + props._id} style={{"color": "rgb(100, 180, 214)"}}>View Business Page</Link> */}
          </MDBCardBody>
          </Link>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default Card;
