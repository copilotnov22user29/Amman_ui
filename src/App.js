import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import StockRow from './StockRow/StockRow';
import { getStocks } from './apicall/stockapi';

function App() { 
  const [stocks,setStocks] = useState([]);

 useEffect(() => {
    getStocks().then((data) => {
      setStocks(data);
    });
  }
  ,[]);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Stocks</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Stock Name</th>
                <th scope="col">Day High</th>
                <th scope="col">Day Low</th>
                <th scope="col">Change %</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <StockRow 
                key={stock.ticker} 
                ticker={stock.symbol} 
                dayHigh={stock.dayHigh} 
                dayLow={stock.dayLow} 
                perChange={stock.pChange} 
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
