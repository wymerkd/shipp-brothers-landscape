import React from 'react';
import '../assets/stylesheets/HeaderLine.css';


const AboutHeader = () => {
  return(
    <div className="allHeader">
      <div className="container-fluid padding">
        <div className="row header text-center">
          <div className="col-12">
            <h1 className="display-4">About Us</h1>
            <br></br>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
