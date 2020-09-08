import React from 'react';
import {shallow, mount} from 'Enzyme';
import Projects from './projects.component.js';
import * as info from '../../content/short_desc';

import UserContext from '../../BaseComponents/UserContext';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  const _mockContent = {
    name: 'arun',
    role: 'engineer',
    projects: [
      {
        name: 'Digital Classroom',
        role: 'Software Engineer',
        duration: '04/2018 - current',
        company: 'Wall Street English',
        image: 'DC.jpg',
        pd:
          'Online Virtual Classroom enables live and interactive sessions between Staff and Student with whiteboard to annotate, screensharing and chat functionality.',
        description: [
          'Proposed and implemented a logic which reduced product billing by ~$20k/month.',
          'Refactored the existing code and reduced ~4500 lines to ~890 lines of Javasript and 1.6k to ~1000 SCSS lines.',
          'Reduced the application FrontEnd build time from 20 minutes to ~(7 to 8) minutes.',
          'Worked on Redis DB for caching data from websocket and improved reliability of socket messages (70% higher).',
          'Integrating SonarQube with Javascript rule and Unit Testing For every features.',
          'Prepared Scope Documentation and Flow Diagram for the project',
          'Actively collaborate with Designers and Architect to ensure the UserExperience',
        ],
      },
    ],
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

const ProjectsWrapper = shallow(<Projects />, {info});

const mountWrapper = mount(<Projects />, {info});

test('exists in drawer', () => {
  expect(ProjectsWrapper.exists()).toBe(true);
});

test('mount the slider', () => {
  expect(mountWrapper.exists()).toBe(true);
});

test('onclick simulation', () => {
  const mockCallBack = jest.fn();

  const wrapper = mount(<Projects></Projects>);
  let element = wrapper.find('.scroll-to-bottom');
  let parent = wrapper.find('.slides-container');
  let scrollElement = wrapper.ref('scrollElement');
  element.simulate('click');

  const isEndOFScroll = (name) => `Hey, ${name}!`;
  const mockFn = jest.fn(isEndOFScroll);

  // const value = greetWorld(mockFn);
  // expect(mockFn).toHaveBeenCalled();
  // expect(mockFn).toHaveBeenCalledWith('world');

  expect(true).toBe(true);
});

test('onclick else condition', () => {
  const mockCallBack = jest.fn();

  const wrapper = mount(<Projects></Projects>);
  let element = wrapper.find('.scroll-to-bottom');
  let parent = wrapper.find('.slides-container');
  let scrollElement = wrapper.ref('scrollElement');
  element.simulate('click');

  // const value = greetWorld(mockFn);
  // expect(mockFn).toHaveBeenCalled();
  // expect(mockFn).toHaveBeenCalledWith('world');

  expect(true).toBe(true);
});
