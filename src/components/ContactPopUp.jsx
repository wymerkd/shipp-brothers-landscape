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
      <div>
        <h1 id="businessCardLogo">SHIPP BROTHERS LANDSCAPE, INC.</h1>
        <p id="steve">Steve Shipp</p>
        <p><span><i className="fas fa-phone-square"></i> </span> Cell: (360) 518-3396</p>
        <p><span><i className="fas fa-phone-square"></i> </span> Office: (360) 887-8564</p>
        <p id="emailLarge"><span><i className="fas fa-envelope-square"></i> </span>steveshipp@ shippbrothers.com</p>
        <p id="emailSmall"><span><i className="fas fa-envelope-square"></i> </span>steveshipp@shippbrothers.com</p>
        <p><span><i class="fas fa-map-marker-alt"></i> </span>20115 NW 18th Pl</p>
        <p className="pushRight">Ridgefield, WA, 98642</p>
			</div>
    </div>
  </Popup>
);

export default Modal;
