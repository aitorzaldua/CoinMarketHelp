import React, { useState, useEffect } from "react";
import "./bubbles.css";
import Coin from "../../components/coin/Coin";
import { useMoralis } from "react-moralis";

const Bubbles = () => {

  

  const [btc, setBtc] = useState(50);
  const [eth, setEth] = useState(50);
  const [link, setLink] = useState(50);
  const [usdt, setUsdt] = useState(50);
  const [matic, setMatic] = useState(50);
  const [cronos, setCronos] = useState(50);

  const {Moralis, isInitialized} = useMoralis();


  async function getRatio(tick, setPerc) {

    const Votes = Moralis.Object.extend("Votes");
    const query = new Moralis.Query(Votes);

    query.equalTo("ticker", tick);
    query.descending("createdAt");
    const results = await query.first();
    let up = Number(results.attributes.up);
    let down = Number(results.attributes.down);

    let ratio = Math.round(up/(up+down)*100);
    setPerc(ratio);

  }

  useEffect(() => {
    if(isInitialized){
      getRatio("BTC", setBtc);
      getRatio("ETH", setEth);
      getRatio("LINK", setLink);
      getRatio("USDT", setUsdt);
      getRatio("MATIC", setMatic); 
      getRatio("CRONOS", setCronos);

      async function createLiveQuery(){
        let query = new Moralis.Query('Votes');
        let subscription = await query.subscribe();
        subscription.on('update', (object) => {
          if(object.attributes.ticker === "BTC"){
            getRatio("BTC", setBtc);
          }else if (object.attributes.ticker === "ETH"){
            getRatio("ETH", setEth);
          }else if (object.attributes.ticker === "LINK"){
            getRatio("LINK", setLink);
          }else if (object.attributes.ticker === "MATIC"){
            getRatio("MATIC", setMatic);
          }else if (object.attributes.ticker === "USDT"){
            getRatio("USDT", setUsdt);
          }else if (object.attributes.ticker === "CRONOS"){
            getRatio("CRONOS", setCronos);
          }
        });
      }

      createLiveQuery() 
    }

  }, [isInitialized]);


  return (
    <>
      <div className="container bubbles" id="Bubbles">
        <div className="bubbles__intructions">
          Where do you think these tokens are going? Up or Down?
        </div>
        <div className="list">
        <Coin perc={btc} setPerc={setBtc} token={"BTC"} />
        <Coin perc={eth} setPerc={setEth} token={"ETH"} />
        <Coin perc={link} setPerc={setLink} token={"LINK"} />
        <Coin perc={usdt} setPerc={setUsdt} token={"USDT"} />
        <Coin perc={matic} setPerc={setMatic} token={"MATIC"} />
        <Coin perc={cronos} setPerc={setCronos} token={"CRONOS"} />
        </div>
      </div>

    
    </>
  );
};

export default Bubbles;
