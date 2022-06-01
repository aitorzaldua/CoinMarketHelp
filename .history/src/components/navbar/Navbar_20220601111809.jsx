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
          <h3><a href="https://www.youtube.com/watch?v=Xry_g0Vp5MY">Home</a></h3>
          <h3><a href="#bubbles">Bubbles</a></h3>
          <h3><a href="#Markets">Markets</a></h3>
          <h3><a href="#Draft">Draft Digital</a></h3>
        </div>
        <div className="navbar__login">login</div>
      </div>
    </>
  );
};

export default Navbar;
