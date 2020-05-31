import React from "react";
import { Jumbotron, Button } from "reactstrap";
import Dropdown from "../Dropdown/Dropdown";

const JumboEl = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Placebook</h1>
        <p className="lead">
          The pandemic has changed our way of doing business. Find a business
          and book your appointment today using Placebook.
        </p>
        <hr className="my-2" />
        <p>
          Can't find a business? Let us know and will we reach out to the
          owners.
        </p>
        <p className="lead">
          <Dropdown />
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboEl;
