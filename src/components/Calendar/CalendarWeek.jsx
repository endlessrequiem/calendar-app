import React from "react";
import CalendarDay from "./CalendarDay";

const CalendarWeek = props => {
  return (
    <>
      {props.week.map((day, index) => (
        <CalendarDay dayNumber={day} key={index} eventName={props.eventName} history={props.history} nameOfEvent={props.nameOfEvent} setNameOfEvent={props.setNameOfEvent} timeOfEvent={props.timeOfEvent} setTimeOfEvent={props.setTimeOfEvent} />
      ))}
    </>
  );
};

export default CalendarWeek;
