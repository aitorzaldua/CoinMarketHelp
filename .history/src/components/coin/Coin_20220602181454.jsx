import React from "react";
import "./coin.css";

const Coin = ({ perc, setPerc, token }) => {
  return (
    <>
      <div>
        
        <div className="circle">
        <div className="token">{token}</div>
          <div className="percentage">{perc}</div>
        </div>
      </div>
    </>
  );
};

export default Coin;
