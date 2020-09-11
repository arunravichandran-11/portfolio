import React, {Component, useState, useContext} from 'react';
import './projects.styles.scss';

import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import AwesomeSliderStyles from 'react-awesome-slider/src/core/styles.scss';

import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const images = require.context('./images', true);
import IconComponent from '../../fonts/font-exporter';
import UserContext from '../../BaseComponents/UserContext';

function Slider(props) {
  const [scrollTo, setScroll] = useState('bottom');

  // let content = useContext(UserContext);

  let content = props.content;

  let scrollElement = React.createRef();

  function scrollToBottom() {
    var myDiv = scrollElement.current;
    myDiv.scrollTop = myDiv.scrollHeight;
  }

  function handleScroll(event) {
    let endOfScroll = isEndOFScroll(scrollElement.current);

    if (endOfScroll) {
      scrollToTop();
      setScroll('bottom');
    } else {
      scrollToBottom();
      setScroll('top');
    }
  }

  function scrollToTop() {
    var myDiv = scrollElement.current;
    myDiv.scrollTop = 0;
  }

  function isEndOFScroll(ele) {
    return ele.offsetHeight + ele.scrollTop == ele.scrollHeight;
  }

  function renderProjects(projects) {
    return projects.map((project, index) => {
      let img;
      if (project.image) {
        img = images('./' + project.image).default;
      }

      return (
        <div key={index} className={project.short_name}>
          <div className='slides-container' ref={scrollElement}>
            <div className={`content-wrap ${props.type}`}>
              {project.image && (
                <div className={`image-wrap ${project.short_name}`}>
                  <img src={img} />
                </div>
              )}
              <div className='description-wrap'>
                <div className='project-name'>
                  <h2>{project.name}</h2>
                </div>
                <p>{project.pd}</p>
              </div>
            </div>
          </div>
          {props.type === 'web' && (
            <div>
              <a
                className='scroll-to-bottom'
                onClick={(e) => {
                  handleScroll(e);
                }}
              >
                {scrollTo === 'top' ? <IconComponent iconType='fas' iconName='chevron-up' /> : <IconComponent iconType='fas' iconName='chevron-down' />}
              </a>
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={true} // should stop playing on user interaction
      interval={6000}
      mobileTouch={true}
      cssModule={AwesomeSliderStyles}
      className='awesome-slider-plugin'
      name='projects-slider'
      organicArrows={true}
    >
      {renderProjects(content)}
    </AutoplaySlider>
  );
}

class Projects extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='projects-container'>
        <div className='project-slider-container'>
          {this.props.type === 'mobile' ? (
            <Slider type={this.props.type} content={this.context.mobileApps}></Slider>
          ) : (
            <Slider type={this.props.type} content={this.context.webApps}></Slider>
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
