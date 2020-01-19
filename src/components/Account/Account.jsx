import React from "react";
import TabBar from "../TabBar/TabBar";
import NavBar from "../NavBar/NavBar";
import FloatingButton from "./../Home/FloatingButton";
import "./Account.css";

const Account = props => {
  return (
    <>
      <FloatingButton />
      <div className='home container'>
        <div>Account Page</div>
        <NavBar activePage='Account' />
        <TabBar history={props.history} />
      </div>
    </>
  );
};

export default Account;
