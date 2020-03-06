import React from 'react';
import GalleryMain from "./GalleryMain";
import GalleryHeader from "./GalleryHeader";
import NavBar from './NavBar'

const GalleryPage = () => {
  return(
    <div>
      <NavBar />
      <GalleryHeader />
      <GalleryMain />
    </div>
  );
}

export default GalleryPage;
