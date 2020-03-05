import React from 'react';
import '../assets/stylesheets/NavBar.css';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = () => {
  return(
    <div>
      <Navbar id="navStyles" collapseOnSelect expand="lg">
        <Navbar.Brand href="#/">
          <img className="img-fluid" src="/images/navImages/treeLogo.png" alt="fir tree busisness logo"></img>
          <h1 id="brandLogo">SHIPP BROTHERS LANDSCAPE</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav id="linkPosition">
            <p id="phoneStyles">Call Us (206) 661-2059</p>
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item id="huh" href="#action/3.1">Custom Landscape Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lawn Installation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Water Features & Waterfalls</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Retaining Walls & Steps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lighting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bark Blowing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#gallery">Lawn Care Guide</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/">Nursery Stock</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
