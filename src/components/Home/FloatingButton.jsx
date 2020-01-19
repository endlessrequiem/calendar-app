import React from "react";
import "./FloatingButton.css";
import AddEventModal from "./AddEventModal";

const FloatingButton = () => {
  const handleFloatingButtonClick = () => {
    console.log("Floating Button was clicked");
  };

  return (
    <div>
      <AddEventModal id='modal' />
      <button
        type='button'
        className='btn btn-primary floating-button'
        data-toggle='modal'
        data-target='#modal'
        onClick={handleFloatingButtonClick}
      >
        +
      </button>
    </div>
  );
};

export default FloatingButton;
