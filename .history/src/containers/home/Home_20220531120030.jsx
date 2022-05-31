import React from "react";
import "./home.css";
import { Navbar } from "../../components";
import bgHome from "../../assets/burbuja.png";

const Home = () => {
  return (
    <>
      <div
        className="container backgroundHome"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <Navbar />
      </div>
    </>
  );
};

export default Home;
