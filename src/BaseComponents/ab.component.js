import React, {lazy} from 'react';
import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import Drawer from '../components/drawer/drawer.component';

const About = lazy(() => import(/* webpackChunkName: "about.bundle" */ '../modules/about/about.js'));
const Skills = lazy(() => import(/* webpackChunkName: "skills.bundle" */ '../modules/skills/skills.js'));
const Projects = lazy(() => import(/* webpackChunkName: "projects.bundle" */ '../modules/projects/projects.component.js'));
const Awards = lazy(() => import(/* webpackChunkName: "awards.bundle" */ '../modules/awards/award.js'));
const MyResume = lazy(() => import(/* webpackChunkName: "MyResume.bundle" */ '../modules/my-resume/resume.js'));

import utilService from '../utils/utils';

import {UserContextProvider} from './UserContext';

export default function AbComponent() {
  let userData = utilService().userAB;
  let {path} = useRouteMatch();
  return (
    <div>
      <UserContextProvider value={userData}>
        <Drawer />
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
            <MyResume content={userData} />
          </Route>
        </Switch>
      </UserContextProvider>
    </div>
  );
}
