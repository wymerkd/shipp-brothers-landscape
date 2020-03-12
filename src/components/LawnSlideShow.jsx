import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../assets/stylesheets/HomeSlideShow.css';

const fadeImages = [
  'images/lawnInstallationImages/lawn1.png',
  'images/lawnInstallationImages/lawn2.png',
  'images/lawnInstallationImages/lawn3.png',
  'images/lawnInstallationImages/lawn4.png',
  'images/lawnInstallationImages/lawn5.png'
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

const LawnSlideShow = () => {
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
      </Fade>
    </div>
  )
}

export default LawnSlideShow;
