
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const NavBar = () => {

   return ( 
<div> 




<Navbar class="navbar bg-transparent p justify-content-center">
  <Navbar.Brand as={Link} to="/">Last Stanđ Tavern</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/Home">Home</Nav.Link>
      <Nav.Link as={Link} to="/About">About</Nav.Link>
      <Nav.Link as={Link} to="/Topics">Topics</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</div>

)}

export default NavBar;