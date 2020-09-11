import React from 'react';
import './award.scss';
const images = require.context('./images', true);

class Awards extends React.Component {
  render() {
    let {awards, certifications} = this.props;

    return (
      <div className='awards-container'>
        {/* <h3>Awards</h3> */}

        <div className='certificate-wrap'>
          {certifications.map((award, index) => {
            let img = images('./' + award.image).default;
            return (
              <div key={index} className='awards'>
                <div className='img-wrap'>
                  <img src={img}></img>
                </div>
                <h2>{award.name}</h2>
              </div>
            );
          })}
        </div>
        <div className='awards-wrap'>
          {awards.map((award, index) => {
            let img = images('./' + award.image).default;
            return (
              <div key={index} className='awards'>
                <div className='img-wrap'>
                  <img src={img}></img>
                </div>
                <h2>{award.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Awards;
