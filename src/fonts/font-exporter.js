import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown,
  faChevronUp,
  faUser,
  faBriefcase,
  faSitemap,
  faCertificate,
  faLaptopCode,
  faShieldAlt,
  faGraduationCap,
  faEnvelope,
  faMobile,
  faMobileAlt,
  faPhoneAlt,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

// import faStyles from 'font-awesome/css/font-awesome.css';

library.add(
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faLaptopCode,
  faChevronDown,
  faChevronUp,
  faUser,
  faBriefcase,
  faGraduationCap,
  faSitemap,
  faCertificate,
  faShieldAlt,
  faEnvelope,
  faMobile,
  faMobileAlt,
  faPhoneAlt,
  faCodeBranch
);

function IconComponent(props) {
  if (props.navigationLink) {
    return (
      <a href={props.navigationLink} style={{color: 'black'}} target='_blank'>
        <FontAwesomeIcon tag='span' icon={[props.iconType, props.iconName]} size={props.size || '2x'}></FontAwesomeIcon>
      </a>
    );
  }
  return <FontAwesomeIcon tag='span' icon={[props.iconType, props.iconName]} size={props.size || '2x'} />;
}
export default IconComponent;
