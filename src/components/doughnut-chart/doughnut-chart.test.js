import React from 'react';
import {shallow} from 'Enzyme';
import DoughnutChartProgress from './doughnut-chart.js';

const defaultProps = {
  skills: [
    {
      name: 'Javascript',
      level: 3,
    },
  ],
};

const DoughnutChartProgressWrapper = shallow(<DoughnutChartProgress {...defaultProps} />);

test('Renders', () => {
  expect(DoughnutChartProgressWrapper.exists()).toBe(true);
});
