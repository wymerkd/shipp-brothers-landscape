import React from 'react';
import NavBar from './NavBar'
import ContactFooter from './ContactFooter'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import BarkBlowingHeader from './BarkBlowingHeader'
import '../assets/stylesheets/Services.css';


const BarkBlowing= () => {
  return(
    <div>
      <NavBar />
      <BarkBlowingHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <div id="services">
        <div className="container-fluid">
          <div className="service blue row">
            <div className="col-lg-6 columnPadding">
              <img src="https://i.picsum.photos/id/1011/700/400.jpg" className="imageShadow img-fluid mb-5 rounded" alt="" />
            </div>
            <div className="col-lg-6 columnPadding">
              <p>Bark blowing is the newest, most advanced way of spreading bark dust. Depending on the size and location of an area where bark dust is needed, blowing is also the quickest and most efficient way to get it there. Shipp Brothers bark blowing service is perfect for those larger, hard to get to areas. </p>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

export default BarkBlowing;
