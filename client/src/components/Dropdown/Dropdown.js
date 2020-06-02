// import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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
  } else {

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Business Type</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Gyms</DropdownItem>
          <DropdownItem>Salons</DropdownItem>
          <DropdownItem>Hardware</DropdownItem>
          <DropdownItem>Retail</DropdownItem>
          <DropdownItem>etc</DropdownItem>
          <DropdownItem>etc</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};

export default DropdownEl;
