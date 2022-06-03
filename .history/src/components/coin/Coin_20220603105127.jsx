import React from "react";
import "./coin.css";

const Coin = ({ perc, setPerc, token }) => {
  return (
    <>
      <div>
        <div className="token">{token}</div>
        <div
          className="circle"
          style={{
            boxShadow: `0 0 20px #ccf500`,
          }}
        >
          <div
            className="wave"
            
          ></div>
          <div className="percentage">{perc}</div>
        </div>
      </div>
    </>
  );
};

export default Coin;
