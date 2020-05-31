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
};

export default DropdownEl;
