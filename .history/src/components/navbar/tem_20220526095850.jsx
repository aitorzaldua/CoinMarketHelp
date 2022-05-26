import React from "react";
import "./navbar.css";
import Bubble from "../../assets/booble.png";
import { ConnectButton, TabList, Tab } from "web3uikit";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="navbar__left">
          <img src={Bubble} alt=""></img>
          <h2>POLL BUBBLE</h2>
        </div>
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName="hello" />
          <Tab tabKey={2} tabName="hola" />
        </TabList>
        <div className="navbar__right">
          <p>BUBBLES</p>
          <p>DRAFT DIGITAL</p>
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
