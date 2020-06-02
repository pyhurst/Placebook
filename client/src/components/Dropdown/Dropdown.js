// import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import API from "../../utils/API";

const DropdownEl = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [category, setCategory] = useState({
    category: []
  })




  const handleOnClick = (e) => {
    const event = e.target.value
    console.log(event)


    API.getBusiness()
    .then(results => {
        if(event === results.data[0].category){
          // setCategory(results.data[0].category)
          console.log("match")
          console.log(category)
          }else{
            console.log("no match")
          }
    
    })
    // console.log("I was clicked")
    // console.log(e.target.value)
  }

  useEffect(() => {
    
  }, [])
  // console.log(category); 

  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
};

export default DropdownEl;
