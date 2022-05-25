import React from "react";
import "./navbar.css";
import Bubble from "../../assets/booble.png";
import { ConnectButton } from "web3uikit";

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
      </div>
    </>
  );
};

export default Navbar;
