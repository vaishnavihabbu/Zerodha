import React from "react";

function Brokerage() {
  return (
    <div className="row  mt-5 p-5 border-top">
      <div className="col-8 p-5">
        <a href="#" style={{ textDecoration: "none" }}>
          <h1 className="fs-4 mb-3 text-center">Brokerage Calculator</h1>
        </a>
        <ul
          style={{ lineHeight: "2.5 ", fontSize: "14px" }}
          className="text-muted"
        >
          <li>
            Call & Trade and RMS auto-squareoff: Additional charges of &#8377;50
            + GST per order.
          </li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>
            Physical coppies of contract notes, if required, shall be charges
            &#8377;20 per contract note. Courier charges apply
          </li>
          <li>
            For NRI account (non-PIS), 0.5% or &#8377;100 per executed order for
            equity (whichever is lower)
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged
            &#8377;40 per executed order instead of &#8377;20 per executed
            order.
          </li>
        </ul>
      </div>
      <div className="col-4 p-5">
        <a href="#" style={{ textDecoration: "none" }}>
          <h1 className="fs-4 mb-3">List of Charges</h1>
        </a>
      </div>
    </div>
  );
}

export default Brokerage;
