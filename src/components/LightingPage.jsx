import React from 'react';
import NavBar from './NavBar'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import LightingHeader from './LightingHeader'
import ContactFooter from './ContactFooter'
import '../assets/stylesheets/Services.css';


const Lighting= () => {
  return(
    <div>
      <NavBar />
      <LightingHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <div id="services">
        <div className="container-fluid">
          <div className="service white row">
            <div className="col-lg-6 columnPadding">
              <p>Why should the beauty of your landscape be seen only during the daytime? Lighting adds both style and class to any yard. Whether it's lighting a pathway, illuminating a tree or shrub, or simply lighting up the exterior of your home, a lighting system is a great way to show off your yard at night. We proudly use Kichler brand products with a 15 year warranty.</p>
            </div>
            <div className="col-lg-6 columnPadding">
              <img src="https://i.picsum.photos/id/1011/700/400.jpg" className="imageShadow img-fluid mb-5 rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

export default Lighting;
