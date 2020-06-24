import React from "react";
import { Link } from "react-router-dom";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";
import SectionContainer from "../../SectionMDB/SectionContainer";
import Mallpicture from "../../../Images/mall.jpg";

const JumbotronPage = () => {
  const storeLocal = () => {
    localStorage.setItem("isBusiness", "true");
  };

  return (
    <>
      <MDBContainer >
        <MDBRow >
          <MDBCol>
            <SectionContainer noBorder>
              <MDBJumbotron className="text-center">
                <MDBCardTitle className="card-title h4 pb-2">
                  <h2 style={{textShadow: "1px 2px 3px rgb(107, 114, 125)"}}>Easy Scheduling for Your Business</h2>
                </MDBCardTitle>
                <MDBCardImage src={Mallpicture} className="img-fluid" />
                <MDBCardBody>
                  <MDBCardTitle className="indigo-text h5 m-4">
                    Click below to add your business to Placebook!
                  </MDBCardTitle>
                  <MDBCardText>
                    Placebook is an innovative app designed to help your
                    business thrive during COVID-19 and onwards. Sign up to
                    allow your business to accept customer reservations and keep
                    track of these reservations via designated time slots and
                    capacities.
                  </MDBCardText>
                  <Link color="primary" to="/signup" className="btn btn-secondary" onClick={storeLocal}>
                    Sign Up
                  </Link>
                  <hr />

                  {/* <MDBNav className="justify-content-center">
                    <MDBNavLink to="#!">
                      <MDBIcon
                        fab
                        icon="linkedin-in"
                        className="grey-text"
                        size="lg"
                      />
                    </MDBNavLink>
                    <MDBNavLink to="#!">
                      <MDBIcon
                        fab
                        icon="twitter"
                        className="grey-text"
                        size="lg"
                      />
                    </MDBNavLink>
                    <MDBNavLink to="#!">
                      <MDBIcon
                        fab
                        icon="facebook-f"
                        className="grey-text"
                        size="lg"
                      />
                    </MDBNavLink>
                  </MDBNav> */}
                </MDBCardBody>
              </MDBJumbotron>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default JumbotronPage;
