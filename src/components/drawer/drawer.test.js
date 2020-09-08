import React from 'react';
import {shallow} from 'Enzyme';
import Drawer from './drawer.component';
import * as info from '../../content/short_desc';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  const _mockContent = {
    name: 'arun',
    role: 'engineer',
  };
  return {
    ...originalModule,
    useContext: jest.fn(() => {
      return {
        ..._mockContent,
      };
    }),
  };
});

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useHistory: jest.fn(),
    useRouteMatch: jest.fn(() => {
      return {url: '/'};
    }),
  };
});

const DrawerWrapper = shallow(<Drawer />, {info});

test('exists in drawer', () => {
  expect(DrawerWrapper.exists()).toBe(true);
});

test('Test the logo first character', () => {
  expect(DrawerWrapper.find('.logo').text()).toBe('a');
});

test('Test the role', () => {
  expect(DrawerWrapper.find('.role').text()).toBe('engineer');
});
