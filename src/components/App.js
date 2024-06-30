// src/App.js
import React from 'react';
import './App.css';
import UserList from './UserList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blue Whales App</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;