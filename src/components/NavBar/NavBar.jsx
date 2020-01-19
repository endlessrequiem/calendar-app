import React from "react";
import NavBarSettings from "./NavBarSettings";
import { ChevronLeftIcon } from './../Icons/Icons';
import "./NavBar.css";

const NavBar = props => {

  const handleBackArrowClick = () => {
    console.log('test');
    props.history.goBack();
  };

  return (
    <nav className='navbar fixed-top navbar-light bg-light navbar-flex'>
      {props.activePage === "Account" ? (<div className='hidden-flex'><NavBarSettings /></div>) : null}
      {props.activePage === "day" ? (<span onClick={handleBackArrowClick}><ChevronLeftIcon /></span>) : null}
  <div className='navbar-brand title-flex'><h3>{props.activePage}</h3></div>
      {props.activePage === "Account" ? <NavBarSettings /> : null}
      {props.activePage === "day" ? <div className='hidden-flex'><ChevronLeftIcon /></div> : null}
    </nav>
  );
};

export default NavBar;
