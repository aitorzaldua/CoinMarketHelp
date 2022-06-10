import React, { useEffect, useState } from "react";
import "./coin.css";
import { Button, Modal } from "web3uikit";
import { abouts } from "../../about";
import { useMoralisWeb3Api } from "react-moralis";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";


const Coin = ({ perc, setPerc, token }) => {
  const [color, setColor] = useState();

  const [visible, setVisible] = useState(false);
  const [modalToken, setModalToken] = useState();
  const [modalPrice, setModalPrice] = useState();

  const Web3Api = useMoralisWeb3Api();
  const contractProcessor = useWeb3ExecuteFunction();
  const {isAuthenticated} = useMoralis();

  useEffect(() => {
    if (perc > 50) {
      setColor("#61bda3");
    } else if (perc < 50) {
      setColor("#ff0a0a");
    } else {
      setColor("#ff9933");
    }
  }, [perc]);

  useEffect (() => {
    async function fetchTokenPrice() {

      const options = {
        address:
          abouts[abouts.findIndex((x) => x.token === modalToken)].address,
      };

      const price = await Web3Api.token.getTokenPrice(options);
      setModalPrice(price.usdPrice.toFixed(2));
    }

    if(modalToken) {
      fetchTokenPrice();
    }

  }, [modalToken]);

  async function vote(upDown) {

    //Contract info:
    let options = {
      contractAddress: "0x230800d0A139faD1D8e95D71040631B84275986A",
      functionName: "vote",
      abi: [{"inputs":[{"internalType":"string","name":"_ticker","type":"string"},{"internalType":"bool","name":"_vote","type":"bool"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"}],
      params: {
        _ticker: token,
        _vote: upDown,
      },
   }
 
  }

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
            onClick={() => {
              setVisible(true);
              setModalToken(token);
            }}
            text="INFO"
            theme="traslucent"
            type="button"
          />
        </div>
      </div>
      <Modal
        isVisible={visible}
        onCloseButtonPressed={() => setVisible(false)}
        hasFooter={false}
        title={modalToken}
      >
        <div>
          <span style={{ color: "white"}}>{`Price :`}</span>
          {modalPrice}$
        </div>
        <div>
          <span style={{ color: "var(--color-01)" }}>{`About`}</span>
        </div>
        <div>
          {modalToken &&
          abouts[abouts.findIndex((x) => x.token === modalToken)].about}
        </div>
      </Modal>
    </>
  );
};

export default Coin;
