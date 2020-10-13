import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        <img src={logo} className="App-logo" alt="logo" />
        <span class="app-title">
          Web Scraper
        </span>
        </h1>
        <div>
        <div class="ui input"><input type="text" placeholder="Link to scrap..."/></div>
        <button  class="ui button App-scrap-button">Scrap !</button>
        </div>
      </header>
    </div>
  );
}

export default App;
