import React from 'react';

const portfolioData = [
  { symbol: 'AAPL', name: 'Apple Inc.', quantity: 10, price: 195.3 },
  { symbol: 'TSLA', name: 'Tesla Inc.', quantity: 5, price: 780.45 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 2, price: 2900.12 },
];

const Portfolio = () => {
  const totalValue = portfolioData.reduce((acc, stock) => acc + (stock.quantity * stock.price), 0).toFixed(2);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📊 My Portfolio</h1>
      <div style={styles.summary}>
        <h2>Total Portfolio Value: <span style={styles.value}>${totalValue}</span></h2>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Current Price</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((stock, i) => (
              <tr key={i}>
                <td>{stock.name}</td>
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>${stock.price}</td>
                <td>${(stock.quantity * stock.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.chartPlaceholder}>
        <h3>📈 Portfolio Distribution Chart</h3>
        <p>Interactive pie chart will go here (Chart.js or Recharts).</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    background: '#f5f7fa',
    minHeight: '100vh'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#2c3e50'
  },
  summary: {
    marginBottom: '2rem',
    padding: '1rem',
    background: '#ecf0f1',
    borderRadius: '8px'
  },
  value: {
    color: '#27ae60',
    fontWeight: 'bold'
  },
  tableContainer: {
    overflowX: 'auto',
    marginBottom: '2rem'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    background: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)'
  },
  chartPlaceholder: {
    padding: '2rem',
    border: '2px dashed #ccc',
    textAlign: 'center',
    borderRadius: '8px',
    background: '#ffffff'
  }
};

export default Portfolio;
