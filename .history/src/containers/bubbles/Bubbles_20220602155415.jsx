import React, { useState, useEffect } from "react";
import "./bubbles.css";
import Coin from "../../components/coin/Coin";

const Bubbles = () => {

  const [btc, setBtc] = useState(50);
  const token = "BTC";

  return (
    <>
      <div className="container bubbles" id="Bubbles">
        <div className="bubbles__intructions">
          Where do you think these tokens are going? Up or Down?
        </div>
        <Coin perc={btc} setPerc={setBtc} token={token} />
      </div>
    </>
  );
};

export default Bubbles;
