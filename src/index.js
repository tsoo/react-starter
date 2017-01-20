import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import './css/index.scss';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <App />,
  document.getElementById('main-content')
);
