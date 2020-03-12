import React from 'react';
import NavBar from './NavBar'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import NurseryStockHeader from './NurseryStockHeader'
import ContactFooter from './ContactFooter'
import '../assets/stylesheets/Services.css';


const NurseryStock= () => {
  return(
    <div>
      <NavBar />
      <NurseryStockHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <div id="services">
        <h1>UNDER CONSTRUCTION</h1>
      </div>
      <ContactFooter />
    </div>
  );
}

export default NurseryStock;
