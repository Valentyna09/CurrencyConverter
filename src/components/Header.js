import React from "react";
import CurrentDate from "./CurrentDate";

export default function Header(props) {
    return (
        <header>
            <div className='container Header'>
                <h1>Exchange Rates</h1>
                <p>on</p>
                <CurrentDate />
                <div className='row rates'>
                  <div className='col-lg-4 col-md-12 mt-4'>
                    <span>🇺🇸 {props.info.unitUsd}  &nbsp; {parseFloat(props.info.usdBuy).toFixed(2) } / {parseFloat(props.info.usdSale).toFixed(2)} ₴</span>
                  </div>
                  <div className='col-lg-4 col-md-12 mt-4'>
                    <span>🇪🇺 {props.info.unitEur}  &nbsp; {parseFloat(props.info.eurBuy).toFixed(2)} / {parseFloat(props.info.eurSale).toFixed(2)} €</span> 
                  </div>
                  <div className='col-lg-4 col-md-12 mt-4'>
                    <span><i className="fa-brands fa-bitcoin"></i> {props.info.unitBtc} &nbsp; {parseFloat(props.info.btcBuy).toFixed(2)} / {parseFloat(props.info.btcSale).toFixed(2)} ₿</span>
                  </div>
                </div>
            </div>
        </header>
    );
}