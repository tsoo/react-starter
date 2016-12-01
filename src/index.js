import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './css/index.css';
import '../node_modules/blurb-buildkit/assets/css/main-drupal.css';
// eslint-disable-next-line
import Modernizr from '../node_modules/blurb-buildkit/assets/js/vendor/modernizr/modernizr-custom.min.js';
// eslint-disable-next-line
import Buildkit from '../node_modules/blurb-buildkit/assets/js/main-eng.js';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
