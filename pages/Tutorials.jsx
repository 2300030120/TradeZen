import React from 'react';

const Tutorials = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tutorials & Resources</h1>
      <p>Learn how to trade like a pro through curated tutorials and tips.</p>

      <div style={{ marginTop: '2rem' }}>
        <h3>📈 How the Stock Market Works</h3>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/VirrBxclM4E"
          title="How the Stock Market Works"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>💹 What is Technical Analysis?</h3>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/nw8xzTicPRo"
          title="What is Technical Analysis?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>📊 How to Read Stock Charts for Beginners</h3>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/J-ntsk7Dsd0"
          title="How to Read Stock Charts for Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>🧠 Trading Psychology Crash Course for Beginners</h3>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/M5w4t_ugWlY"
          title="Trading Psychology Crash Course for Beginners"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>💰 Virtual Money vs Real Money Trading</h3>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/7sNbPToUxkc"
          title="Virtual Money vs Real Money Trading"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Tutorials;
