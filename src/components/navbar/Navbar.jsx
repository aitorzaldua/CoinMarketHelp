import React, { useState } from "react";
import { RiMenuFill, RiCloseLine } from 'react-icons/ri';
import "./navbar.css";
import Logo from "../../assets/logoCMH.png";
import { ConnectButton } from "web3uikit";

const Navbar = () => {

  const Menu = () => (
    <>
        <h3><a href="#Home">Home</a></h3>
        <h3><a href="#Bubbles">Community</a></h3>
        <h3><a href="#Markets">Markets</a></h3>
        <h3><a href="#Footer">About me</a></h3>
    </>
    )
  const [toggleMenu, setToggleMenu] = useState();

  return (
    <>
      <div className="container navbar">
        <div className="navbar__brand">
          <img src={Logo} alt="" />
        </div>
          <div className="navbar__menu-container-pclinks">
            <Menu />
          </div>
          <div className="navbar__pclogin">
            <ConnectButton />
          </div>
        <div className="navbar__menu">
        {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenuFill color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-container-links">
              <Menu />
            </div>
            <div className="navbar__login">
              <ConnectButton />
            </div>
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
