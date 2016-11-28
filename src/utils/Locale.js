/**
  Determines the user's locale based on cookie values,
  defaults to English.
 */
class Locale {

  DEFAULT_LOCALE = 'en'
  DEFAULT_REGION = 'united_states'

  /**
    language_id is a cookie written on the blurby side when the user
    selects a language. This matches de, en, es, fr, it, nl, pt
   */
  getLanguageId() {
    var languageIdMatch = document.cookie.match(/language_id=(de|en|es|fr|it|nl|pt)\b/);
    return languageIdMatch ? languageIdMatch[1] : this.DEFAULT_LOCALE;
  }

  /**
    region_id is a cookie set on the blurby side. It identifies the
    user's geographic region, like united_statues, united_kingdom, spain, et.
   */
  getRegionId() {
    var regionIdMatch = document.cookie.match(/region_id=(\w+)\b/);
    return regionIdMatch ? regionIdMatch[1] : this.DEFAULT_REGION;
  }

  /**
    Returns a the user's locale, determined by region and language.
   */
  getLocale() {
    var languageId = this.getLanguageId(),
        regionId = this.getRegionId();
    return (languageId === 'fr' && regionId === 'canada') ? 'fr' : languageId;
  }

  getCurrency() {
    var region = this.getRegionId();
    switch (region) {
      case 'united_states':
        return 'USD';
      case 'united_kingdom':
        return 'GBP';
      case 'australia':
        return 'AUD';
      case 'canada':
        return 'CAD';
      default: // Euro
        return 'EUR';
    }
  }

  isVatRegion() {
    return this.getRegionId().match(/(france|italy|germany|netherlands|spain|united_kingdom)/i) !== null;
  }
}

export default new Locale();
