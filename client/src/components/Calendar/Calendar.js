import React, { Component, useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useBizContext } from "../../utils/BusinessContext";

console.log(useBizContext);

function Calendarapp(){
  // constructor(props) {
  //   super(props);
   
  // }
  // state = {
  //   date: new Date(),
  // };
const [dateContext, dispatch] = useBizContext();
// const [date, setDate] = useState(new Date())
// console.log(bizContext)
console.log(dateContext)
  const onChange = (clickedDate) => {
    // setDate(clickedDate);
    // dispatch({
    //   type: "UPDATE_BIZ",
    //   date: clickedDate.getDate()
    // })
    // console.log(date)
    console.log(clickedDate.getDate())
    console.log(dateContext);
    
  };

  // render() {
    return (
      <div>
        <Calendar onChange={onChange} value={dateContext.date} />
      </div>
    );
  // }
}

export default Calendarapp;
