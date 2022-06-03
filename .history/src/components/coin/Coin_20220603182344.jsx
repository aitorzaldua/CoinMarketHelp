import React, { useEffect, useState } from "react";
import "./coin.css";
import { Button, Modal } from "web3uikit";

const Coin = ({ perc, setPerc, token }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (perc > 50) {
      setColor("#ccf500");
    } else if (perc < 50) {
      setColor("#ff0a0a");
    } else {
      setColor("#ff9933");
    }
  }, [perc]);

  return (
    <>
      <div>
        <div className="token">{token}</div>
        <div
          className="circle"
          style={{
            boxShadow: `0 0 20px ${color}`,
          }}
        >
          <div
            className="wave"
            style={{
              marginTop: `${100 - perc}%`,
              boxShadow: `0 0 20px ${color}`,
              backgroundColor: color,
            }}
          ></div>
          <div className="percentage">{perc}%</div>
        </div>
        <div className="votes">
          <Button
            color="green"
            id="test-button-colored-green"
            onClick={() => {
              setPerc(perc + 1);
            }}
            text="Up"
            theme="colored"
            type="button"
          />
          <Button
            color="red"
            id="test-button-colored-red"
            onClick={function noRefCheck() {
              setPerc(perc - 1);
            }}
            text="Down"
            theme="colored"
            type="button"
          />
        </div>
        <div className="info">
          <Button
            id="info"
            onClick={() => {}}
            text="Info"
            theme="traslucent"
            type="button"
          />
        </div>
      </div>
    </>
  );
};

export default Coin;
