import React from 'react';
import '../assets/stylesheets/AboutCards.css';


const AboutCards = () => {
  return(
    <div id="aboutCards">
      <div className="container-fluid padding">
   			<div className="row">
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top" src="/images/galleryImages/shipp6.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Steve Shipp</h4>
  							<p className="card-text">Shipp Brothers Landscape was founded in 1978 by Steve Shipp and his brother. Since then, Steve has incorporated his business and is now the sole owner and president of Shipp Brothers Landscape, Inc. Together with his wife, Debbie, they have molded Shipp Brothers into a very friendly and respectable business.</p>
  						</div>
  					</div>
  				</div>
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top" src="/images/galleryImages/shipp6.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">AJ Shipp</h4>
  							<p className="card-text">Son of Steve and Debbie, AJ is a very friendly and well respected employee whose specialty and creativity shows when he’s at the controls of any of our heavy equipment. When it comes to grading, building rock walls, or just about any large scale project, AJ is the man to do it.</p>
  						</div>
  					</div>
  				</div>
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top" src="/images/galleryImages/shipp6.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Spencer Shipp</h4>
  							<p className="card-text">Also son of Steve and Debbie, Spencer is a well respected employee who specializes in Rainbird Sprinkler Systems, Kichler Outdoor Landscape Lighting, and custom water features. Spencer is very informative and can answer any questions you may have regarding your project.</p>
  						</div>
  					</div>
  				</div>
   			</div>
  		</div>
    </div>
  );
}

export default AboutCards;
