import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import MyEvents from "../MyEvents/MyEvents";
import FriendsEvents from "../FriendsEvents/FriendsEvents";
import FloatingButton from "./../Home/FloatingButton";
import "./Calendar.css";

const Calendar = props => {
  return (
    <div className='home container'>
      <div>Calendar Page</div>
      <NavBar />
      <TabBar history={props.history} />
      <FloatingButton />
    </div>
  );
};

export default Calendar;
