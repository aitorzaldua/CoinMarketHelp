import React, { useState, useEffect } from "react";
import "./bubbles.css";
import Coin from "../../components/coin/Coin";

const Bubbles = () => {

  const [btc, setBtc] = useState(50);

  return (
    <>
      <div className="container bubbles" id="Bubbles">
        <div className="bubbles__intructions">
          Where do you think these tokens are going? Up or Down?
        </div>
        
      </div>
      <Coin 
        perc={btc} 
        setPerc={setBtc} 
        token={"BTC"}
        />
     
    </>
  );
};

export default Bubbles;
