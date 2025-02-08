import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="fs-2">People</h1>
      </div>
      <div className="row p-5" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col p-5 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "60%" }}
          ></img>
          <div className="mt-3">
            <h1 className="fs-4">Nithin Kamath</h1>
            <p className="text-muted fs-6"> Founder, CEO</p>
          </div>
        </div>
        <div className="col p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
