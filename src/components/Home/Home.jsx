import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import MyEvents from "../MyEvents/MyEvents";
import FriendsEvents from "../FriendsEvents/FriendsEvents";
import FloatingButton from "./FloatingButton";
import "./Home.css";

const Home = props => {
  return (
    <>
      <FloatingButton />
      <div className='home container'>
        <NavBar activePage="Home"/>
        <MyEvents />
        <FriendsEvents />
        <TabBar history={props.history} />
      </div>
    </>
  );
};

export default Home;
