import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  handleClick() {
    axios.post("http://localhost:8080/api/new", 'https://thehackernews.com/')
    .then(res => {
      console.log('response api/new', res)
    })
  }
  render() {
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
        <button onClick={this.handleClick} class="ui button App-scrap-button">Validate</button>
        </div>
      </header>
    </div>
    )
  };
}