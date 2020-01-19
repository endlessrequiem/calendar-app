import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import MyEvents from "../MyEvents/MyEvents";
import "./Day.css";

const Day = props => {
  return (
    <>
      <div className='day container'>
        <NavBar activePage='day' history={props.history} />
        <p>Name of Event: test-name</p>
        <p>Time of Event: test-time</p>
        <TabBar history={props.history} />
      </div>
    </>
  );
};

export default Day;
