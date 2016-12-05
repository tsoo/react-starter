import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import './css/index.css';
import '../node_modules/blurb-buildkit/assets/css/main-drupal.css';
// eslint-disable-next-line
import Modernizr from '../node_modules/blurb-buildkit/assets/js/vendor/modernizr/modernizr-custom.min.js';
// eslint-disable-next-line
import Buildkit from '../node_modules/blurb-buildkit/assets/js/mainReact.js';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <App />,
  document.getElementById('main-content')
);
