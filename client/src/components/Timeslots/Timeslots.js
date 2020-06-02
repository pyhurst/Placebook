import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
// import DocsLink from "../components/docsLink";
import SectionContainer from "../../components/SectionMDB/SectionContainer";

const Table = (props) => {
  const data = {
    columns: [
      {
        label: "Time",
        field: "id",
        sort: "asc",
      },
      {
        label: "Availablity",
        field: "heading0",
        sort: "asc",
      },
    ],
    rows: [
      {
        id: "7am",
        heading0: "person",
      },
      {
        id: "8am",
        heading0: "person",
      },
      {
        id: "9am",
        heading0: "person",
      },
      {
        id: "10am",
        heading0: "person",
      },
      {
        id: "11am",
        heading0: "person",
      },
      {
        id: "12pm",
        heading0: "person",
      },
      {
        id: "1pm",
        heading0: "person",
      },
      {
        id: "2pm",
        heading0: "person",
      },
      {
        id: "3pm",
        heading0: "person",
      },
      {
        id: "4pm",
        heading0: "person",
      },
      {
        id: "5pm",
        heading0: "person",
      },
      {
        id: "6pm",
        heading0: "person",
      },
    ],
  };

  return (
    <MDBContainer className="mt-3">
      <MDBRow className="py-3">
        <MDBCol md="12">
          <SectionContainer noBorder header="Today's Schedule">
            <MDBCard>
              <MDBCardBody>
                <MDBTable responsive>
                  <MDBTableHead columns={data.columns} />
                  <MDBTableBody rows={data.rows} />
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </SectionContainer>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Table;
