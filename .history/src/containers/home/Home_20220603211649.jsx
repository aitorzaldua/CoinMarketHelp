import React, { useState } from "react";
import "./home.css";
import { Navbar } from "../../components";
import Logo from "../../assets/logo_name.png";
import Coin from "../../components/coin/Coin";

const Home = () => {

  const [moralis, SetMoralis] = useState(50);


  return (
    <>
      <div className="container home" id="home">
        <Navbar />
        <div className="home__content">
          <div className="home__content-rigth">
            <h1>Let's help together to invest in the crypto market.</h1>
            <p>
              This is not investment advice, but the opinion of other investors
              is certainly very interesting. Here you will be able to know, by
              voting, what they think about the possible rise or fall in value
              of different cryptocurrencies.
            </p>
            <p>
              In addition, know the current state of the market in real time.
            </p>
          </div>
          <div className="home__content-left">
              <h3>Click Up or Down and Win 0.1 Matic</h3>
              <h3>Is Moralis the best crypto enviroment for Developers?</h3>
              <Coin perc={moralis} setPerc={SetMoralis} token={""} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
