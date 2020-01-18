import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import MyEvents from "../MyEvents/MyEvents";
import FriendsEvents from "../FriendsEvents/FriendsEvents";
import FloatingButton from "./FloatingButton";
import "./Home.css";

const Home = () => {
  return (
    <div className='home container'>
      <NavBar />
      <MyEvents />
      <FriendsEvents />
      <TabBar />
      <FloatingButton />
    </div>
  );
};

export default Home;
