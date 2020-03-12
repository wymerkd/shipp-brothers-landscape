import React from 'react';
import NavBar from './NavBar'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import LawnInstallationHeader from './LawnInstallationHeader'
import ContactFooter from './ContactFooter'
import LawnSlideShow from './LawnSlideShow'
import '../assets/stylesheets/Services.css';


const LawnInstallation= () => {
  return(
    <div>
      <NavBar />
      <LawnInstallationHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <div id="services">
        <div className="container-fluid">
          <div className="service white row">
            <div className="col-lg-6 columnPadding">
              <h2 style={{paddingTop: "10%"}}>Hydroseeding</h2>
              <p>The most technologically advanced way to seed a lawn. A mixture of fertilizer, premium grass seed and wood fiber mulch is added to water and sprayed onto the ground with the use of a machine. This method is the fastest, most efficient way to obtain a thick, healthy lawn from seed germination. The average time for germination is about 5-7 days, depending on temperature and weather conditions. And with the experience that Shipp Brothers has in using this method, you can be sure that you’ll get the best results possible. </p>
            </div>
            <div className="col-lg-6 columnPadding">
              <LawnSlideShow />
            </div>
          </div>
          <div className="service green row">
            <div className="col-lg-6 columnPadding">
              <img src="images/lawnInstallationImages/lawn6.png" className="imageShadow img-fluid mb-5 rounded" alt="" />
            </div>
            <div className="col-lg-6 columnPadding">
              <h2 style={{paddingTop: "20%"}}>Sod</h2>
              <p>A great idea for those who desire a lush, green lawn without the wait. Shipp Brothers has an outstanding reputation for installing beautiful lawns with the use of sod. The advantage to using sod over seed is that you will have an instant lawn.</p>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

export default LawnInstallation;
