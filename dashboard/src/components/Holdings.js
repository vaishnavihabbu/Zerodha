import React, { useEffect, useState } from "react";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null); 

  const refreshHoldings = () => {
    axios.get("http://localhost:8000/showHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  };

  useEffect(() => {
    refreshHoldings();
  }, []);

  const handleBuyClick = (stock) => {
    setSelectedStock(stock); 
    setIsBuyWindowOpen(true); 
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false); 
  };

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray)=> subArray["name"]);
  const data = {
    labels,
    datasets:[
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  }
  // export const data = {
  //   labels,
  //   datasets: [
      
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStock?.name} // Pass the selected stock name
          refreshHoldings={refreshHoldings}
          closeBuyWindow={closeBuyWindow} // Pass the close function
        />
      )}

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <VerticalGraph data = {data}></VerticalGraph>
    </>
  );
};

export default Holdings;





