import React from 'react';
import NavBar from './NavBar'
import GalleryHeader from './GalleryHeader'
import '../assets/stylesheets/CustomLandscape.css';


const CustomLandscape= () => {
  return(
    <div>
      <NavBar />
      <GalleryHeader />
      <div id="aboutUs">
        <div className="aboutShadow container-fluid padding">
          <div className="about row padding ">
            <div className="col-lg-6">
              <p>We pride ourselves on designing and creating exactly what the customer wants and needs. Upon your first meeting with a Shipp Brothers representative, we will discuss your overall vision of what you expect. Whether you already have a drawn landscape plan, wish to revise or alter that plan, or wish for us to draw one for you, we will make sure that you are completely satisfied before we actually begin installation.
              <br></br>
              <br></br>
              All professional services require order and process to maximize the quality of the end product. Every contractor has there own way of achieving this. Through experience, we have developed a method that has enabled us to present our customers with very professional results.</p>
              <br></br>
              <br></br>
            </div>
            <div className="col-lg-6">
              <img src="https://i.picsum.photos/id/1011/700/400.jpg" className="imageShadow img-fluid shadow-sm p-3 mb-5 rounded" alt="" />
            </div>
            <div className="col-lg-6">
              <img src="https://i.picsum.photos/id/1011/700/400.jpg" className="imageShadow img-fluid shadow-sm p-3 mb-5 rounded" alt="" />
            </div>
            <div className="col-lg-6">
              <h2>Who We Are</h2>
              <p>Shipp Brothers is proud to display the largest nursery in all of Clark County. We have over 50 acres of field grown stock, and 10 green-houses full of beautiful, professionally maintained container stock.</p>
              <br></br>
              <p>Shipp Brothers employs 10-15 workers, depending on seasonal weather. All employees receive the same professional training to ensure that the quality of our service is consistently superior.</p>
              <br></br>
              <p>Shipp Brothers Landscape is a member of the Washington Association of Landscape Professionals (WALP).</p>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomLandscape;
