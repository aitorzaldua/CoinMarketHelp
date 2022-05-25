import React from "react";
import "./navbar.css";
import Bubble from "../../assets/booble.png";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <img clasName="navbar__img" src={Bubble} alt=""></img>

      </div>;
    </>
  );
};

export default Navbar;
