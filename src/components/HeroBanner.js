import React, { Component } from 'react';
import Buildkit from '../utils/buildkit';
import desktopHero from '../img/home-desktop.jpg';
import mobileHero from '../img/home-mobile.jpg';

class HeroBanner extends Component {

  componentDidUpdate() {
    this.updateModule();
  }

  updateModule() {
    Buildkit.resetModuleView('main [data-controller="heroBanner"]');
  }

  render() {
    return (
      <section className="module hero-banner hero-banner--cinema hero-banner--secondary hero-banner--dark-text" data-controller="heroBanner">
        <div className="grid-construct-x">
          <div className="hero-banner__container"
            data-sm-src={mobileHero}
            data-lg-src={desktopHero}>
            <div className="hero-banner__inner">
              <div className="hero-banner__content">
                <h1 className="hero-banner__heading">Hero Banner</h1>
                <p className="hero-banner__text">Hero Banner Content</p>
                <div className="hero-banner__btns">
                  <a href="#" className="hero-banner__btn--cta hero-banner__btn">Call to action</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default HeroBanner;
