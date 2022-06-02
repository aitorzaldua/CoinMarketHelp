import React from "react";
import "./coin.css";

const Coin = ({ perc, setPerc, token }) => {
  console.log("el perc", perc);

  return (
    <>
      <div>
        <div className="token">{token}</div>
        <div className="circle">
          <div className="percentaje">{perc}</div>
        </div>
      </div>
    </>
  );
};

export default Coin;
