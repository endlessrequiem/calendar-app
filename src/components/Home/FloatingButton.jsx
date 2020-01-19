import React from "react";
import "./FloatingButton.css";

const FloatingButton = () => {
  const handleFloatingButtonClick = () => {
    console.log("Floating Button was clicked");
  };

  return (
    <button
      className='btn btn-primary floating-button'
      onClick={handleFloatingButtonClick}
    >
      +
    </button>
  );
};

export default FloatingButton;
