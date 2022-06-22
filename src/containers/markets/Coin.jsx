import React from "react";
import "./coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            /* Remove priceChange.toFixed(2) */
            <p className="coin-percent red">{priceChange}%</p>
          ) : (
            <p className="coin-percent green">{priceChange}%</p>
          )}
          <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
        </div>

        <div className="coinMobile">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </div>
        <div className="coin-dataMobile">
          <p className="coin-price">Price: ${price}</p>
        </div>

      </div>
    </div>
  );
};

export default Coin;
