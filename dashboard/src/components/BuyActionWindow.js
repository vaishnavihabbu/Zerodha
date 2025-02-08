import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, refreshHoldings }) => { // Accept refreshHoldings as a prop
  const { closeBuyWindow } = useContext(GeneralContext); // Access the context value
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios
      .post("http://localhost:8000/newOrder", {
        name: uid, // Stock name
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      })
      .then(() => {
        // Call refreshHoldings after a successful order
        if (refreshHoldings) {
          refreshHoldings();
        }
      })
      .catch((err) => {
        console.error("Error placing order:", err);
      });

    closeBuyWindow(); // Close the buy window
  };

  const handleCancelClick = () => {
    closeBuyWindow(); // Call the closeBuyWindow function from context
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;


