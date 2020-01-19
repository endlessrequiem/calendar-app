import React from "react";
import { HomeIcon, CalendarIcon, AccountIcon } from "../Icons/Icons";
import "./TabBar.css";

const TabBar = () => {
  // this function runs whenever the homeicon components gets clicked
  const handleHomeIconButtonClick = () => {
    // This will need to change the route of the page to '/home'
    console.log("Home Icon was clicked");
  };

  // this function runs whenever the calendaricon components gets clicked
  const handleCalendarIconButtonClick = () => {
    // This will need to change the route of the page to '/calendar'
    console.log("Calendar Icon was clicked");
  };

  // this function runs whenever the accounticon components gets clicked
  const handleAccountIconButtonClick = () => {
    // This will need to change the route of the page to '/account'
    console.log("Account Icon was clicked");
  };

  return (
    <nav className='navbar fixed-bottom navbar-light bg-light tab-bar-flex'>
      <button onClick={handleHomeIconButtonClick}>
        <HomeIcon />
      </button>
      <button onClick={handleCalendarIconButtonClick}>
        <CalendarIcon />
      </button>
      <button onClick={handleAccountIconButtonClick}>
        <AccountIcon />
      </button>
    </nav>
  );
};

export default TabBar;
