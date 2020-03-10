import React from "react";
import '../assets/stylesheets/BootstrapVidGrid.css';


const BootstrapVidGrid = () => {
  return (
    <div className="container-fluid pb-video-container">
      <div className="col-lg-12">
        <div className="row pb-row">
          <div className="col-md-4 pb-video">
            <video className="pb-video-frame" controls width="100%" height="400"
              src="/images/videos/video1.mp4">
            </video>
          </div>
          <div className="col-md-4 pb-video">
            <video className="pb-video-frame" controls width="100%" height="400"
              src="/images/videos/video2.mp4">
            </video>
          </div>
          <div className="col-md-4 pb-video">
            <video className="pb-video-frame" controls width="100%" height="400"
              src="/images/videos/video3.mp4">
            </video>
          </div>
        </div>
        <div className="row pb-row">
          <div className="col-md-4 pb-video">
            <video className="pb-video-frame" controls width="100%" height="400"
              src="/images/videos/video4.mp4">
            </video>
          </div>
          <div className="col-md-4 pb-video">
            <video className="pb-video-frame" controls width="100%" height="400"
              src="/images/videos/video5.mp4">
            </video>
          </div>
          <div className="col-md-4 pb-video">
            <video className="pb-video-frame" controls width="100%" height="400"
              src="/images/videos/video6.mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BootstrapVidGrid;
