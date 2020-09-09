import React from 'react';
import {shallow, mount} from 'Enzyme';
import Skills from './skills.js';

import UserContext from '../../BaseComponents/UserContext';

const defaultProps = {
  name: 'foo',
  skillSets: {
    languages: {
      Javascript: 1,
    },
    frameworks: {
      Angular: 4,
    },
    tools: {
      JIRA: 3,
    },
    database: {
      MongoDB: 2,
    },
    bundlers: {
      webpack: 3,
    },
    automationTools: {
      Selenium: 2,
    },
    automationFrameworks: {
      TestNG: 1,
    },
    testManagementTools: {
      JIRA: 0,
    },
  },
};

test('new', () => {
  const wrapper = mount(
    <UserContext.Provider value={defaultProps}>
      <Skills />
    </UserContext.Provider>
  );

  expect(wrapper.exists()).toBe(true);
});
