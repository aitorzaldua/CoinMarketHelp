import React from "react";
import "./navbar.css";
import Bubble from "../../assets/booble.png";

const Navbar = () => {
  return (
    <>
      <div className="container navbar__left">
        <img clasName="navbar__img" src={Bubble} alt=""></img>
      </div>
      <div className="container navbar__right">
        <p>hello</p>
        <button>hello</button>
      </div>
    </>
  );
};

export default Navbar;
