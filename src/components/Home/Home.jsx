import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <div>Home</div>
      <TabBar />
    </div>
  );
};

export default Home;
