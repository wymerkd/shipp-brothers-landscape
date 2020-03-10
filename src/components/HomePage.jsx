import React from 'react';
import NavBar from './NavBar'
import HomeSlideShow from './HomeSlideShow'
import TreeBackground from './TreeBackground'
import TreeBackgroundTop from './TreeBackgroundTop'
import TreeBackgroundBottom from './TreeBackgroundBottom'
import AboutUs from './AboutUs'
import AboutCards from './AboutCards'
import TeamHeader from './TeamHeader'
import ContactFooter from './ContactFooter'



const HomePage = () => {
  return(
    <div>
      <NavBar />
      <HomeSlideShow />
      <AboutUs />
      <TreeBackgroundTop />
      <TreeBackgroundBottom />
      <TeamHeader />
      <AboutCards />
      <ContactFooter />
    </div>
  );
}

export default HomePage;
