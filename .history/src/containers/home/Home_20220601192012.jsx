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
        <p className="home__content--text">This is not investment advice, but the opinion of other investors is certainly very interesting. Here you will be able to know, by voting, what they think about the possible rise or fall in value of different cryptocurrencies. </p>
        <p className="home__content--text">In addition, know the current state of the market in real time.</p>
        </div>
        <div className="home__special"></div>
      </div>
    </>
  );
};

export default Home;
