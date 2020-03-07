import React from 'react';
import NavBar from './NavBar'
import HomeSlideShow from './HomeSlideShow'
import AboutUs from './AboutUs'

const HomePage = () => {
  return(
    <div>
      <NavBar />
      <HomeSlideShow />
      <AboutUs />
    </div>
  );
}

export default HomePage;
