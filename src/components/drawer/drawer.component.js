import React, {useContext} from 'react';
import {useRouteMatch} from 'react-router-dom';
import CustomNavLink from '../Navigation/nav-link.component';

import IconComponent from '@fonts-exporter/font-exporter';

import Accordion from '@components/accordion/accordion';

import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

import './drawer.style.scss';

import UserContext from '../../BaseComponents/UserContext';

function Drawer(props) {
  const content = useContext(UserContext);

  const firstChar = content.name.charAt(0);
  let umath = useRouteMatch();

  let navigationLink = [
    {
      id: 1,
      name: 'Skills',
      link: `${umath.url}/skills`,
      icon: 'laptop-code',
    },
    {
      id: 2,
      name: 'About Me',
      link: `${umath.url}/about`,
      icon: 'user',
    },
    {
      id: 3,
      name: 'Projects',
      link: `${umath.url}/projects`,
      icon: 'brief-case',
      subLinks: [
        {
          id: 3.1,
          name: 'Web App',
          link: `${umath.url}/projects/web-app`,
        },
        {
          id: 3.2,
          name: 'Mobile App',
          link: `${umath.url}/projects/mobile-app`,
        },
      ],
    },
  ];

  if (content.id === 1101) {
    let awards = {
      id: 4,
      name: 'Awards',
      link: `${umath.url}/awards`,
      icon: 'certificate',
    };
    // navigationLink[...awards];
    navigationLink.push(awards);
  }

  return (
    <div className='drawer-component'>
      <div className='top-section'>
        <div className='logo'>{firstChar}</div>
        {/* <h4 className='name'>{content.name}</h4> */}
        <h5 className='role'>{content.role}</h5>
      </div>
      <div className='list-component'>
        <ul>
          {props.items.map((item, index) => {
            if (item.subLinks) {
              return (
                <li key={index}>
                  <Accordion title='Projects'>
                    <div>
                      <CustomNavLink to={item.subLinks[0].link} label={item.subLinks[0].name}></CustomNavLink>
                    </div>
                    <div>
                      <CustomNavLink to={item.subLinks[1].link} label={item.subLinks[1].name}></CustomNavLink>
                    </div>
                  </Accordion>
                </li>
              );
            }
            return (
              <li key={index}>
                <CustomNavLink icon={<IconComponent iconType='fas' iconName={item.icon} size='2x' />} to={item.link} label={item.name}></CustomNavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
