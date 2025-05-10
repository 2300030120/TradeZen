import React, { useState } from 'react'

const stockData = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 195.30, sector: 'Technology' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2900.12, sector: 'Technology' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 780.45, sector: 'Automotive' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3300.20, sector: 'E-commerce' },
  { symbol: 'JNJ', name: 'Johnson & Johnson', price: 165.89, sector: 'Healthcare' },
]

const sectors = ['All', 'Technology', 'Automotive', 'E-commerce', 'Healthcare']

const Market = () => {
  const [search, setSearch] = useState('')
  const [selectedSector, setSelectedSector] = useState('All')

  // Filter stocks based on search and selected sector
  const filteredStocks = stockData.filter(stock => {
    const matchesSearch = stock.name.toLowerCase().includes(search.toLowerCase()) || stock.symbol.toLowerCase().includes(search.toLowerCase())
    const matchesSector = selectedSector === 'All' || stock.sector === selectedSector
    return matchesSearch && matchesSector
  })

  const handleBuy = (stockSymbol) => {
    alert(`Buying ${stockSymbol}... (Mock Action)`)
    // You can implement actual buying logic here, for now, it's just a placeholder.
  }

  const handleSell = (stockSymbol) => {
    alert(`Selling ${stockSymbol}... (Mock Action)`)
    // You can implement actual selling logic here, for now, it's just a placeholder.
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>📈 Market Overview</h1>
      
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Search stocks by name or symbol..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '0.5rem',
            width: '300px',
            marginRight: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        
        <select
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        >
          {sectors.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Display filtered stock data */}
      <div style={{ marginTop: '2rem' }}>
        {filteredStocks.map((stock, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              borderBottom: '1px solid #eee',
              background: '#f9f9f9',
              marginBottom: '0.5rem',
              borderRadius: '6px'
            }}
          >
            <div>
              <h3>{stock.name} ({stock.symbol})</h3>
              <p>Sector: {stock.sector}</p>
            </div>
            
            <div>
              <h3 style={{ color: '#2ecc71' }}>${stock.price}</h3>
              <button
                onClick={() => handleBuy(stock.symbol)}
                style={{
                  marginRight: '0.5rem',
                  background: '#111',
                  color: '#fff',
                  border: 'none',
                  padding: '0.4rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Buy
              </button>
              <button
                onClick={() => handleSell(stock.symbol)}
                style={{
                  background: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  padding: '0.4rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for future chart */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        border: '1px dashed #999',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4'
      }}>
        <h2>📊 Chart Preview</h2>
        <p>This area will show interactive stock charts using Chart.js or Recharts later.</p>
      </div>

      {/* Placeholder for future educational content */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        border: '1px dashed #999',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4'
      }}>
        <h2>📚 Tutorials & Resources</h2>
        <p>This section will provide tutorials and educational resources on stock trading.</p>
      </div>

      {/* Placeholder for mock trading competitions */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        border: '1px dashed #999',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#f4f4f4'
      }}>
        <h2>🏆 Mock Trading Competitions</h2>
        <p>Join trading competitions and challenge your skills in the virtual stock market!</p>
      </div>
    </div>
  )
}

export default Market
