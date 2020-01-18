import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import MyEvents from "../MyEvents/MyEvents";
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <MyEvents />
      <TabBar />
    </div>
  );
};

export default Home;
