import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MoralisProvider
      appId={process.env.REACT_APP_APY_KEY}
      serverUrl={process.env.REACT_APP_POLYGON_MUMBAY}
    > */}
    <MoralisProvider
      appId="Z6nLxgwmofPx7Or7bYK6vsINYuYWxNf0FQnDRjFn"
      serverUrl="https://3t2cfz3eqrvs.usemoralis.com:2053/server"
    >
        <NotificationProvider>
          <App />
        </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>
);

reportWebVitals();
