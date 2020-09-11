import React, {useContext} from 'react';
import './about-me.style.scss';
import IconComponent from '@fonts-exporter/font-exporter';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import GetAppIcon from '@material-ui/icons/GetApp';
import ButtonComponent from '@components/button-component/button';

import ResumeFormatOne from '../resume/format-one';
import ResumeFormatTwo from '../resume/format-two';

import * as html2pdf from 'html2pdf.js';

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

    let element = document.getElementById('print-resume');

    html2pdf().from(element).set(options).outputPdf().save();
    // .then((done) => {
    //   alert('done'), (error) => alert('error');
    // });
  }

  render() {
    let content = this.context;
    let img = images('./' + content.profilepic).default;

    let profileImageStyle = {
      transform: `scale(${content.scalePhoto})`,
    };

    let mediaMatch = window.matchMedia('(max-width: 800px)');

    const downloadButton = mediaMatch.matches ? (
      <ButtonComponent type='icon' icon={<GetAppIcon />} onClick={this.handleClick} />
    ) : (
      <ButtonComponent label='Download Resume' icon={<GetAppIcon />} onClick={this.handleClick} />
    );

    return (
      <div className='about-me-container'>
        <div className='wrapper'>
          {downloadButton}

          <h1 className='name'>{content.name}</h1>

          <div className='outside'>
            <div className='inside'>
              <img src={img} style={profileImageStyle}></img>
            </div>
          </div>

          {content.hints && (
            <div>
              <h1>Software Engineer | Volleyball Player | Hodophile !</h1>
            </div>
          )}
          <div className='summary'>
            {/* <h2>Looking for an enthusiastic and dedicated {content.role} ? How about we have a quick discussion. ? :)</h2> */}
            {/* <h4> </h4> */}

            <p className='description'>{content.summary}</p>
            <p className='description'>I request you to have a look on projects and skills section to know about my works and area of expertise.</p>
            {/* <p>Interested............. ? I'm waiting for your call!!!</p> */}
          </div>

          {/* <h4 className='who'>Who I am</h4>
              <p className='description'>{content.whoyouare}</p>
              <h4 className='what'>What I am</h4>
              <p className='description'>{content.whatyouare}</p>
            </p> */}
          {/* <CarouselSlider />
           */}

          {/* <div className='summary'>
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
          </div> */}

          {/* <div class='tech-slideshow'>
            <div class='mover-1'></div>
            <div class='mover-2'></div>
          </div> */}

          {/* <div className='who-and-what'>
            <h4 className='who'>Who I am</h4>
            <p className='description'>{content.whoyouare}</p>
            <h4 className='what'>What I am</h4>
            <p className='description'>{content.whatyouare}</p>

            <Tabs>
              Who Am I ?<span>{content.whoyouare}</span>
              What Am I ?<span>{content.whatyouare}</span>
            </Tabs>
          </div> */}

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

        <div className='resume-holder'>{content.id === 3107 ? <ResumeFormatOne content={content} /> : <ResumeFormatTwo content={content} />}</div>

        {/* <div className='resume-holder' id='resume-holder'>
          <ResumeComponent content={content}></ResumeComponent>
        </div> */}
      </div>
    );
  }
}

About.contextType = UserContext;
export default About;
