import React from "react";
import "./coin.css";

const Coin = ({ perc, setPerc, token }) => {

  return (
    <>
      <div>
          <div>{perc}</div>
        <div className="token">{token}</div>
        <div className="circle">
        <div>{perc}</div>
        </div>
      </div>
    </>
  );
};

export default Coin;
