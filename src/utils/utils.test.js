import React from 'react';
import utilService from './utils.js';

test('util-service', () => {
  let data = utilService();
  expect(data.userAB.id).toEqual(212);
});
