import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../assets/stylesheets/HomeSlideShow.css';

const fadeImages = [
  'images/homeSlideShowImages/shipp1.png',
  'images/homeSlideShowImages/shipp2.png',
  'images/homeSlideShowImages/shipp3.png'
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 800,
  infinite: true,
  indicators: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const HomeSlideShow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>Committed to <br></br> Quality & Customer <br></br> Satisfaction</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Serving <br></br>Clark County<br></br> Since 1978</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Award Winning <br></br> Landscape Design</h2>
        </div>
      </Fade>
    </div>
  )
}

export default HomeSlideShow;
