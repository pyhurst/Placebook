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
  } else {
    // const [category, setCategory] = useState({
    //   categories: []
    // })
    const handleOnClick = (e) => {
      const event = e.target.value
      // console.log(event)
      API.getBusiness()
        // .then(res => console.log(res.data))
        .then(res => res.data.filter(function (business) {
          if (event === business.category) {
            console.log("test")
          }
        }))
    }

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>View Businesses by Category</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="Gym" onClick={handleOnClick}>Gym</DropdownItem>
          <DropdownItem value="Salon" onClick={handleOnClick}>Salons</DropdownItem>
          <DropdownItem value="Hardware" onClick={handleOnClick}>Hardware</DropdownItem>
          <DropdownItem value="Retail" onClick={handleOnClick}>Retail</DropdownItem>
          <DropdownItem value="Education" onClick={handleOnClick}>Education</DropdownItem>
          <DropdownItem value="Recreation" onClick={handleOnClick}>Recreation</DropdownItem>
          <DropdownItem value="Other" onClick={handleOnClick}>Other</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};

export default DropdownEl;
