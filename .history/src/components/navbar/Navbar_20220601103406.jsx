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
          <p><a href="#home">Home</a></p>
          <p><a href="#bubbles">Bubbles</a></p>
          <p><a href="#Markets">Markets</a></p>
          <p><a href="#Draft">Draft Digital</a></p>
        </div>
        <div className="navbar__login">login</div>
      </div>
    </>
  );
};

export default Navbar;
