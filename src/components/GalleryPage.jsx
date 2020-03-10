import React from 'react';
import GalleryMain from "./GalleryMain";
import GalleryHeader from "./GalleryHeader";
import NavBar from './NavBar'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import ContactFooter from './ContactFooter'

const GalleryPage = () => {
  return(
    <div>
      <NavBar />
      <GalleryHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <GalleryMain />
      <ContactFooter />
    </div>
  );
}

export default GalleryPage;
