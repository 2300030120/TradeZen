import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>💹 TradeZen</h1>
        <p className="tagline">Master the Markets. Virtually. Fearlessly.</p>
        <button onClick={() => navigate('/market')}>Explore Market</button>
      </div>

      <div className="home-features">
        <div className="feature-card" onClick={() => navigate('/portfolio')}>
          <h3>📊 Virtual Portfolio</h3>
          <p>Track your holdings, monitor performance, and simulate real-time gains or losses.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/tutorials')}>
          <h3>🎓 Learn Trading</h3>
          <p>Access curated tutorials and guides to level up your investing game.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/competitions')}>
          <h3>🏆 Mock Competitions</h3>
          <p>Join virtual trading battles. Compete, rank up, and win bragging rights!</p>
        </div>
      </div>
    </div>
  )
}

export default Home
