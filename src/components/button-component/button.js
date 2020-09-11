import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

import './button.scss';

const ButtonComponent = (props) => {
  if (props.type == 'icon') {
    return (
      <span>
        <Fab aria-label='download' className='btn btn-primary' variant='round' onClick={props.onClick}>
          {props.icon}
        </Fab>
        <label className='fab-label'>Resume</label>
      </span>
    );
  }
  return (
    <Button variant='contained' className='btn btn-primary' onClick={props.onClick}>
      {props.label}
    </Button>
  );
};
export default ButtonComponent;

{
  /* <Fab color='primary' aria-label='download' className='btn btn-primary'>
        {props.icon}
      </Fab> */
}
