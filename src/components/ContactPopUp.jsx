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
      <div id="businessCardLogoPosition">
        <img className="img-fluid" src="/images/navImages/treeLogoOriginal.png" alt="fir tree busisness logo"></img>
        <h1 id="businessCardLogo">SHIPP BROTHERS LANDSCAPE, INC.</h1>
      </div>
					<div className="left">
						<p>Steve Shipp</p>
						<p>Cell: (360) 518-3396 <br></br>Office: (360) 887-8564</p>
						<p>steveshipp@shippbrothers.com</p>
					</div>
          <div className="right">
              <p>20115 NW 18th Pl</p>
              <p>Ridgefield, WA, 98642</p>
          </div>
        </div>
  </Popup>
);

export default Modal;
