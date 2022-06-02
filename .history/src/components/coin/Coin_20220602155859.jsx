import React from "react";
import "./coin.css";

const Coin = (perc, setPerc, token) => {

    console.log (perc);

  return (
    <>
      <div>
        <div className="token">{token}</div>
      </div>
    </>
  );
};

export default Coin;
