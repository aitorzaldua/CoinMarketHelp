import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo_name.png";
import { ConnectButton, TabList, Tab } from "web3uikit";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="navbar__brand">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar__links">
          <h2><a href="#home">Home</a></h2>
          <h2><a href="#bubbles">Bubbles</a></h2>
          <h2><a href="#Markets">Markets</a></h2>
          <h2><a href="#Draft">Draft Digital</a></h2>
        </div>
        <div className="navbar__login">login</div>
      </div>
    </>
  );
};

export default Navbar;
