import React from 'react';
import '../assets/stylesheets/AboutUs.css';

const AboutUs = () => {
  return(
    <div>
      <div className="container-fluid">
        <div className="about row">
          <div className="col-lg-6">
            <h1>Who We Are</h1>
            <br></br>
            <p>Shipp Brothers is proud to display the largest nursery in all of Clark County. We have over 50 acres of field grown stock, and 10 green-houses full of beautiful, professionally maintained container stock.</p>
            <br></br>
            <p>Shipp Brothers employs 10-15 workers, depending on seasonal weather. All employees receive the same professional training to ensure that the quality of our service is consistently superior.</p>
            <br></br>
            <p>Shipp Brothers Landscape is a member of the Washington Association of Landscape Professionals (WALP).</p>
            <br></br>
            <br></br>
          </div>
          <div className="col-lg-6">
            <img src="/images/galleryImages/shipp6.png" className="imageShadow img-fluid mb-5 rounded" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
