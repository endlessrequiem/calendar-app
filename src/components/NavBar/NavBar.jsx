import React from "react";
import NavBarSettings from "./NavBarSettings";
import { AccountIcon, CalendarIcon, HomeIcon } from "../Icons/Icons";
import "./NavBar.css";

const NavBar = props => {
  var activePage = "account";

  return (
    <nav className='navbar fixed-top navbar-light bg-light navbar-flex'>
      {props.activePage === "account" ? (
        <div className='hidden-flex'>
          <NavBarSettings />
        </div>
      ) : (
        ""
      )}
      <div className='navbar-banner'>
        <h2 style={{marginTop:"6px"}}>{props.activePage}</h2>
      </div>
      
      <div className="gear">
      {props.activePage === "Your Account" ? <NavBarSettings /> : ""}
      </div>
    </nav>
    
  );
};

export default NavBar;
