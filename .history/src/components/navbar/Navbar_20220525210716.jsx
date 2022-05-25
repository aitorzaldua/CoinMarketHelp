import React from "react";
import "./navbar.css";
import Bubble from "../../assets/booble.png";
import { ConnectButton, Tab, TabList } from "web3uikit";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="navbar__left">
          <img src={Bubble} alt=""></img>
          <h2>POLL BUBBLE</h2>
        </div>
        <div className="navbar__right">
          <p>BUBBLES</p>
          <p>DRAFT DIGITAL</p>
          <ConnectButton />
        </div>
        <TabList
    defaultActiveKey={1}
    tabStyle="bar"
  >
    TabList defaultActiveKey={1} tabStyle="bar" >
       <Tab tabKey={1} tabName={'Movies'}>
        
      
       </Tab>
       <Tab tabKey={2} tabName={'Series'} isDisabled={true}></Tab>
       <Tab tabKey={3} tabName={'My List'}>

      </div>
    </>
  );
};

export default Navbar;
