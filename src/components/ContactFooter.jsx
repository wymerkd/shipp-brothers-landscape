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
            <div id="largeMap" className="col-md-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4635.0201248612975!2d-122.69173804823184!3d45.76745372107425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495b3c0e2ab9b8b%3A0x16afebd2c30ec71a!2sSHIPP%20BROTHERS%20LANDSCAPE!5e1!3m2!1sen!2sus!4v1585090736572!5m2!1sen!2sus" width="400" height="300" frameBorder="0" style={{border:"1px solid lightGrey"}} allowFullScreen="true"></iframe>
            </div>
            <div id="mobileMap" className="col-md-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4635.0201248612975!2d-122.69173804823184!3d45.76745372107425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495b3c0e2ab9b8b%3A0x16afebd2c30ec71a!2sSHIPP%20BROTHERS%20LANDSCAPE!5e1!3m2!1sen!2sus!4v1585090736572!5m2!1sen!2sus" width="300" height="200" frameBorder="0" style={{border:"1px solid lightGrey"}} allowFullScreen="true"></iframe>
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
