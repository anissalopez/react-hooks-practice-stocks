import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addToPortfolio}) {

  const stockList = stocks.map((stock) => {
    return <Stock  stockName={stock.name} stockPrice={stock.price} key={stock.id} addToPortfolio={() => addToPortfolio(stock)}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
