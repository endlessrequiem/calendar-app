import React from "react";
import FriendIndividualEventRow from "./FriendIndividualEventRow";
import { ChevronDownIcon } from "../Icons/Icons";
import "./FriendsEvents.css";

const FriendsEvents = () => {
  const handleChevronDownIconClick = () => {
    console.log("Chevron Icon Was Clicked");
  };

  return (
    <div className='container'>
      <h5 className='alert-heading my-1'>Friend's Events</h5>
      <div className='alert alert-secondary' role='alert'>
        <FriendIndividualEventRow
          eventName='CruzHacks'
          eventTime='6:00PM'
          friendName='Charles Bukowski'
        />
        <FriendIndividualEventRow
          eventName='Lunch w/ Mom'
          eventTime='7:00PM'
          friendName='Elon Musk'
        />
        <FriendIndividualEventRow
          eventName='Sleep'
          eventTime='8:00PM'
          friendName='Steve Jobs'
        />
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

export default FriendsEvents;
