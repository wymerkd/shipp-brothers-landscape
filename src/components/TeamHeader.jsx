import React from 'react';
import '../assets/stylesheets/HeaderLine.css';


const TeamHeader = () => {
  return(
    <div className="allHeader" id="aboutHeader">
      <div className="container-fluid padding">
        <div className="row teamHeader text-center">
          <div className="col-12">
            <h1 className="display-4">Meet The Team</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHeader;
