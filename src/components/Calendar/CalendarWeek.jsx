import React from "react";
import CalendarDay from "./CalendarDay";

const CalendarWeek = props => {
  return (
    <>
      {props.week.map((day, index) => (
        <CalendarDay dayNumber={day} key={index} />
      ))}
    </>
  );
};

export default CalendarWeek;
