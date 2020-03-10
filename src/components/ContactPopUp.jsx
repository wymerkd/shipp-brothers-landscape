import React from "react";
import Popup from "reactjs-popup";
import '../assets/stylesheets/ContactPopUp.css';

const Modal = () => (
  <Popup
    trigger={<span> Contact </span>}
    modal
    closeOnDocumentClick
  >
    <div className="modalStyle">
			<div className="container-fluid">
				<div className="row text-center">
					<div className="col">
            <hr className="light"></hr>
						<h5>Contact</h5>
						<hr className="light"></hr>
						<p>Steve Shipp</p>
						<p>Cell: (360) 518-3396</p>
						<p>Office: (360) 887-8564</p>
						<p>steveshipp@shippbrothers.com</p>
					</div>
          <div className="col">
            <hr className="light"></hr>
            <h5>Location</h5>
            <hr className="light"></hr>
              <p>20115 NW 18th Pl</p>
              <p>Ridgefield, WA, 98642</p>
          </div>
				</div>
			</div>
  </div>
  </Popup>
);

export default Modal;
