import React from "react";
import { Jumbotron } from "reactstrap";
import Dropdown from "../../Dropdown/Dropdown";

const JumboEl = (props) => {
  return (
    <div>
      <Jumbotron>
        <div className="container">
        <h1 className="display-3">Welcome to Placebook</h1>
        <h5 className="lead">
          Find a business and book your appointment today using Placebook!
        </h5>
        <hr className="my-2" />
        <p>
          Can't find the business you're looking for? Let us know and will we reach out to the
          owners.
        </p>
        <Dropdown handleOnClick={props.handleOnClick}/>
        </div>
      </Jumbotron>
    </div>
  );
};

export default JumboEl;
