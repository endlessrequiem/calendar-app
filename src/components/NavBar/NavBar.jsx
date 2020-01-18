import React from "react";
import NavBarSettings from './NavBarSettings';
import { AccountIcon, CalendarIcon, HomeIcon } from '../Icons/Icons';
import './NavBar.css';

const NavBar = () => {

    var isOnUserPage = 'account';

  return (
    <nav className='navbar fixed-top navbar-light bg-light navbar-flex'>
        {isOnUserPage === 'account' && <div className='hidden-flex'>
            <NavBarSettings />
        </div>}
      <div className='navbar-brand title-flex'>
        Calendar App
      </div>
      {isOnUserPage === 'account' && <div className='hidden-flex'>
            <NavBarSettings />
        </div>}
    </nav>
  );
};

export default NavBar;
