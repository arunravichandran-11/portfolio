// import React from 'react';
// import {shallow, mount} from 'Enzyme';
// import ResumeComponent from './resume.js';
// import * as info from '../../content/short_desc';

// const defaultProps = {
//   content: {
//     name: 'foo',
//     projects: [
//       {
//         name: 'Digital Classroom',
//         role: 'Software Engineer',
//         duration: '04/2018 - current',
//         company: 'Wall Street English',
//         image: 'DC.jpg',
//         pd:
//           'Online Virtual Classroom enables live and interactive sessions between Staff and Student with whiteboard to annotate, screensharing and chat functionality.',
//         description: [
//           'Proposed and implemented a logic which reduced product billing by ~$20k/month.',
//           'Refactored the existing code and reduced ~4500 lines to ~890 lines of Javasript and 1.6k to ~1000 SCSS lines.',
//           'Reduced the application FrontEnd build time from 20 minutes to ~(7 to 8) minutes.',
//           'Worked on Redis DB for caching data from websocket and improved reliability of socket messages (70% higher).',
//           'Integrating SonarQube with Javascript rule and Unit Testing For every features.',
//           'Prepared Scope Documentation and Flow Diagram for the project',
//           'Actively collaborate with Designers and Architect to ensure the UserExperience',
//         ],
//       },
//     ],
//     education: [
//       {
//         degree: 'Bachelor of Technology, Information Technology',
//         university: 'Loyola-Icam College of Engineering',
//         batch: '2011 - 2013',
//       },
//     ],
//     skillSets: {
//       languages: {
//         Javascript: 1,
//       },
//       frameworks: {
//         Angular: 4,
//       },
//       tools: {
//         JIRA: 3,
//       },
//       database: {
//         MongoDB: 2,
//       },
//       bundlers: {
//         webpack: 3,
//       },
//       automationTools: {
//         Selenium: 2,
//       },
//       automationFrameworks: {
//         TestNG: 1,
//       },
//       testManagementTools: {
//         JIRA: 0,
//       },
//     },
//   },
// };

// const ProjectsWrapper = shallow(<ResumeComponent {...defaultProps} />);

// test('test-resume', () => {
//   expect(ProjectsWrapper.exists()).toBe(true);
// });

// // test('mount the slider', () => {
// //   expect(mountWrapper.exists()).toBe(true);
// // });
