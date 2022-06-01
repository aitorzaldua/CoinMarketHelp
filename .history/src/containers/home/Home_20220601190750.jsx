import React from "react";
import "./home.css";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <div className="container home" id="home">
        <Navbar />
        <div className="home__content">
        <h1 className="home__content--tittle">Let's help together to invest in the crypto market.</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
