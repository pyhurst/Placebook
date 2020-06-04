// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import API from "../../utils/API";

const DropdownEl = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  if (props.time === "times") {
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Select Time</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>1:00 AM</DropdownItem>
          <DropdownItem>2:00 AM</DropdownItem>
          <DropdownItem>3:00 AM</DropdownItem>
          <DropdownItem>4:00 AM</DropdownItem>
          <DropdownItem>5:00 AM</DropdownItem>
          <DropdownItem>6:00 AM</DropdownItem>
          <DropdownItem>7:00 AM</DropdownItem>
          <DropdownItem>8:00 AM</DropdownItem>
          <DropdownItem>9:00 AM</DropdownItem>
          <DropdownItem>10:00 AM</DropdownItem>
          <DropdownItem>11:00 AM</DropdownItem>
          <DropdownItem>12:00 PM</DropdownItem>
          <DropdownItem>1:00 PM</DropdownItem>
          <DropdownItem>2:00 PM</DropdownItem>
          <DropdownItem>3:00 PM</DropdownItem>
          <DropdownItem>4:00 PM</DropdownItem>
          <DropdownItem>5:00 PM</DropdownItem>
          <DropdownItem>6:00 PM</DropdownItem>
          <DropdownItem>7:00 PM</DropdownItem>
          <DropdownItem>8:00 PM</DropdownItem>
          <DropdownItem>9:00 PM</DropdownItem>
          <DropdownItem>10:00 PM</DropdownItem>
          <DropdownItem>11:00 PM</DropdownItem>
          <DropdownItem>12:00 AM</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  } else if (props.cat === "cat") {
    return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Category</DropdownToggle>
      <DropdownMenu>
        <DropdownItem value="Gym" onClick={props.handleOnClick}>Gym</DropdownItem>
        <DropdownItem value="Salon" onClick={props.handleOnClick}>Salons</DropdownItem>
        <DropdownItem value="Hardware" onClick={props.handleOnClick}>Hardware</DropdownItem>
        <DropdownItem value="Retail" onClick={props.handleOnClick}>Retail</DropdownItem>
        <DropdownItem value="Education" onClick={props.handleOnClick}>Education</DropdownItem>
        <DropdownItem value="Recreation" onClick={props.handleOnClick}>Recreation</DropdownItem>
        <DropdownItem value="Other" onClick={props.handleOnClick}>Other</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    )
  } else {
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>View Businesses by Category</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="Gym" onClick={props.handleOnClick}>Gym</DropdownItem>
          <DropdownItem value="Salon" onClick={props.handleOnClick}>Salons</DropdownItem>
          <DropdownItem value="Hardware" onClick={props.handleOnClick}>Hardware</DropdownItem>
          <DropdownItem value="Retail" onClick={props.handleOnClick}>Retail</DropdownItem>
          <DropdownItem value="Education" onClick={props.handleOnClick}>Education</DropdownItem>
          <DropdownItem value="Recreation" onClick={props.handleOnClick}>Recreation</DropdownItem>
          <DropdownItem value="Other" onClick={props.handleOnClick}>Other</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};

export default DropdownEl;
