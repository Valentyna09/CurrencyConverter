import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useApi } from './components/useApi';
import Header from './components/Header';
import Converter from './converter/Converter';
import Footer from './components/Footer';
import Spiner from './components/Spinner';

export default function App() {
  const { loading, data, error } = useApi(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`);

  if (loading) return (<Spiner />);
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  let info = ({
    unitUsd: data[0].ccy,
    usdBuy: data[0].buy,
    usdSale: data[0].sale,
    unitEur: data[1].ccy,
    eurBuy: data[1].buy,
    eurSale: data[1].sale,
    unitBtc: data[2].ccy,
    btcBuy: data[2].buy,
    btcSale: data[2].sale
  });
  
  return (
      <div className="App">
        <Header info={info} />
        <Converter info={info} />
        <Footer />
      </div>
  );
}