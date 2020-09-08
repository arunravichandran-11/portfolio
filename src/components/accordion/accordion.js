import React, {useState, useRef} from 'react';
// import Chevron from './Chevron';s
import './accordion.scss';

function Accordion(props) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setMinHeight, setMinHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setMinHeightState(setActive === 'active' ? '0px' : '100px');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  }

  return (
    <div className='accordion__section'>
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className='accordion__title'>{props.title}</p>
      </button>
      <div ref={content} style={{maxHeight: `${setHeight}`, minHeight: `${setMinHeight}`}} className='accordion__content'>
        <div className='accordion__text'>{props.children}</div>
      </div>
    </div>
  );
}

export default Accordion;