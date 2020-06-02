import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const Card = () => {


  return (
    <MDBCol>
      <MDBCard style={{ width: "15rem" }}>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>Business name</MDBCardTitle>
          <MDBCardText>Business Type; City</MDBCardText>
          <MDBCardText>Hours</MDBCardText>
          <MDBBtn href="#">Link to business page</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Card;
