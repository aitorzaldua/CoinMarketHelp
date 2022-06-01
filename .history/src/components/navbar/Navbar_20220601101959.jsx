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
        <div className="cta__navbar">
          <p>
            <a href="#home"> Home</a>
          </p>
          <p>
            <a href="#wpt3"> What is GPT3</a>
          </p>
          <p>
            <a href="#home"> Open AI</a>
          </p>
          <p>
            <a href="#features"> Case Studies</a>
          </p>
          <p>
            <a href="#blog"> Library</a>
          </p>
        </div>
        <div className="login__navbar">login</div>
      </div>
    </>
  );
};

export default Navbar;
