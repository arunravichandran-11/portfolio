import React from 'react';
import './carousel-slider.scss';

class CarouselSlider extends React.Component {
  render() {
    return (
      //   <div className='tech-slideshow'>
      //     <div className='mover-1'></div>
      //     <div className='mover-2'></div>
      //   </div>
      <div class='container'>
        <div id='myCarousel' class='carousel slide' data-ride='carousel'>
          <div class='carousel-inner'>
            <div class='item active'>
              <p>
                An energetic and dedicated software developer with an experience of 5+ years in building both FrontEnd and Backend Part of web application
                awarded for the contribution laid for the premium product, works with the love to improve the customer experience using technical/software
                skills and team integratity.
              </p>
            </div>

            <div class='item'>
              <h2> Who Am I ? </h2>
              <p>
                To be specific about who you are part of me, I would call few words for the help like energetiic, organised and enthusiastic, an inspiring and
                collaborative leader with responsibility in the acivity that I take part.
              </p>
            </div>

            <div class='item'>
              <h2> What Am I ? </h2>
              <p>
                Passionate Software Engineer who wishes to make the life of customers happy and easy by taking up innovative and challenging Coding tasks to
                give value to the Product and the Customers. I am a kind of person who likes to see(myself) and suggest(teammates/juniors) coding as a `Smile on
                our customer` and not just as a phase of Software Development Life Cycle. And I personally, have a faith in taking up a small risk factor at
                work when it comes to innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselSlider;
