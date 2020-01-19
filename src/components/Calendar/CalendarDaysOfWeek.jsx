import React from "react";
import CalendarDay from "./CalendarDay";

const CalendarDaysOfWeek = props => {
  return (
    <>
      {props.weekdayshort.map(day => (
        <CalendarDay dayNumber={day} key={day} />
      ))}
    </>
  );
};

export default CalendarDaysOfWeek;
