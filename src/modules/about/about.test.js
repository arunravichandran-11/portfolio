import React from 'react';
import {shallow, mount} from 'Enzyme';
import About from './about.js';

import UserContext from '../../BaseComponents/UserContext';

const defaultProps = {
  id: 212,
  name: 'ArunBalaji Ravichandran',
  role: 'Software Developer',
  profilepic: 'user.jpg',
  scalePhoto: 0.6,
  github: 'https://gitlab.com/arunravichandran11/my-portfolio',
  whoyouare:
    'To be specific about who you are part of me, I would call few words for the help like energetiic, organised and enthusiastic, an inspiring and collaborative leader with responsibility in the acivity that I take part.',
  whatyouare:
    'Passionate Software Engineer who wishes to make the life of customers happy and easy by taking up innovative and challenging Coding tasks to give value to the Product and the Customers. I am a kind of person who likes to see(myself) and suggest(teammates/juniors) coding as a `Smile on our customer` and not just as a phase of Software Development Life Cycle. And I personally, have a faith in taking up a small risk factor at work when it comes to innovation.',
  summary:
    'An energetic and dedicated software developer with an experience of 5+ years in building both FrontEnd and Backend Part of web application awarded for the contribution laid for the premium product, works with the love to improve the customer experience using technical/software skills and team integratity.',
  // summary: '',
  email: 'arunravichandran11@gmail.com',
  mobile: 9940749097,
  location: 'Chennai, India',
  linkedIn: 'https://linkedin.com/in/arun-ravichandran-585574117',
};

test('new', () => {
  const wrapper = mount(
    <UserContext.Provider value={defaultProps}>
      <About />
    </UserContext.Provider>
  );

  expect(wrapper.exists()).toBe(true);
});
