import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBNavLink,
  MDBNav,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";

const JumbotronPage = () => {
  return (
    <>
      <hr />
      <MDBJumbotron fluid>
        <MDBContainer>
          <h2 className="display-4">Welcome, businessname</h2>
          <p className="lead">See your appointments</p>
        </MDBContainer>
      </MDBJumbotron>

      <hr />
    </>
  );
};

export default JumbotronPage;
