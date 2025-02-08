import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center mt-5 mb-5">
        <h1 className="fs-1 mb-3">Charges</h1>
        <p className="fs-5 text-muted mb-5">List of all charges and taxes</p>
      </div>
      <div className="row text-center mt-5 p-5">
        <div className="col p-5">
          <img src="media/images/pricingEquity.svg"></img>
          <h1 className="fs-4 mb-3">Free equity delivery</h1>
          <p className="fs-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img src="media/images/intradayTrades.svg"></img>
          <h1 className="fs-4 mb-3">Intraday and F&O trades</h1>
          <p className="fs-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5">
          <img src="media/images/pricingEquity.svg"></img>
          <h1 className="fs-4 mb-3">Free direct MF</h1>
          <p className="fs-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
