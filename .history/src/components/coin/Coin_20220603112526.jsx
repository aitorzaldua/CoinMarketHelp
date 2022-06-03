import React from "react";
import "./coin.css";

const Coin = ({ perc, setPerc, token }) => {
  
  [color, setColor] = useState():

  useEffect (() => {
    if (perc > 50) {
      setColor("#ccf500");
    }
    else if (perc < 50) {
      setColor("#c43d08");
    }
    else {
      setColor("#ff9933");
    }

  }, [perc])

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
            style={{
              marginTop: `${100 - perc}%`,
              boxShadow: `0 0 20px #ccf500`,
              backgroundColor: "#ccf500",
            }}
          ></div>
          <div className="percentage">{perc}</div>
        </div>
      </div>
    </>
  );
};

export default Coin;
