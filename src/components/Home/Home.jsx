import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import "./Home.css";
import app from "../../firebase";

const Home = () => {
  return (
    <div className='home'>
      <NavBar />
      <div>Home</div>
      <button onClick={() => {
        console.log()
        app.auth().signOut();
      }}>LogOut</button>
      <TabBar />
    </div>
  );
};

export default Home;
