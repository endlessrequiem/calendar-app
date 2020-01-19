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
      <div className='navbar-brand title-flex'>Calendar App</div>
      {props.activePage === "account" ? <NavBarSettings /> : ""}
    </nav>
  );
};

export default NavBar;
