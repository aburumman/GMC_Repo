import React from 'react';
import PlayersList from './PlayersList';
import './App.css'; // optional

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;