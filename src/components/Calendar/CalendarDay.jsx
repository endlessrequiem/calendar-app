import React from "react";
import "./CalendarDay.css";

const CalendarDay = props => {
  return (
    <div className='calendar-day-container'>
      <div className='calendar-day-number'>{props.dayNumber}</div>
      <div>{props.eventName}</div>
    </div>
  );
};

export default CalendarDay;
