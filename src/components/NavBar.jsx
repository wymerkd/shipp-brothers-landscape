import React from 'react';
import '../assets/stylesheets/NavBar.css';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = () => {
  return(
    <div>
      <Navbar id="navStyles" collapseOnSelect expand="lg">
        <Navbar.Brand href="#/">
          <img className="img-fluid" src="/images/navImages/treeLogo.png" alt="fir tree busisness logo"></img>
          <h1 id="brandLogo">SHIPP BROTHERS LANDSCAPE, INC.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav id="linkPosition">
            <Nav.Link className="nav-item active" href="#/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#custom-landscape-design">Custom Landscape Design</NavDropdown.Item>
              <NavDropdown.Item href="#lawn-installation">Lawn Installation</NavDropdown.Item>
              <NavDropdown.Item href="#water-features">Water Features & Waterfalls</NavDropdown.Item>
              <NavDropdown.Item href="#retaining-walls">Retaining Walls & Steps</NavDropdown.Item>
              <NavDropdown.Item href="#lighting">Lighting</NavDropdown.Item>
              <NavDropdown.Item href="#bark-blowing">Bark Blowing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#lawn-care-guide">Lawn Care Guide</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#nursery-stock">Nursery Stock</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <p id="phoneNumber">CALL US (555) 555-5555</p>
    </div>
  );
}

export default NavBar;
