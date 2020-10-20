import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick() {
    console.log('Cliqué');
  }
  render() (
    <div className="App">
      <header className="App-header">
        <h1>
        <img src={logo} className="App-logo" alt="logo" />
        <span class="app-title">
          Web Scraper
        </span>
        </h1>
        <div>
        <button onClick={this.handleClick} class="ui button App-scrap-button">Validate</button>
        </div>
      </header>
    </div>
  );
}

export default App;
