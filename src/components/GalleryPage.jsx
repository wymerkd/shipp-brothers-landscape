import React from 'react';
import GalleryMain from "./GalleryMain";
import GalleryHeader from "./GalleryHeader";
import NavBar from './NavBar'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import ContactFooter from './ContactFooter'
import VideoCarousel from './VideoCarousel'
import BootstrapVidGrid from './BootstrapVidGrid'

const GalleryPage = () => {
  return(
    <div>
      <NavBar />
      <GalleryHeader />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <VideoCarousel />
      <GalleryMain />
      <ContactFooter />
    </div>
  );
}

export default GalleryPage;
