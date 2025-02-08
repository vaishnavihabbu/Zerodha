import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-5">
      <h1>The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row">
        <div className="col p-3 mt-5">
          <img src="media/images/smallCaseLogo.png"></img>
          <p className="text-extrasmall text-muted">
            Thematic investment platform
          </p>
        </div>
        <div className="col p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"30%"}}></img>
          <p className="text-extrasmall text-muted">
            Thematic investment platform
          </p>
        </div>
        <div className="col p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"30%"}}></img>
          <p className="text-extrasmall text-muted">
            Thematic investment platform
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"40%"}}></img>
          
          <p className="text-extrasmall text-muted">
            Thematic investment platform
          </p>
        </div>
        <div className="col p-3 mt-5">
          <img src="media/images/goldenPiLogo.png" style={{width:"30%"}}></img>
          <p className="text-extrasmall text-muted">
            Thematic investment platform
          </p>
        </div>
        <div className="col p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}></img>
          <p className="text-extrasmall text-muted">
            Thematic investment platform
          </p>
        </div>
      </div>
      <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign Up for Free
        </button>
    </div>
  );
}

export default Universe;
