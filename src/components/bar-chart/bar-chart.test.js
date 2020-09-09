import React from 'react';
import {shallow} from 'Enzyme';
import BarChartProgress from './bar-chart';

import {HorizontalBar, Bar} from 'react-chartjs-2';

let defaultProps = {
  type: 'horizontal',
  skills: [
    {
      name: 'Javascript',
      level: 3,
    },
  ],
};

test('Renders', () => {
  const BarChartWrapper = shallow(<BarChartProgress {...defaultProps} />);
  expect(BarChartWrapper.exists()).toBe(true);
});

test('Check Horizonral Bar Rendering', () => {
  defaultProps.type = 'horizontal';
  const BarChartWrapper = shallow(<BarChartProgress {...defaultProps} />);
  expect(BarChartWrapper.containsMatchingElement(<HorizontalBar />)).toEqual(true);
});

test('Check Vertical Bar Rendering', () => {
  defaultProps.type = 'vertical';
  const BarChartWrapper = shallow(<BarChartProgress {...defaultProps} />);
  expect(BarChartWrapper.containsMatchingElement(<Bar />)).toEqual(true);
});
