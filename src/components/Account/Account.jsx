import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import FloatingButton from "./../Home/FloatingButton";
import "./Account.css";

const Account = props => {
  return (
    <>
      <FloatingButton />
        
        <NavBar activePage="Your Account" />
        <TabBar history={props.history} />
        <div className="third-shade"></div>
        <p className="circle-style-portrait"></p>
      
    </>
  );
};

export default Account;
