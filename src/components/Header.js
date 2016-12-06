import React, { Component } from 'react';
import Buildkit from '../utils/Buildkit';
import Translate from 'counterpart';
import svgSprite from '../img/icons.svg';

class Header extends Component {

  componentDidMount() {
    Buildkit.resetModuleView('[data-controller="controlsNav"]');
  }

  render() {
    return (
      <header className="header" role="banner">

        {/* account.html */}
        <section className="header--utility">
          <div className="grid-construct">
            <ul className="utility__list js-utility-list">
              <li className="utility__list-item utility__list-item--search">
                <form action="/search/site_search" role="form" className="controls__search__form clearfix">
                  <input type="search" name="search" className="controls__search__field" aria-label={Translate('search.search_for')} />
                  <i className="controls__search__field-icon icon icon--search--sm"></i>
                </form>
              </li>
            </ul>
          </div>
        </section>

        {/* navigation */}
        <section className="header--main">
          <div className="grid-construct-x">
            <a href="/" title="Blurb" className="js-logo">
              <span className="icon logo--small logo-main--sm"></span>
              <span className="icon logo--large logo-main"></span>
            </a>
            <div className="new-controls controls--main js-controls">
              <nav className="controls__nav" data-controller="controlsNav">
                <ul className="controls__nav__list">
                  <li className="controls__nav__list-item" data-tab="format_and_pricing">
                    <div className="controls__nav__cta js-parent-nav-link">
                      <i className="icon controls__nav__expand-icon"></i>
                      <a className="controls__nav__cta__link" href="/formats">{Translate('nav.formats_and_pricing')}</a>
                    </div>
                    <ul className="controls__subnav--lvl1 js-subnav" data-trigger="format_and_pricing">
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/formats">{Translate('nav.formats_overview')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/photo-books">{Translate('nav.photo_books')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/trade-books">{Translate('nav.trade_books')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/magazine">{Translate('nav.magazines')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/ebook">{Translate('nav.ebooks')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/pricing">{Translate('nav.pricing')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/volume-printing">{Translate('nav.volume_printing')}</a>
                      </li>
                    </ul>
                  </li>
                  <li className="controls__nav__list-item" data-tab="create">
                    <div className="controls__nav__cta js-parent-nav-link">
                      <i className="icon controls__nav__expand-icon"></i>
                      <a className="controls__nav__cta__link" href="/getting-started">{Translate('nav.create')}</a>
                    </div>
                    <ul className="controls__subnav--lvl1  js-subnav" data-trigger="create">
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/getting-started">{Translate('buttons.get_started')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/bookmaking-tools">{Translate('nav.creation_layout_tools')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/templates">{Translate('nav.templates')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/pdf-to-book">{Translate('nav.upload_pdf')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/dreamteam-collaborators">{Translate('nav.dreamteam')}</a>
                      </li>
                    </ul>
                  </li>
                  <li className="controls__nav__list-item" data-tab="sell_and_distribute">
                    <div className="controls__nav__cta js-parent-nav-link">
                      <i className="icon controls__nav__expand-icon"></i>
                      <a className="controls__nav__cta__link" href="/sell-and-distribute">{Translate('nav.sell_and_distribute')}</a>
                    </div>
                    <ul className="controls__subnav--lvl1 js-subnav" data-trigger="sell_and_distribute">
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/sell-and-distribute">{Translate('nav.sell_and_distribute_overview')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/sell-through-blurb">{Translate('nav.sell_through_blurb')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/amazon">{Translate('nav.amazon')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/ingram">{Translate('nav.ingram')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/apple-ibooks-store">{Translate('nav.apple_ibooks_store')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/kickstarter">{Translate('nav.kickstarter')}</a>
                      </li>
                    </ul>
                  </li>
                  <li className="controls__nav__list-item" data-tab="bookstore">
                    <div className="controls__nav__cta js-parent-nav-link">
                      <i className="icon controls__nav__expand-icon"></i>
                      <a className="controls__nav__cta__link" href="/bookstore">{Translate('nav.bookstore')}</a>
                    </div>
                    <ul className="controls__subnav--lvl1 js-subnav" data-trigger="bookstore">
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/bookstore/">{Translate('nav.bookstore_home')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/bookstore/featured">{Translate('nav.staff_picks')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/bookstore/popular">{Translate('nav.best_sellers')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/bookstore/new">{Translate('nav.just_published')}</a>
                      </li>
                      <li className="controls__subnav--lvl1__item">
                        <a className="controls__subnav--lvl1__link" href="/bookstore/category">{Translate('nav.all_categories')}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <ul className="controls__current-subnav" data-trigger="format_and_pricing">
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/photo-books">{Translate('nav.photo_books')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/trade-books">{Translate('nav.trade_books')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/magazine">{Translate('nav.magazines')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/ebook">{Translate('nav.ebooks')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/pricing">{Translate('nav.pricing')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/volume-printing">{Translate('nav.volume_printing')}</a>
            </li>
          </ul>
          <ul className="controls__current-subnav" data-trigger="create">
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/bookmaking-tools">{Translate('nav.creation_layout_tools')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/templates">{Translate('nav.templates')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/pdf-to-book">{Translate('nav.upload_pdf')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/dreamteam-collaborators">{Translate('nav.dreamteam')}</a>
            </li>
          </ul>
          <ul className="controls__current-subnav" data-trigger="sell_and_distribute">
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/sell-through-blurb">{Translate('nav.sell_through_blurb')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/amazon">{Translate('nav.amazon')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/ingram">{Translate('nav.ingram')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/apple-ibooks-store">{Translate('nav.apple_ibooks_store')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/kickstarter">{Translate('nav.kickstarter')}</a>
            </li>
          </ul>
          <ul className="controls__current-subnav" data-trigger="bookstore">
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/bookstore/featured">{Translate('nav.staff_picks')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/bookstore/popular">{Translate('nav.best_sellers')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/bookstore/new">{Translate('nav.just_published')}</a>
            </li>
            <li className="controls__current-subnav__item">
              <a className="controls__current-subnav__link" href="/bookstore/category">{Translate('nav.all_categories')}</a>
            </li>
          </ul>
          <div className="grid-construct-x header-main__footer">
            <section className="footer__legal">
              <div className="grid-construct">
                <div className="hidden footer__icons--social typ--align-center--mobile" data-feature-bit="web-social-icons">
                  <a href="https://www.facebook.com/BlurbBooks/"><svg className="icon icon--30x30" data-src={svgSprite} dangerouslySetInnerHTML={{__html: '<use xlink:href="#facebook" />' }} /></a>
                  <a href="https://twitter.com/BlurbBooks"><svg className="icon icon--30x30" data-src={svgSprite} dangerouslySetInnerHTML={{__html: '<use xlink:href="#twitter" />' }} /></a>
                  <a href="https://www.instagram.com/blurbbooks/"><svg className="icon icon--30x30" data-src={svgSprite} dangerouslySetInnerHTML={{__html: '<use xlink:href="#instagram" />' }} /></a>
                  <a href="https://www.linkedin.com/company/blurb"><svg className="icon icon--30x30" data-src={svgSprite} dangerouslySetInnerHTML={{__html: '<use xlink:href="#linkedin" />' }} /></a>
                </div>
                <ul className="footer__legal__list">
                  <li className="footer__legal__list-item footer__legal__list-item--copyright">© 2005–2017 Blurb</li>
                  <li className="footer__legal__list-item"><a className="footer__legal__link" href="/company-profile">{Translate('nav.company')}</a></li>
                  <li className="footer__legal__list-item"><a className="footer__legal__link" href="/careers">{Translate('nav.work_at_blurb')}</a></li>
                  <li className="footer__legal__list-item"><a className="footer__legal__link" href="/pricing-calculator">{Translate('nav.pricing')}</a></li>
                  <li className="footer__legal__list-item"><a className="footer__legal__link" href="/privacy">{Translate('nav.privacy')}</a></li>
                  <li className="footer__legal__list-item"><a className="footer__legal__link" href="/legal">{Translate('nav.legal')}</a></li>
                  <li className="footer__legal__list-item"><a className="footer__legal__link" href="https://support.blurb.com/home">{Translate('nav.support')}</a></li>
                </ul>
                <div className="footer__lang-select" data-controller="languageSelect">
                  <button type="button" role="button" className="footer__lang-select__btn js-lang-select-btn">
                    <i className="icon footer__lang-select__selected-icon js-footer__lang-select__selected-icon"></i>
                  </button>

                  <div className="footer__lang-select__select-wrap js-lang-select-wrap">
                    <ul className="footer__lang-select__column">
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--united-states"></i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--australia"></i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--brazil"></i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--italy"></i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--netherlands"></i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--united-kingdom"></i></a>
                      </li>
                    </ul>
                    <ul className="footer__lang-select__column">
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--france"></i> </a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--germany"></i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--spain"></i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--canada flag--canada-en"> </i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--canada flag--canada-fr"> </i></a>
                      </li>
                      <li className="footer__lang-select__list-item">
                        <a className="footer__lang-select__link" href="#"><i className="icon flag--globe"></i> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <a href="#" className="header--mobile-nav-toggle js-mobile-nav-toggle"><i className="icon icon--mobile-nav"></i></a>
      </header>
    );
  }
}

export default Header;
