import React from 'react';
import {shallow} from 'Enzyme';
import CustomNavLink from './nav-link.component.js';
import {NavLink} from 'react-router-dom';

const defaultProps = {
  label: 'skill',
  to: '/skills',
};

const CustomNavLinkWrapper = shallow(<CustomNavLink {...defaultProps} />);

test('Renders', () => {
  expect(CustomNavLinkWrapper.exists()).toBe(true);
});

test('Test Dom Tree', () => {
  expect(CustomNavLinkWrapper.find('div')).toHaveLength(1);
});

test('Test NavLink element', () => {
  expect(CustomNavLinkWrapper.find(NavLink).childAt(1).text()).toEqual(defaultProps.label);
});
