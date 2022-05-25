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
    <Tab
      tabKey={1}
      tabName={<div style={{display: 'flex'}}><Icon fill="black" size={22} svg="messageCircle"/>{' '}<span style={{paddingLeft: '4px'}}>Freinds{' '}</span></div>}
    >
      <p>
        Looks like you have no friends :)
      </p>
    </Tab>
    <Tab
      tabKey={2}
      tabName={<div style={{display: 'flex'}}><Icon fill="black" size={22} svg="bell"/><span style={{paddingLeft: '4px'}}>Alerts{' '}</span></div>}
    >
      <Button
        icon="plus"
        onClick={function noRefCheck(){}}
        text="Add New Alert"
        theme="primary"
        type="button"
      />
    </Tab>
  </TabList>
      </div>
    </>
  );
};

export default Navbar;
