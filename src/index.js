import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.min.css';

import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: false,
  publicClient,
  webSocketPublicClient,
})

ReactDOM.render(

  <React.StrictMode>
    <WagmiConfig config={config}>
      <Provider store={store}>

        <App />
      </Provider>
    </WagmiConfig >
  </React.StrictMode >,
  document.getElementById('root')
);

reportWebVitals();
