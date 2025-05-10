import React from 'react'

const Competitions = () => {
  const events = [
    { title: 'Weekly Profit Challenge', reward: '$100 Gift Card', participants: 240 },
    { title: 'Biggest Gainer Contest', reward: 'Premium Badge', participants: 120 },
    { title: 'Mock IPO Trading', reward: 'Leaderboard Rank Boost', participants: 90 },
  ]

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Mock Trading Competitions</h1>
      <p>Compete with other traders and climb the leaderboard.</p>

      <div style={{ marginTop: '2rem' }}>
        {events.map((event, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}
          >
            <h2>{event.title}</h2>
            <p>🎯 Reward: <strong>{event.reward}</strong></p>
            <p>👥 Participants: {event.participants}</p>
            <button style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Competitions
