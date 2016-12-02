import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import HeroBanner from '../components/HeroBanner';

describe ('<HeroBanner />', () => {

  it('renders one .hero-banner', () => {
    const wrapper = shallow(<HeroBanner />);
    expect(wrapper.find('.hero-banner').length).toEqual(1);
  })

  it('renders one section tag', () => {
    const wrapper = shallow(<HeroBanner />);
    expect(wrapper.find('section').length).toEqual(1);
  })

});
