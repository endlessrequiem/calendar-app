import React, { useState } from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import FloatingButton from "./../Home/FloatingButton";
import "./Calendar.css";
import CalendarDaysOfWeek from "./CalendarDaysOfWeek";
import CalendarMonth from "./CalendarMonth";
import moment from "moment";
import { ArrowLeftIcon, ArrowRightIcon } from "./../Icons/Icons";

const Calendar = props => {
  const [dateObject, setDateObject] = useState(moment());
  const [currentMonth, setCurrentMonth] = useState(dateObject.month());
  const [currentYear, setCurrentYear] = useState(dateObject.year());
  const [nameOfEvent, setNameOfEvent] = useState('nameOfEvent');
  const [timeOfEvent, setTimeOfEvent] = useState('timeOfEvent');

  const weekdayshort = moment.weekdaysShort();
  console.log("weekdayshort = ", weekdayshort);

  const firstDayOfMonth = () => {
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  var currentMonthString;

  console.log(currentMonth);
  console.log(currentYear);

  switch (currentMonth) {
    case 0:
      currentMonthString = "January";
      break;
    case 1:
      currentMonthString = "February";
      break;
    case 2:
      currentMonthString = "March";
      break;
    case 3:
      currentMonthString = "April";
      break;
    case 4:
      currentMonthString = "May";
      break;
    case 5:
      currentMonthString = "June";
      break;
    case 6:
      currentMonthString = "July";
      break;
    case 7:
      currentMonthString = "August";
      break;
    case 8:
      currentMonthString = "September";
      break;
    case 9:
      currentMonthString = "October";
      break;
    case 10:
      currentMonthString = "November";
      break;
    case 11:
      currentMonthString = "December";
      break;
    default:
      currentMonthString = "Month";
  }

  console.log(currentMonthString);

  const firstDayOfMonthNumber = firstDayOfMonth();

  //   console.log("First Day of the Month = ", firstDayOfMonthNumber);

  const daysInMonth = () => {
    return dateObject.daysInMonth();
  };

  const daysInMonthNumber = daysInMonth();

  //   console.log("daysInMonthNumber = ", daysInMonthNumber);

  var daysArray = [];
  var day = 1;

  for (let i = 0; i < 35; i++) {
    // console.log(i);
    if (i < firstDayOfMonthNumber || day > daysInMonthNumber) {
      //   console.log("i < firstDayOfMonthNumber");
      daysArray.push("");
    } else {
      daysArray.push(day);
      day++;
    }
  }

  console.log(daysArray);

  //   return (
  //     <div className='calendar'>
  //       {weekdayshort.map(day => {
  //         return <CalendarDay dayNumber={day} key={day} />;
  //       })}
  //     </div>
  //   );

  const handleLeftArrowIconClick = () => {
    console.log("LeftArrowIcon was clicked");
    setDateObject(dateObject.subtract(1, "M"));
    setCurrentMonth(dateObject.month());
    setCurrentYear(dateObject.year());
    console.log(currentMonth);
  };

  const handleRightArrowIconClick = () => {
    console.log("RightArrowIcon was clicked");
    setDateObject(dateObject.add(1, "M"));
    setCurrentMonth(dateObject.month());
    setCurrentYear(dateObject.year());
    console.log(currentMonth);
  };

  return (
    <>
      <FloatingButton />
      <div className='home month'>
        <div className='month-nest'>
          <span onClick={handleLeftArrowIconClick}>
            <ArrowLeftIcon />
          </span>
          <h3>
            {currentMonthString} {currentYear}
          </h3>
          <span onClick={handleRightArrowIconClick}>
            <ArrowRightIcon />
          </span>
        </div>
        <div className='calendar'>
          <CalendarDaysOfWeek weekdayshort={weekdayshort} />
          <CalendarMonth daysArray={daysArray} history={props.history} nameOfEvent={nameOfEvent} setNameOfEvent={setNameOfEvent} timeOfEvent={timeOfEvent} setTimeOfEvent={setTimeOfEvent} />
        </div>
        <NavBar activePage='Calendar'/>
        <TabBar history={props.history} />
      </div>
    </>
  );
};

export default Calendar;
