import React from "react";
import "./navbar.css";
import Bubble from "../../assets/booble.png";
import { ConnectButton, TabList, Tab } from "web3uikit";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="brand__navbar">
          <img src={Bubble} alt="" />
        </div>
        <div className="cta__navbar">cta</div>
        <div className="login__navbar">login</div>
      </div>
    </>
  );
};

export default Navbar;
