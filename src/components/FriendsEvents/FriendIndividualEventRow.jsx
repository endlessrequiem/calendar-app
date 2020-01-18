import React from "react";
import IndividualEventRow from "../MyEvents/IndividualEventRow";
import "./FriendIndividualEventRow.css";

const FriendIndividualEventRow = ({ eventName, eventTime, friendName }) => {
  const handleFriendNameClick = () => {
    console.log(`${friendName} was clicked`);
  };

  return (
    <div className=''>
      <p className='friend-name-header mb-0' onClick={handleFriendNameClick}>
        {friendName ? friendName : "No Props"}
      </p>
      <IndividualEventRow eventName={eventName} eventTime={eventTime} />
    </div>
  );
};

export default FriendIndividualEventRow;
