import React from "react";
import "./home.css";
import { Navbar } from "../../components";

const Home = () => {
  return (
    <>
      <div className="container Home" id="home">
        <Navbar />
        <a href="https://www.draftdigital.org">Execute JavaScript</a>
      </div>
    </>
  );
};

export default Home;
