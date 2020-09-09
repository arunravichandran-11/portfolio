import React, {useContext} from 'react';
import './about-me.style.scss';
import IconComponent from '@fonts-exporter/font-exporter';

import * as html2pdf from 'html2pdf.js';

import ResumeComponent from '../resume/resume';
import MyResume from '../my-resume/resume';

const images = require.context('./images', true);
import UserContext from '../../BaseComponents/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.content = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const options = {
      name: 'Portfo.pdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {
        orientation: 'portrait',
        unit: 'mm',
        format: 'a3',
        // format: [797, 1120],
        putOnlyUsedFonts: true,
        floatPrecision: 16,
      },
    };

    let element = document.getElementById('inner-container');

    html2pdf().from(element).set(options).outputPdf().save();
  }

  render() {
    let content = this.context;
    let img = images('./' + content.profilepic).default;

    let profileImageStyle = {
      transform: `scale(${content.scalePhoto})`,
    };

    return (
      <div className='about-me-container'>
        <div className='wrapper'>
          <div className='btn btn-primary' onClick={this.handleClick} style={{zIndex: 9999}}>
            <i className='icon icon-cart'></i>
            Download Resume
          </div>
          <div className='outside'>
            <div className='inside'>
              <img src={img} style={profileImageStyle}></img>
            </div>
          </div>

          {content.hints && (
            <div>
              <h1>Software Engineer | Volleyball player | Hodophile !</h1>
            </div>
          )}

          <div className='summary'>
            <h2>Looking for an enthusiastic and dedicated {content.role} ? How about we have a quick discussion. ? :)</h2>
            <h4> </h4>

            <p className='description'>{content.summary}</p>
            <p className='description'>I request you to have a look on projects and skills section to know about my works and area of expertise.</p>
            <p>Interested............. ? I'm waiting for your call!!!</p>
          </div>

          <div className='social-media-section'>
            <div>
              <IconComponent iconType='fab' iconName='facebook-f' navigationLink={content.facebook} />
            </div>
            <div>
              <IconComponent iconType='fab' iconName='linkedin-in' navigationLink={content.linkedIn} />
            </div>

            {content.github && (
              <div>
                <IconComponent iconType='fas' iconName='code-branch' navigationLink={content.github} />
              </div>
            )}
          </div>

          <div className='contact-section'>
            <div>
              <IconComponent iconType='fas' iconName='envelope' navigationLink={content.facebook} size='2x' />
              <span>{content.email}</span>
            </div>

            <div>
              <IconComponent iconType='fas' iconName='phone-alt' navigationLink={content.facebook} />
              <span>{content.mobile}</span>
            </div>
          </div>
        </div>

        <div className='resume-holder'>
          {content.id === 3107 ? <ResumeComponent content={content}></ResumeComponent> : <MyResume content={content}></MyResume>}
        </div>
      </div>
    );
  }
}

About.contextType = UserContext;
export default About;

{
  /* <div className='summary'>
            <AutoplaySlider
              animation='cubeAnimation'
              bullets={false}
              infinite={true}
              cssModule={AwesomeSliderStyles}
              name='projects-slider'
              organicArrows={false}
              play={true}
              cancelOnInteraction={false} // should stop playing on user interaction
              interval={6000}
            >
              <p className=''>
                I am {content.name}. {content.summary}
              </p>
              <p className=''>
                I am {content.name}. {content.summary}
              </p>
              <p className=''>
                I am {content.name}. {content.summary}
              </p>
            </AutoplaySlider>
          </div> */
}
