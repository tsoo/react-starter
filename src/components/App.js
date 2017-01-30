import React, { Component } from 'react';
import '../css/App.scss';
import  HeroBanner  from 'reactkit/src/components/HeroBanner.js';
import  Button  from 'reactkit/src/components/Button.js';

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
        <HeroBanner
          mobileImage={require('../img/home-mobile-react-starter.jpg')}
          desktopImage={require('../img/home-desktop-react-starter.jpg')}
          heading={Translate('heroBanner.paperBooks.heading')}
          text={Translate('heroBanner.paperBooks.text')}
          button={Translate('heroBanner.button')}
          />
        <Button handleClick={null} ctaText="text" ctaClass="btn--mint-on-white" ctaHref='/getting-started'/>
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
