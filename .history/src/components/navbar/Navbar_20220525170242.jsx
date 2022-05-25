import React from "react";
import "./navbar.css";
import Bubble from "../../assets/booble.png";

const Navbar = () => {
  return (
    <>
      <div className="container navbar">
        <div className="navbar__left">
          <img src={Bubble} alt=""></img>
          <h2>POLL BUBBLE</h2>
        </div>
        <div className="navbar__right">
          <p>GO TO BUBBLES</p>
          <button>hello</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
