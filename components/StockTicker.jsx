// src/components/StockTicker.js
import React from 'react';

const StockTicker = ({ stocks }) => (
  <ul>
    {stocks.map(stock => (
      <li key={stock.symbol}>
        {stock.name} - {stock.price} USD
      </li>
    ))}
  </ul>
);

export default StockTicker;
