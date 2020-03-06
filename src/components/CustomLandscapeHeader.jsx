import React from 'react';
import '../assets/stylesheets/HeaderLine.css';


const CustomLandscapeHeader = () => {
  return(
    <div className="allHeader">
      <div className="container-fluid padding">
        <div className="row header text-center">
          <div className="col-12">
            <h1 className="display-4">Custom Landscape Design</h1>
            <br></br>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default CustomLandscapeHeader;
