import React from "react";
import "./home.css";
import { Navbar } from "../../components";
import bgHome from "../../assets/burbuja.png";

const Home = () => {
  return (
    <>
      <div
        className="container Home"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="containerGradient">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Home;
