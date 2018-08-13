import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CitySearchContainer from './js/components/CitySearch/CitySearchContainer'

import configureStore from './js/store/configureStore'
import {Provider} from 'react-redux'

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Weather Time</h1>
          </header>
          
          <CitySearchContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
