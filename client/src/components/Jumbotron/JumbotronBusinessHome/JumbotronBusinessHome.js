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
import "./businesshome.css";

const JumbotronPage = () => {
  const [bizState, bizDispatch] = useBizContext();

  return (
    <>
      <MDBJumbotron fluid>
        <MDBContainer>
          <div className="column">
            <h2 className="display-4">Welcome, {bizState.name}</h2>
            <hr></hr>
            <p className="lead">View your appointments</p>
          </div>
        </MDBContainer>
      </MDBJumbotron>
    </>
  );
};

export default JumbotronPage;
