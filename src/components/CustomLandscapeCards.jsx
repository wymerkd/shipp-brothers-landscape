import React from 'react';
import '../assets/stylesheets/AboutCards.css';


const AboutCards = () => {
  return(
    <div id="aboutCards">
      <div className="container-fluid padding">
   			<div className="row">
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top customCardImg" src="/images/customLandscapeImages/soil2.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Grading & Soil Preparation</h4>
  							<p className="card-text">In most cases an area to be landscaped will need either new topsoil added or the existing soil should be rototilled.</p>
  						</div>
  					</div>
  				</div>
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top customCardImg" src="/images/customLandscapeImages/rainBird.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Irrigation</h4>
  							<p className="card-text">If desired, a high quality Rain Bird sprinkler system will be installed. In most cases our trenchless plow is used to install pipe to eliminate much of the mess.</p>
  						</div>
  					</div>
  				</div>
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top customCardImg" src="/images/customLandscapeImages/plantMaterial2.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Plant Material</h4>
  							<p className="card-text">Selected trees, shrubs and groundcover will be professionally planted and fertilized.</p>
  						</div>
  					</div>
  				</div>
   			</div>
        <br></br>
        <br></br>
        <div className="row">
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top customCardImg" src="/images/customLandscapeImages/lawn.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Low Voltage Lighting</h4>
  							<p className="card-text">If desired, a high quality Kichler light system will be installed.</p>
  						</div>
  					</div>
  				</div>
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top customCardImg" src="/images/customLandscapeImages/rainBird.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Bark Dust</h4>
  							<p className="card-text">Bark dust will be applied using either our bark blower or wheelbarrows, depending on accessibility.</p>
  						</div>
  					</div>
  				</div>
  				<div className="col-md-4 d-flex align-items-stretch brotherBio">
  					<div className="card">
  						<img className="card-img-top customCardImg" src="/images/customLandscapeImages/lawn.png" alt="" />
  						<div className="card-body">
  							<h4 className="card-title">Grass</h4>
  							<p className="card-text">Depending on personal preference and/or time of year, hydroseeding or sod will be installed.</p>
  						</div>
  					</div>
  				</div>
   			</div>
  		</div>
    </div>
  );
}

export default AboutCards;
