import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CitySearchContainer from './js/components/CitySearch/CitySearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Weather Time</h1>
        </header>
        
        <CitySearchContainer />
      </div>
    );
  }
}

export default App;
