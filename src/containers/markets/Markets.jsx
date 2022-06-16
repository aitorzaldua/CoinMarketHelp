import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "./markets.css";

const Market = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("your error"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="markets" id="Markets">
      <div className="coinSearch">
        <h1 className="coinText">Market Overview</h1>
        <form className="formInput">
          <input
            type="text"
            placeholder="Search Coins"
            className="coinInput"
            onChange={handleChange}
          ></input>
        </form>
        <div className="coin-container">
          <div className="titleRow">
            <div className="coin-data">
              <p className="coinName">Name</p>
              <p className="coinSymbol">Symbol</p>
              <p className="coinPrice">Price</p>
              <p className="coinVolume">Volume</p>
              <p className="coinPercent">Price Change %</p>
              <p className="coinMarketcap">Mkt Cap</p>
            </div>
          </div>
        </div>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
};

export default Market;
