import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportPortal">
      <div className="p-5 mt-5 mb-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" style={{ color: "white" }} >Track tickets</a>
      </div>

      <div className="row p-5" id="supportWrapper">
        <div className="col-6 p-5">
          <h3 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input id="inp" placeholder="Eg: how do i activate F&O" className="mb-4"></input>{" "}
          <br></br>
          <a href="" style={{ color: "white" }} className="fs-6">
            Track account opening
          </a>
          <a href="" style={{ color: "white" }} className="mx-2 fs-6">
            Track segment activation
          </a>
          <a href="" style={{ color: "white" }} className="mx-2 fs-6">
            Intraday margins
          </a>
          <a href="" style={{ color: "white" }} className="mx-2 fs-6">
            Kite user manual
          </a>
        </div>

        <div className="col-6 p-5 ">
          <h3 className="fs-3">Featured</h3>
          <ol style={{lineHeight:"3"}}>
            <li>
              <a href="" style={{ color: "white" }}>
                Current Takeovers and Delisting - January 2024
              </a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
