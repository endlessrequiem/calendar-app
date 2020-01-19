import React from "react";
import CalendarWeek from "./CalendarWeek";
import _ from "lodash";

const CalendarMonth = props => {
  var newDaysArray = _.chunk(props.daysArray, [7]);
  console.log(props.daysArray);
  console.log(newDaysArray);

  return (
    <>
      {newDaysArray.map((week, index) => (
        <CalendarWeek week={week} key={index} />
      ))}
    </>
  );
};

export default CalendarMonth;
