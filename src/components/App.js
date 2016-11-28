import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import HeroBanner from './HeroBanner';

import Translate from 'counterpart';
import Locale from '../utils/Locale';

// Translations
import de from '../locales/de';
import en from '../locales/en';
import es from '../locales/es';
import fr from '../locales/fr';
import it from '../locales/it';
import nl from '../locales/nl';
import pt from '../locales/pt';

class App extends Component {

  setLocale() {
    Translate.setLocale(Locale.getLocale());
  }

  componentWillMount() {
    this.setLocale();
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/compontents/App.js</code> and save to reload.
        </p>
        <HeroBanner />
      </div>
    );
  }
}

Translate.registerTranslations('de', de);
Translate.registerTranslations('en', en);
Translate.registerTranslations('es', es);
Translate.registerTranslations('fr', fr);
Translate.registerTranslations('it', it);
Translate.registerTranslations('nl', nl);
Translate.registerTranslations('pt', pt);

export default App;
