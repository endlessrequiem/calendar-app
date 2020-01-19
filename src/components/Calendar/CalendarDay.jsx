import React from "react";
import "./CalendarDay.css";

const CalendarDay = props => {
  return (
    <div
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
      <div>{props.eventName}</div>
    </div>
  );
};

export default CalendarDay;
