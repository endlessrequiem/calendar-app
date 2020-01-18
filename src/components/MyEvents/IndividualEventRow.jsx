import React from "react";
import "./IndividualEventRow.css";

const IndividualEventRow = ({ eventName, eventTime }) => {
  const handleMyEventsClick = () => {
    console.log(`${eventName} at ${eventTime} was clicked`);
  };

  return (
    <div className='my-events-row' onClick={handleMyEventsClick}>
      <div className='my-event-name'>{eventName ? eventName : "No Props"}</div>
      <div className='my-event-time'>{eventTime ? eventTime : "No Props"}</div>
    </div>
  );
};

export default IndividualEventRow;
