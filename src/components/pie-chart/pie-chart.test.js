import React from 'react';
import {shallow} from 'Enzyme';
import PieChartProgress from './pie-chart.js';

const defaultProps = {
  skills: [
    {
      name: 'Javascript',
      level: 3,
    },
  ],
};

const CustomNavLinkWrapper = shallow(<PieChartProgress {...defaultProps} />);

test('Renders', () => {
  expect(CustomNavLinkWrapper.exists()).toBe(true);
});
