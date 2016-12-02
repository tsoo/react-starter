import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import HeroBanner from '../components/HeroBanner';

describe ('<HeroBanner />', () => {

  it('renders one .hero-banner', () => {
    const wrapper = mount(<HeroBanner />);
    expect(wrapper.find('.hero-banner').length).toEqual(1);
  })

  it('renders one .hero-banner__btn', () => {
    const wrapper = mount(<HeroBanner />);
    expect(wrapper.find('.hero-banner__btns a').hasClass('hero-banner__btn')).toBe(true);
  })

  it('renders one section tag', () => {
    const wrapper = mount(<HeroBanner />);
    expect(wrapper.find('section').length).toEqual(1);
  })

  // TODO figure out how to deal with checking translation strings
  // https://www.npmjs.com/package/react-intl
  // https://gist.github.com/mirague/c05f4da0d781a9b339b501f1d5d33c37
  // http://stackoverflow.com/questions/37021217/injecting-react-intl-object-into-mounted-enzyme-components-for-testing
  // it('displays expected text', () => {
  //   const wrapper = shallowWithIntl(<HeroBanner />);
  //   expect(wrapper.find('.hero-banner__heading').text()).toEqual('Cover & papers');
  // })

});
