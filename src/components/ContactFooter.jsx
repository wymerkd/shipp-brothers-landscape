import React from 'react';
import '../assets/stylesheets/ContactFooter.css';

const ContactFooter = () => {
  return(
    <div>
      <footer>
  			<div className="container-fluid">
  				<div className="row text-center">
  					<div className="col-md-4">
              <hr className="light"></hr>
  						<h5>Contact</h5>
  						<hr className="light"></hr>
  						<p>Steve Shipp</p>
  						<p>Cell: (360) 518-3396</p>
  						<p>Office: (360) 887-8564</p>
  						<p>steveshipp@shippbrothers.com</p>
  					</div>
            <div className="col-md-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8226.345334961476!2d-122.69392136635555!3d45.76745372117719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495b2a86a3ec3c5%3A0x535c18f4fc5841e8!2s20115%20NW%2018th%20Pl%2C%20Ridgefield%2C%20WA%2098642!5e1!3m2!1sen!2sus!4v1583803268414!5m2!1sen!2sus" width="400" height="300" frameborder="0" style={{border:"1px solid lightGrey"}} allowfullscreen=""></iframe>
            </div>
  					<div className="col-md-4">
  						<hr className="light"></hr>
  						<h5>Location</h5>
  						<hr className="light"></hr>
                <p>20115 NW 18th Pl</p>
    						<p>Ridgefield, WA, 98642</p>
  					</div>
  					<div className="col-12">
  						<hr className="light-100"></hr>
  						<h5>&copy; shippbrotherslandscape.com</h5>
  					</div>
  				</div>
  			</div>
  		</footer>
    </div>
  );
}

export default ContactFooter;
