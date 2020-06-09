import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
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
