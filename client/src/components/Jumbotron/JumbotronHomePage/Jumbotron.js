import React from "react";
import { Jumbotron } from "reactstrap";
import Dropdown from "../../Dropdown/Dropdown";

const JumboEl = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Placebook</h1>
        <p className="lead">
          COVID-19 is changing the way we do business. Find a business
          and book your appointment today using Placebook!
        </p>
        <hr className="my-2" />
        <p>
          Can't find the business you're looking for? Let us know and will we reach out to the
          owners.
        </p>

        <Dropdown handleOnClick={props.handleOnClick}/>
      </Jumbotron>
    </div>
  );
};

export default JumboEl;
