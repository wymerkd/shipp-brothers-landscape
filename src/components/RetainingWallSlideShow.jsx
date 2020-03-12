import React from 'react';
import { Fade } from 'react-slideshow-image';
import '../assets/stylesheets/HomeSlideShow.css';

const fadeImages = [
  'images/RetainingWallImages/retainingWall1.png',
  'images/RetainingWallImages/retainingWall2.png',
  'images/RetainingWallImages/retainingWall4.png',
  'images/RetainingWallImages/retainingWall5.png',
  'images/RetainingWallImages/retainingWall6.png',
  'images/RetainingWallImages/retainingWall7.png',
  'images/RetainingWallImages/retainingWall10.png',
  'images/RetainingWallImages/retainingWall11.png',
  'images/RetainingWallImages/retainingWall12.png',
  'images/RetainingWallImages/retainingWall15.png',
  'images/RetainingWallImages/retainingWall16.png'
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

const RetainingWallSlideShow = () => {
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
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[8]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[9]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[10]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default RetainingWallSlideShow;
