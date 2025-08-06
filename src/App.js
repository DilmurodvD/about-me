import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="app">
      <AboutMe />
      <div className="bubbles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="bubble" />
        ))}
      </div>
    </div>
  );
}

export default App;
