import React from "react";
import IndividualEventRow from "./IndividualEventRow";
import { ChevronDownIcon } from "../Icons/Icons";
import "./MyEvents.css";

const MyEvents = () => {
  const handleChevronDownIconClick = () => {
    console.log("Chevron Icon Was Clicked");
  };

  return (
    <div className='container'>
      <h5 className='alert-heading my-1'>My Events</h5>
      <div className='alert alert-secondary' role='alert'>
        <IndividualEventRow eventName='CruzHacks' eventTime='6:00PM' />
        <IndividualEventRow eventName='Lunch w/ Mom' eventTime='7:00PM' />
        <IndividualEventRow eventName='Sleep' eventTime='8:00PM' />
        <span
          className='my-events-chevron'
          onClick={handleChevronDownIconClick}
        >
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
};

export default MyEvents;
