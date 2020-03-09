import React from "react";
import Popup from "reactjs-popup";
import '../assets/stylesheets/ContactPopUp.css';

const Modal = () => (
  <Popup
    trigger={<p> Open Modal </p>}
    modal
    closeOnDocumentClick
  >
    <div>
      <h1>CONTACT US NOW</h1>
    </div>
  </Popup>
);

export default Modal;
