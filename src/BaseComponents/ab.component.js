import React, {lazy} from 'react';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import Drawer from '../components/drawer/drawer.component';
import BottomNav from '../components/bottom-nav';

const About = lazy(() => import(/* webpackChunkName: "about.bundle" */ '../modules/about/about.js'));
const Skills = lazy(() => import(/* webpackChunkName: "skills.bundle" */ '../modules/skills/skills.js'));
const Projects = lazy(() => import(/* webpackChunkName: "projects.bundle" */ '../modules/projects/projects.component.js'));
const Awards = lazy(() => import(/* webpackChunkName: "awards.bundle" */ '../modules/awards/award.js'));
const ResumeFormatTwo = lazy(() => import(/* webpackChunkName: "resume-format-two.bundle" */ '../modules/resume/format-two/index.js'));

import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard'; // skills
import WebIcon from '@material-ui/icons/Web'; // projects
import PersonIcon from '@material-ui/icons/Person'; //aboutme
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'; // skills

import utilService from '../utils/utils';
import {UserContextProvider} from './UserContext';

export default function AbComponent() {
  let mediaLevelScreen = window.matchMedia('(max-width: 1200px)');

  let mobileScreens = window.matchMedia('(max-width: 1024px)');

  let userData = utilService().userAB;
  let {path} = useRouteMatch();

  let navigationLink = [
    {
      id: 1,
      name: 'Skills',
      link: `${path}/skills`,
      icon: 'laptop-code',
      active: false,
      materialIconComponent: <DeveloperBoardIcon />,
    },
    {
      id: 2,
      name: 'About Me',
      link: `${path}/about`,
      icon: 'user',
      active: false,
      materialIconComponent: <PersonIcon />,
    },
    {
      id: 3,
      name: 'Projects',
      link: `${path}/projects/web-app`,
      icon: 'briefcase',
      active: false,
      materialIconComponent: <WebIcon />,
      subLinks: mediaLevelScreen.matches
        ? null
        : [
            {
              id: 3.1,
              name: 'Web App',
              active: false,
              link: `${path}/projects/web-app`,
            },
            {
              id: 3.2,
              name: 'Mobile App',
              active: false,
              link: `${path}/projects/mobile-app`,
            },
          ],
    },
    {
      id: 4,
      name: 'Awards',
      link: `${path}/awards`,
      icon: 'certificate',
      active: false,
      materialIconComponent: <VerifiedUserIcon />,
    },
  ];

  navigationLink.map((nav) => {
    if (nav.link == window.location.pathname) {
      nav.active = true;
    }
  });

  const bottomNavContainerStyle = {
    display: mobileScreens.matches ? 'block' : 'none',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  const rootContainerMobileStyle = {
    width: '100%',
  };

  let rootContainerWebStyle = {};

  if (!mediaLevelScreen.matches) {
    rootContainerWebStyle = {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    };
  }

  const rootstyle = {...rootContainerMobileStyle, ...rootContainerWebStyle};

  return (
    <div style={rootstyle}>
      <UserContextProvider value={userData}>
        <Drawer items={navigationLink} />
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/about`} />
          </Route>
          <Route path={`${path}/about`}>
            <About />
          </Route>
          <Route path={`${path}/skills`}>
            <Skills />
          </Route>
          <Route exact path={`${path}/projects`}>
            <Redirect to={`${path}/projects/web-app`} />
          </Route>
          <Route path={`${path}/projects/web-app`}>
            <Projects type='web' />
          </Route>
          <Route path={`${path}/projects/mobile-app`}>
            <Projects type='mobile' />
          </Route>
          <Route path={`${path}/awards`}>
            <Awards certifications={userData.certifications} awards={userData.awards} />
          </Route>
          <Route path={`${path}/resume`}>
            <ResumeFormatTwo content={userData} />
          </Route>
        </Switch>
        <div className='bottom-navigation' style={bottomNavContainerStyle}>
          <BottomNav items={navigationLink} />
        </div>
      </UserContextProvider>
    </div>
  );
}
