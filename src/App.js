import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/blurb-buildkit/assets/css/main-drupal.css';
import Modernizr from '../node_modules/blurb-buildkit/assets/js/vendor/modernizr/modernizr-custom.min.js';
import Buildkit from '../node_modules/blurb-buildkit/assets/js/main-eng.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
