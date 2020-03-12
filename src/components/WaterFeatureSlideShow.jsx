import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../assets/stylesheets/HomeSlideShow.css';

const fadeImages = [
  'images/waterFeatureImages/water1.png',
  'images/waterFeatureImages/water2.png',
  'images/waterFeatureImages/water4.png',
  'images/waterFeatureImages/water5.png',
  'images/waterFeatureImages/water6.png',
  'images/waterFeatureImages/water7.png',
  'images/waterFeatureImages/water8.png'
];

const fadeProperties = {
  duration: 2500,
  transitionDuration: 800,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const WaterFeatureSlideShow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container imageShadow">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default WaterFeatureSlideShow;
