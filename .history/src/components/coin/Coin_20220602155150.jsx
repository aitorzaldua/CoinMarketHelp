import React from "react";
import "./coin.css";

const Coin = (perc, setPerc, token) => {4

    console.log (token);
    
  return (
    <>
      <div>
        <div className="token">{token}</div>
      </div>
    </>
  );
};

export default Coin;
