import React from 'react';
import NavBar from './NavBar'
import HomeSlideShow from './HomeSlideShow'
import AboutUs from './AboutUs'
import AboutCards from './AboutCards'

const HomePage = () => {
  return(
    <div>
      <NavBar />
      <HomeSlideShow />
      <AboutUs />
      <AboutCards />
    </div>
  );
}

export default HomePage;
