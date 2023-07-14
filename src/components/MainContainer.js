
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import React, {useEffect, useState} from "react"


function MainContainer() {

const [stocks, setStocks] = useState([]);
const [portfolioStocks, setPortfolioStocks] = useState([])
const [sort, setSort] = useState(false)
const [filter, setFilter] = useState("")


useEffect(() => {
  fetch("http://localhost:3001/stocks")
  .then((response) => response.json())
  .then((data) => setStocks(data))
}, [])

function addToPortfolio(stock){

  const isStockInPortfolio = portfolioStocks.some((portfolioStock) => portfolioStock.id === stock.id);

    if (isStockInPortfolio) {
      const updatedPortfolio = portfolioStocks.filter((portfolioStock) => portfolioStock.id !== stock.id);
      setPortfolioStocks(updatedPortfolio);
    } 
    else {
      const newPortfolio = [...portfolioStocks, stock];
      setPortfolioStocks(newPortfolio);
   }
}





function handleSort(e){
  if(e.target.value === "Alphabetically"){
    setSort("Alphabetically")
  }
  if(e.target.value === "Price"){
    setSort("Price")
  }
}




const filteredStocks = stocks.sort((a, b) => {
  if(sort === "Alphabetically"){
    if(a.name > b.name){
      return 1
    }
    if(a.name < b.name){
      return -1
    }
    return 0
  }

  if(sort === "Price"){
    if(a.price > b.price){
      return 1
    }
    if(a.price < b.price){
      return -1
    }
    return 0
  }
  if(filter === "Tech"){
    return 
  }
}).filter((stock) => {
  if(filter === "Tech"){
    return stock.type === "Tech"
  }
  if(filter === "Finance"){
    return stock.type === "Finance"
  }
  if(filter === "Sportswear"){
    return stock.type === "Sportswear"
  }
  return true
})





console.log(filteredStocks)
function handleFilter(e){
 setFilter(e.target.value)
}

  return (
    <div>
      <SearchBar  sort={sort} handleSort={handleSort} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} addToPortfolio={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer addToPortfolio={addToPortfolio} portfolio={portfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
