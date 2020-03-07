import React from 'react';
import '../assets/stylesheets/HeaderLine.css';


const GalleryHeader = () => {
  return(
    <div className="allHeader">
      <div className="container-fluid padding">
        <div className="row header text-center">
          <div className="col-12">
            <h1 className="display-4">Landscape Gallery</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;
