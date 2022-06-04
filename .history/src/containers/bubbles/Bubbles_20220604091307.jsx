import React, { useState, useEffect } from "react";
import "./bubbles.css";
import Coin from "../../components/coin/Coin";
import { Modal } from "web3uikit";

const Bubbles = () => {
  const [btc, setBtc] = useState(50);
  const [eth, setEth] = useState(50);
  const [bnb, setBnb] = useState(50);
  


  return (
    <>
      <div className="container bubbles" id="Bubbles">
        <div className="bubbles__intructions">
          Where do you think these tokens are going? Up or Down?
        </div>
        <div className="list">
        <Coin perc={btc} setPerc={setBtc} token={"BTC"} />
        <Coin perc={eth} setPerc={setEth} token={"ETH"} />
        <Coin perc={bnb} setPerc={setBnb} token={"BNB"} />
        </div>
      </div>
    </>
  );
};

export default Bubbles;
