import React from 'react';
import {shallow} from 'enzyme';

import IconComponent from './font-exporter';

describe('font-exporter - render', () => {
  test('exist', () => {
    const wrapper = shallow(<IconComponent />);

    expect(wrapper.exists()).toBe(true);
  });
});
