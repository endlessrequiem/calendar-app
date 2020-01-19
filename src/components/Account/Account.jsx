import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import FloatingButton from "./../Home/FloatingButton";
import "./Account.css";

const Account = props => {
  return (
    <div className='home container'>
      <div>Account Page</div>
      <NavBar activePage='account' />
      <TabBar history={props.history} />
      <FloatingButton />
    </div>
  );
};

export default Account;
