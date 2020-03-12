import React from 'react';
import NavBar from './NavBar'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import WaterFeatureHeader from './WaterFeatureHeader'
import ContactFooter from './ContactFooter'
import WaterFeatureSlideShow from './WaterFeatureSlideShow'
import '../assets/stylesheets/Services.css';


const WaterFeatures= () => {
  return(
    <div>
      <NavBar />
      <WaterFeatureHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <div id="services">
        <div className="container-fluid">
          <div className="service white row">
            <div className="col-lg-6 columnPadding bottomSpace">
              <WaterFeatureSlideShow />
            </div>
            <div className="col-lg-6 columnPadding">
              <p>Have you ever thought what it might be like to have your own personal creek or pond? Maybe you live in a subdivision and thought it could not be possible to have such a luxury. Let Shipp Brothers show you how we can not only make this possible, but make it real as well. We can make a water feature that's as small as a bathtub, or as big as a swimming pool. The choice is yours. We'll utilize any space you may have, and convert it into a spectacular water feature that looks as though it was put there by mother nature.</p>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

export default WaterFeatures;
