import React from "react";

function Stock({stockName, stockPrice, addToPortfolio}) {
  return (
    <div>
      <div className="card" onClick={addToPortfolio} >
        <div className="card-body" >
          <h5 className="card-title">{stockName}</h5>
          <p className="card-text">{stockPrice}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
