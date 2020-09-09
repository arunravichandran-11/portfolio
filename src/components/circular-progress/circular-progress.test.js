import React from 'react';
import {shallow} from 'Enzyme';
import CircularProgress from './progress.component.js';

const CircularProgressWrapper = shallow(<CircularProgress />);

test('Renders', () => {
  expect(CircularProgressWrapper.exists()).toBe(true);
});
