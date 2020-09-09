import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav-link.styles.scss';

function CustomNavLink({label, to}) {
  return (
    <div className='nav-link-container'>
      <NavLink to={`${to}`} activeClassName='active'>
        <span className='dot'></span>
        <span>{label}</span>
      </NavLink>
    </div>
  );
}

export default CustomNavLink;
