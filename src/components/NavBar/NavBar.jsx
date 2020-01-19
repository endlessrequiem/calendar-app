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
    <nav className='navbar-banner'>
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
      {props.activePage === "Account" ? (<div className='hidden-flex'><NavBarSettings /></div>) : null}
      {props.activePage === "day" ? (<span onClick={handleBackArrowClick}><ChevronLeftIcon /></span>) : null}
 
      {props.activePage === "Account" ? <NavBarSettings /> : null}
      {props.activePage === "day" ? <div className='hidden-flex'><ChevronLeftIcon /></div> : null}
    </nav>
    
  );
};

export default NavBar;
