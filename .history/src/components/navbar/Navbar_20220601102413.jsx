import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo_name.png";
import { ConnectButton, TabList, Tab } from "web3uikit";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="brand__navbar">
          <img src={Logo} alt="" />
        </div>
        <div className="links__navbar">
          <p><a href="#home"> Home</a></p>
          <p><a href="#bubbles"> Bubbles</a></p>
          <p><a href="#Markets">Markets</a></p>
          <p><a href="#Draft">Draft Digital</a></p>
        </div>
        <div className="login__navbar">login</div>
      </div>
    </>
  );
};

export default Navbar;
