import React from "react";
import "./navbar.css";
import Logo from "../../assets/logoCMH.png";
import { ConnectButton } from "web3uikit";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="navbar__brand">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar__links">
          <h3><a href="#Home">Home</a></h3>
          <h3><a href="#Bubbles">Community</a></h3>
          <h3><a href="#Markets">Markets</a></h3>
          <h3><a href="#Footer">About me</a></h3>
        </div>
        <div className="navbar__login">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
