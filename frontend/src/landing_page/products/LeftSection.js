import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <> 
      <div className="container">
        <div className="row p-5">
          <div className="col p-5">
            <img src={imageUrl}></img>
          </div>
          <div className="col p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
              <a href={tryDemo} style={{textDecoration:"none"}}> {tryDemo} <i class="fa-solid fa-arrow-right"></i></a>
              <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>{learnMore} <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="mt-3">
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg"></img>
              </a>
              <a href={appStore} style={{marginLeft:"50px" }}>
                <img src="media/images/appStoreBadge.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
