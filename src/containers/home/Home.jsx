import React, { useState, useEffect } from "react";
import "./home.css";
import { Navbar } from "../../components";
import Coin from "../../components/coin/Coin";
import { useMoralis } from "react-moralis";

const Home = () => {
  const [featured, setFeatured] = useState(50);

  const {Moralis, isInitialized} = useMoralis();


  async function getRatio(tick, setPerc) {

    const Votes = Moralis.Object.extend("Votesfivef");
    const query = new Moralis.Query(Votes);

    query.equalTo("ticker", tick);
    query.descending("createdAt");
    const results = await query.first();
    let up = Number(results.attributes.up);
    let down = Number(results.attributes.down);

    console.log (up, down);

    let ratio = Math.round(up/(up+down)*100);
    setPerc(ratio);

  }

  useEffect(() => {
    if(isInitialized){
      getRatio("FEATURED", setFeatured);

      async function createLiveQuery(){
        let query = new Moralis.Query('Votes');
        let subscription = await query.subscribe();
        subscription.on('update', (object) => {
          if(object.attributes.ticker === "FEATURED"){
            getRatio("FEATURED", setFeatured);
        };

        });
      }

      createLiveQuery()
    }

  }, [isInitialized]);

  return (
    <>
      <div className="container home" id="home">
        <Navbar />
        <div className="home__content">
          <div className="home__content-rigth">
            <h1>To be, or not to be, </h1>
            <h1>that is the question.</h1>
            <p>
              Whether 'tis nobler in the mind to suffer The slings and arrows of
              outrageous fortune, Or to take arms against a sea of troubles And
              by opposing end them.
            </p>
            <p>
              Investing in the cryptocurrency market is something that causes
              immense disturbance. Up or Down? That is the question. But we are
              not alone. At CoinMarketHelp you can find out what other peers are
              feeling about the market and draw your own conclusions.
            </p>
          </div>
          <div className="home__content-left">
            <h3>Vote and earn 0.1 Matic.</h3>
            <h3>Is Moralis the best crypto enviroment for Developers?</h3>

            <Coin perc={featured} setPerc={setFeatured} token={"FEATURED"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
