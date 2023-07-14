import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, addToPortfolio}) {



const portfolioStocks = portfolio.map((stock) => {
  return <Stock key={stock.id} stockName={stock.name} stockPrice={stock.price} addToPortfolio={() => addToPortfolio(stock)} />
})  
  return (
    <div>
      <h2>My Portfolio</h2>
     {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;
