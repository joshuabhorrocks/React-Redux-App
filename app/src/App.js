import React from 'react';

import TrekStats from "./components/TrekStats";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Star Trek API!</h1>
      </header>
      <TrekStats />
    </div>
  );
}

export default App;
