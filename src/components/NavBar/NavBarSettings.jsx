import React from "react";
import { SettingsIcon } from '../Icons/Icons';

const NavBarSettings = () => {

    const handleSettingsIconClick = () => {
        console.log('Settings Icon was Clicked');
    };

    return (
        <button onClick={handleSettingsIconClick}>
            <SettingsIcon />
        </button>
  );
};

export default NavBarSettings;
