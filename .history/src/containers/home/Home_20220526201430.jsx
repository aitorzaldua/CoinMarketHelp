import React from "react";
import "./home.css";
import { Navbar } from "../../components";
import bgHome from "../../assets/pexels-anni-roenkae-2318025.jpeg";

const Home = () => {
  return (
    <>
      <div className="backgroundHome" background-Image={bgHome}></div>
      <Navbar />
    </>
  );
};

export default Home;
