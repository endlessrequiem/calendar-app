import React from "react";
import { SettingsIcon } from "../Icons/Icons";
import app from "../../firebase";

const NavBarSettings = () => {
  function signOut() {
    app.auth().signOut();
  }

  //   const handleSettingsIconClick = () => {
  //     console.log("Settings Icon was Clicked");
  //   };

  return (
    <button onClick={signOut}>
      <SettingsIcon />
    </button>
  );
};

export default NavBarSettings;
