// import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";


const DropdownEl = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
  // const onSwitch = (e) => {
  //   console.log(e.target.value)
  // }

  // const categoryRef = React.createRef();


  if (props.time === "times") {
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Select Time</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="4" onClick={props.onSwitch}>4:00 AM</DropdownItem>
          <DropdownItem value="5" onClick={props.onSwitch}>5:00 AM</DropdownItem>
          <DropdownItem value="6" onClick={props.onSwitch}>6:00 AM</DropdownItem>
          <DropdownItem value="7" onClick={props.onSwitch}>7:00 AM</DropdownItem>
          <DropdownItem value="8" onClick={props.onSwitch}>8:00 AM</DropdownItem>
          <DropdownItem value="9" onClick={props.onSwitch}>9:00 AM</DropdownItem>
          <DropdownItem value="10" onClick={props.onSwitch}>10:00 AM</DropdownItem>
          <DropdownItem value="11" onClick={props.onSwitch}>11:00 AM</DropdownItem>
          <DropdownItem value="12" onClick={props.onSwitch}>12:00 PM</DropdownItem>
          <DropdownItem value="13" onClick={props.onSwitch}>1:00 PM</DropdownItem>
          <DropdownItem value="14" onClick={props.onSwitch}>2:00 PM</DropdownItem>
          <DropdownItem value="15" onClick={props.onSwitch}>3:00 PM</DropdownItem>
          <DropdownItem value="16" onClick={props.onSwitch}>4:00 PM</DropdownItem>
          <DropdownItem value="17" onClick={props.onSwitch}>5:00 PM</DropdownItem>
          <DropdownItem value="18" onClick={props.onSwitch}>6:00 PM</DropdownItem>
          <DropdownItem value="19" onClick={props.onSwitch}>7:00 PM</DropdownItem>
          <DropdownItem value="20" onClick={props.onSwitch}>8:00 PM</DropdownItem>
          <DropdownItem value="21" onClick={props.onSwitch}>9:00 PM</DropdownItem>
          <DropdownItem value="22" onClick={props.onSwitch}>10:00 PM</DropdownItem>
          <DropdownItem value="23" onClick={props.onSwitch}>11:00 PM</DropdownItem>
          <DropdownItem value="24" onClick={props.onSwitch}>12:00 AM</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  } else if (props.cat === "cat") {
    return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Business Category</DropdownToggle>
      <DropdownMenu>
        <DropdownItem value="Gym" onClick={props.onSwitch}>Gym</DropdownItem> 
        <DropdownItem value="Beauty" onClick={props.onSwitch}>Beauty</DropdownItem>
        <DropdownItem value="Hardware" onClick={props.onSwitch}>Hardware</DropdownItem>
        <DropdownItem value="Retail" onClick={props.onSwitch}>Retail</DropdownItem>
        <DropdownItem value="Education" onClick={props.onSwitch}>Education</DropdownItem>
        <DropdownItem value="Recreation" onClick={props.onSwitch}>Recreation</DropdownItem>
        <DropdownItem value="Food Sales" onClick={props.onSwitch}>Food Sales</DropdownItem>
        <DropdownItem value="Other" onClick={props.onSwitch}>Other</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    )
  } else {
    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{"backgroundColor": "rgb(120, 200, 166)"}} caret>View Businesses by Category</DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="Gym" onClick={props.handleOnClick}>Gym</DropdownItem>
          <DropdownItem value="Beauty" onClick={props.handleOnClick}>Beauty</DropdownItem>
          <DropdownItem value="Hardware" onClick={props.handleOnClick}>Hardware</DropdownItem>
          <DropdownItem value="Retail" onClick={props.handleOnClick}>Retail</DropdownItem>
          <DropdownItem value="Education" onClick={props.handleOnClick}>Education</DropdownItem>
          <DropdownItem value="Recreation" onClick={props.handleOnClick}>Recreation</DropdownItem>
          <DropdownItem value="Food Sales" onClick={props.onSwitch}>Food Sales</DropdownItem>
          <DropdownItem value="Other" onClick={props.handleOnClick}>Other</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
};

export default DropdownEl;
