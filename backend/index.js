require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;
const url = process.env.MONGO_URL;
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

app.use(cors());
app.use(bodyParser.json());


app.get('/showHoldings' , async (req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/showPositions' , async (req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Save the order (optional: for order history)
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // Update holdings if it's a BUY operation
    if (mode === "BUY") {
      const holding = await HoldingsModel.findOne({ name });

      if (holding) {
        // Update existing holding
        const totalQty = holding.qty + Number(qty);
        const totalCost = holding.qty * holding.avg + qty * price;
        holding.avg = totalCost / totalQty; // Calculate new average
        holding.qty = totalQty;
        holding.price = price; // Update latest price
        await holding.save();
      } else {
        // Add new holding
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
        });
        await newHolding.save();
      }
    }

    res.status(200).send("Order processed and holdings updated");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing order");
  }
});

app.get('/showOrders' , async (req,res)=>{
  const allOrders = await OrdersModel.find();
  res.json(allOrders);
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  mongoose.connect(url);
  console.log("connected to DB");
});
