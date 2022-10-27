import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ThreeDots } from 'react-loader-spinner';
import Converter from './Converter';
import CurrentDate from './CurrentDate';

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
          <header>
            <div className='container'>
                <h1>Exchange Rates</h1>
                <p>on</p>
                <CurrentDate />
                <div className='row rates'>
                  <div className='col-lg-4 col-md-12 mt-4'>
                    <span>🇺🇸 {rates.unitUsd}  &nbsp; {parseFloat(rates.usdBuy).toFixed(2) } / {parseFloat(rates.usdSale).toFixed(2)} ₴</span>
                  </div>
                  <div className='col-lg-4 col-md-12 mt-4'>
                    <span>🇪🇺 {rates.unitEur}  &nbsp; {parseFloat(rates.eurBuy).toFixed(2)} / {parseFloat(rates.eurSale).toFixed(2)} €</span> 
                  </div>
                  <div className='col-lg-4 col-md-12 mt-4'>
                    <span><i className="fa-brands fa-bitcoin"></i> {rates.unitBtc} &nbsp; {parseFloat(rates.btcBuy).toFixed(2)} / {parseFloat(rates.btcSale).toFixed(2)} ₿</span>
                  </div>
                </div>
            </div>
          </header>
          <main>
            <Converter info={rates} />
          </main>
          <footer>
            <div>
              <span>
                <i className ="fa-brands fa-github"></i>
                <a href='https://github.com/Valentyna09/converter' target = "_blanck">Open-sourse code</a> by Valentyna Rudenko
              </span>
            </div>
          </footer>
        </div>
    );
  } else {
    apiUrl();
    return ( 
        <div className="Loading">
            <ThreeDots 
            height="100" 
            width="100" 
            radius="9"
            color="black" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
                />
        </div>
    );
  }
}
