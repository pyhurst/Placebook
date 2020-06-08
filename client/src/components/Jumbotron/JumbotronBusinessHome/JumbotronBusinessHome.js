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
import { useBizContext } from "../../../utils/BusinessContext";

const JumbotronPage = () => {
  const [bizState, bizDispatch] = useBizContext();

  return (
    <>
      <hr />
      <MDBJumbotron fluid>
        <MDBContainer>
          <div className="column">
            <h2 className="display-4">Welcome, {bizState.name}</h2>
            <p className="lead">See your appointments</p>
          </div>
        </MDBContainer>
      </MDBJumbotron>

      <hr />
    </>
  );
};

export default JumbotronPage;
