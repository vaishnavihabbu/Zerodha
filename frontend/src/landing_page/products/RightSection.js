import React from "react";

function RightSection({imageUrl, productName, productDescription, tryDemo}) {
  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                {tryDemo}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col p-5">
            <img src={imageUrl}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
