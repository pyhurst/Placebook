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
import { useBizContext } from "../../utils/BusinessContext";
import API from "../../utils/API";

const Card = (props) => {
  const [state, dispatch] = useBizContext();
  const linkClicked = (e) => {
    console.log(props._id);
    API.getBusinessById(props._id)
      .then((result) => {
        // console.log(result);
        dispatch({
          type: "UPDATE_BIZ",
          businessId: result.data._id,
          name: result.data.name,
          address: result.data.address,
          phone: result.data.phone,
          reservations: [result.data.reservations],
          times: {
            open: result.data.open,
            close: result.data.close,
            timeslot_length: result.data.timeslot_length,
            capacity: result.data.capacity,
          },
        });
      })
      .catch((err) => console.log(err));
  };

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
            <MDBCardText>{props.city}</MDBCardText>
            <MDBCardText>{props.address}</MDBCardText>
            <MDBCardText>{props._id}</MDBCardText>
            <Link to="/business/page" onClick={linkClicked}>
              View
            </Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default Card;
