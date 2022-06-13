import React, { useState, useEffect } from "react";
import "./bubbles.css";
import Coin from "../../components/coin/Coin";
import { useMoralis } from "react-moralis";

const Bubbles = () => {

  

  const [btc, setBtc] = useState(50);
  const [eth, setEth] = useState(50);
  const [link, setLink] = useState(50);
  const [uni, setUni] = useState(50);
  const [matic, setMatic] = useState(50);
  const [cronos, setCronos] = useState(50);
  const [atom, setAtom] = useState(50);
  const [axs, setAxs] = useState(50);
  const [ftm, setFtm] = useState(50);

  const {Moralis, isInitialized} = useMoralis();


  async function getRatio(tick, setPerc) {

    const Votes = Moralis.Object.extend("Votesfivef");
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
      getRatio("UNI", setUni);
      getRatio("MATIC", setMatic); 
      getRatio("CRONOS", setCronos);
      getRatio("ATOM", setAtom);
      getRatio("AXS", setAxs);
      getRatio("FTM", setFtm);

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
          }else if (object.attributes.ticker === "UNI"){
            getRatio("UNI", setUni);
          }else if (object.attributes.ticker === "CRONOS"){
            getRatio("CRONOS", setCronos);
          }else if (object.attributes.ticker === "ATOM"){
            getRatio("ATOM", setAtom);
          }else if (object.attributes.ticker === "AXS"){
              getRatio("AXS", setAxs);
          }else if (object.attributes.ticker === "FTM"){
            getRatio("FTM", setFtm);
          };

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
        <Coin perc={uni} setPerc={setUni} token={"UNI"} />
        <Coin perc={matic} setPerc={setMatic} token={"MATIC"} />
        <Coin perc={cronos} setPerc={setCronos} token={"CRONOS"} />
        <Coin perc={atom} setPerc={setAtom} token={"ATOM"} />
        <Coin perc={axs} setPerc={setAxs} token={"AXS"} />
        <Coin perc={ftm} setPerc={setFtm} token={"FTM"} />
        </div>
      </div>

    
    </>
  );
};

export default Bubbles;
