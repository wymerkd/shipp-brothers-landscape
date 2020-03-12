import React from 'react';
import NavBar from './NavBar'
import ContactFooter from './ContactFooter'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import CustomLandscapeHeader from './CustomLandscapeHeader'
import CustomLandscapeCards from './CustomLandscapeCards'
import '../assets/stylesheets/Services.css';


const CustomLandscape= () => {
  return(
    <div>
      <NavBar />
      <CustomLandscapeHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <div id="services">
        <div className="container-fluid padding">
          <div className="service white row">
            <div className="col-lg-6 columnPadding">
              <p>We pride ourselves on designing and creating exactly what the customer wants and needs. Upon your first meeting with a Shipp Brothers representative, we will discuss your overall vision of what you expect. Whether you already have a drawn landscape plan, wish to revise or alter that plan, or wish for us to draw one for you, we will make sure that you are completely satisfied before we actually begin installation.
              <br></br>
              <br></br>
              All professional services require order and process to maximize the quality of the end product. Every contractor has there own way of achieving this. Through experience, we have developed a method that has enabled us to present our customers with very professional results.</p>
              <br></br>
              <br></br>
            </div>
            <div className="col-lg-6 columnPadding">
              <video className="video-fluid d-block" autoPlay loop muted>
                <source src="/images/videos/customLandScape.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <CustomLandscapeCards />
      <ContactFooter />
    </div>
  );
}

export default CustomLandscape;
