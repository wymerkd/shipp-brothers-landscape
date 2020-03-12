import React from 'react';
import '../assets/stylesheets/HeaderLine.css';


const GalleryHeader = () => {
  return(
    <div id="galleryHeader" className="allHeader">
      <div className="container-fluid">
        <div className="row header text-center">
          <div className="col-12">
            <h1 className="display-4">Gallery</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;
