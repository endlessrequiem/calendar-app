import React, { useState } from "react";
import "./CalendarDay.css";
import { ThymeIcon } from './../Icons/Icons';

const CalendarDay = props => {

const handleCalanderDayClick = () => {
  console.log(props.nameOfEvent);
  console.log(props.setNameOfEvent);
  console.log(props.dayNumber);
  props.setNameOfEvent('test');
  props.history.push('/day');
};

  return (
    <button
      onClick={handleCalanderDayClick}
      className={`calendar-day-container ${(props.dayNumber === "Sun" ||
        props.dayNumber === "Mon" ||
        props.dayNumber === "Tue" ||
        props.dayNumber === "Wed" ||
        props.dayNumber === "Thu" ||
        props.dayNumber === "Fri" ||
        props.dayNumber === "Sat") &&
        "calendar-day-container-days-of-week"}`}
    >
      <div className='calendar-day-number'>{props.dayNumber}</div>
      <div>
        {!(
          props.dayNumber === "Sun" ||
          props.dayNumber === "Mon" ||
          props.dayNumber === "Tue" ||
          props.dayNumber === "Wed" ||
          props.dayNumber === "Thu" ||
          props.dayNumber === "Fri" ||
          props.dayNumber === "Sat" ||
          props.dayNumber === ""
        ) && <ThymeIcon />}
      </div>
    </button>
  );
};

export default CalendarDay;
