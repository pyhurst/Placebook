import React, { Component, useState, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useBizContext } from "../../utils/BusinessContext";
import "./Calendar.css"

console.log(useBizContext);

function Calendarapp({handleOnChange}){

const [dateContext, dispatch] = useBizContext();

console.log(dateContext)
  const onChange = (clickedDate) => {
    handleOnChange(clickedDate)
    console.log(clickedDate.getDate())
    console.log(dateContext);
    
  };

    return (
      <div>
        <Calendar onChange={onChange} value={dateContext.date} />
      </div>
    );
}

export default Calendarapp;
