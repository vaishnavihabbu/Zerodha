import React from "react";

function CreateTicket() {
  return (
    <div className="container p-5">
      <div className="row p-5 mt-5 mb-5">
      <p className="fs-5 text-muted mb-5">To create a ticket, select a relevant topic</p>
        <div className="col" style={{lineHeight:"2"}}>
          <h1 className="fs-5 text-medium mb-3"> <i class="fa-solid fa-plus"></i> Account Opening</h1>
          <ul className="list-unstyled">
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Getting started
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Online
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Offline
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Charges
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Company, Partnership and HUF
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Non Resident Indian (NRI)
              </a>
            </li>
          </ul>
        </div>
        <div className="col" style={{lineHeight:"2"}}>
          <h1 className="fs-5 text-medium mb-3"><i class="fa-regular fa-user"></i> Your Zerodha Account</h1>
          <ul className="list-unstyled">
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Login credentials
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Your Profile
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Account modification and segment addition
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              CMR & DP ID
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Nomination
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Transfer and conversion of shares
            </a>
          </li>
          </ul>
        </div>
        <div className="col" style={{lineHeight:"2"}}>
          <h1 className="fs-5 text-medium mb-3"><i class="fa-solid fa-chart-simple"></i> Trading and Markets</h1>
          <ul className="list-unstyled">
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Trading FAQs
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Kite
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Margins
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Product and order types
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Corporate actions
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Kite features
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row p-5 mt-5 mb-5">
        <div className="col" style={{lineHeight:"2"}}>
          <h1 className="fs-5 text-medium mb-3"><i class="fa-solid fa-credit-card"></i> Funds</h1>
          <ul className="list-unstyled">
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Fund withdrawal
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Adding funds
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Adding bank accounts
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                eMandates
              </a>
            </li>
          </ul>
        </div>
        <div className="col" style={{lineHeight:"2"}}>
          <h1 className="fs-5 text-medium mb-3"><i class="fa-solid fa-table-columns"></i> Console</h1>
          <ul className="list-unstyled">
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              IPO
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Funds statement
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Profile
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Reports
            </a>
          </li>
          <li>
            <a href="#" style={{ textDecoration: "none" }}>
              Referral Program
            </a>
          </li>
          </ul>
        </div>
        <div className="col" style={{lineHeight:"2"}}>
          <h1 className="fs-5 text-medium mb-3"><i class="fa-solid fa-circle-dollar-to-slot"></i> Coin</h1>
          <ul className="list-unstyled">
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Understanding mutual funds and Coin
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Coin app
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Coin web
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                Transactions and reports
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                National Pension Schemes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
