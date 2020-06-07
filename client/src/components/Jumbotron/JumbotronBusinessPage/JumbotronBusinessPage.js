import React from "react";
import { Link } from "react-router-dom";
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
import SectionContainer from "../../SectionMDB/SectionContainer";
import Mallpicture from "../../../Images/mall.jpg";

const JumbotronPage = () => {
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBRow className="mt-5">
          <MDBCol>
            <SectionContainer noBorder>
              <MDBJumbotron className="text-center">
                <MDBCardTitle className="card-title h4 pb-2">
                  <strong>Scheduling for your business</strong>
                </MDBCardTitle>
                <MDBCardImage src={Mallpicture} className="img-fluid" />
                <MDBCardBody>
                  <MDBCardTitle className="indigo-text h5 m-4">
                    Placeholder
                  </MDBCardTitle>
                  <MDBCardText>
                    Click below to add your business to Placebook!
                  </MDBCardText>
                  <Link color="primary" to="/businessSignUp">
                    Sign Up
                  </Link>
                  <hr />

                  <MDBNav className="justify-content-center">
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
                  </MDBNav>
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
