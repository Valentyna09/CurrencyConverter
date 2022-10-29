import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Converter from './converter/Converter';
import Footer from './components/Footer';
import Spiner from './components/Spinner';

export default function App() {
  let [rates, setRates] = useState({ loaded: false });
  
  function apiUrl() {
    let url = `https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`;
    axios.get(url).then(exchangeRates);
  }

  function exchangeRates(response) {
    setRates({
      loaded: true,
      unitUsd: response.data[0].ccy,
      usdBuy: response.data[0].buy,
      usdSale: response.data[0].sale,
      unitEur: response.data[1].ccy,
      eurBuy: response.data[1].buy,
      eurSale: response.data[1].sale,
      unitBtc: response.data[2].ccy,
      btcBuy: response.data[2].buy,
      btcSale: response.data[2].sale
    });
  }

  if(rates.loaded) {
    return (
        <div className="App">
          <Header info={rates} />
          <Converter info={rates} />
          <Footer />
        </div>
    );
  } else {
    apiUrl();
    return ( 
        <Spiner />
    );
  }
}
