import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"

function Calendarapp({handleOnChange}){

  const onChange = (clickedDate) => {
    handleOnChange(clickedDate)
  };

    return (
      <div>
        <Calendar onChange={onChange} />
      </div>
    );
}

export default Calendarapp;
