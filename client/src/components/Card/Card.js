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
        <MDBCard style={{ width: "15rem" }}>
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{props.name}</MDBCardTitle>
            <MDBCardText>{props.category}</MDBCardText>
            <MDBCardText>{props.address}</MDBCardText>
            <Link to={"/business/page/" + props._id}>View Business Page</Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default Card;
