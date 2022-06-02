import React from "react";
import "./coin.css";

function Coin (perc, setPerc, token) {
  return (
    <>
      <div>
        <div className="token">{token}</div>
      </div>
    </>
  );
};

export default Coin;
