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
        <MDBCard style={{ width: "15rem" , "height": "32rem"}}>
          <Link to={"/business/page/" + props._id}>
          <MDBCardImage
            className="img-fluid"
            style={{"height": "15rem"}}
            src={props.image}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle style={{"color": "rgb(120, 200, 166)"}} >{props.name}</MDBCardTitle>
            <MDBCardText>{props.category}</MDBCardText>
            <MDBCardText>{props.address}</MDBCardText>
            {/* <Link to={"/business/page/" + props._id} style={{"color": "rgb(100, 180, 214)"}}>View Business Page</Link> */}
          </MDBCardBody>
          </Link>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default Card;
