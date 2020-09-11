import React from 'react';
import './progress.style.scss';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class CircularProgress extends React.Component {
  render() {
    return (
      <div className='progress-container'>
        {/* text={`${66}%`} */}
        <CircularProgressbar value={this.props.value} text={this.props.value} />
        <div className='skill-name'>
          <span>Javascript</span>
        </div>
      </div>
    );
  }
}

export default CircularProgress;
