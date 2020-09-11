import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav-link.styles.scss';

function CustomNavLink({label, to, icon}) {
  return (
    <div className='nav-link-container'>
      <NavLink to={`${to}`} activeClassName='active'>
        <span className='dot'></span>
        {icon && icon}
        <span className='label'>{label}</span>
      </NavLink>
    </div>
  );
}

export default CustomNavLink;
