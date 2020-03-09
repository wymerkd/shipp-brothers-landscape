import React from 'react';
import Modal from './ContactPopUp'
import '../assets/stylesheets/NavBar.css';
import {Navbar, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = () => {
  return(
    <div>
      <Navbar id="navStyles" collapseOnSelect expand="lg">
        <Navbar.Brand href="#/">
          <img className="img-fluid" src="/images/navImages/treeLogo.png" alt="fir tree busisness logo"></img>
          <h1 id="brandLogo">SHIPP BROTHERS<br id="logoBreak"></br> LANDSCAPE, INC.</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <br></br>
            <Nav.Item id="phoneNumber">Call Us (360) 887-8564</Nav.Item>
          </Nav>
          <Nav id="linkPosition">
            <Nav.Link className="nav-item active" href="#/">Home</Nav.Link>
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
            <Nav.Item className="nav-link"><Modal /></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
