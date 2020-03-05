import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import CustomLandscapePage from './components/CustomLandscapePage';
import LawnInstallationPage from './components/LawnInstallationPage';
import WaterFeaturePage from './components/WaterFeaturePage';
import LightingPage from './components/LightingPage';
import BarkBlowingPage from './components/BarkBlowingPage';
import LawnCarePackage from './components/LawnCarePackage';
import NurseryStockPage from './components/NurseryStockPage';
import ContactPage from './components/ContactPage';
import Error404 from './components/Error404';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/custom-landscape-design' component={CustomLandscapePage} />
        <Route exact path='/lawn-installation' component={LawnInstallationPage} />
        <Route exact path='/water-features' component={WaterFeaturePage} />
        <Route exact path='/lighting' component={LightingPage} />
        <Route exact path='/bark-blowing' component={BarkBlowingPage} />
        <Route exact path='/lawn-care-guide' component={LawnCarePage} />
        <Route exact path='/nursery-stock' component={NurseryStockPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
