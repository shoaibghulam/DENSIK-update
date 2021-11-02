import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar,Nav,Container, Row, Col} from 'react-bootstrap';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

import '../App.css';

const NavegationBar=() =>{
    return (
      <>
       
  <Container className="mt-4">
        <Navbar collapseOnSelect expand="lg"  variant="white">
  <Navbar.Brand href="#home">
    <img src="img/logo.png" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="custom-nav">
    
      <Nav.Link href="#features">Buy/Sale Crypto</Nav.Link>
      <Nav.Link href="#pricing">Rates</Nav.Link>
      <Nav.Link href="#pricing">Affiliate</Nav.Link>
      <Nav.Link href="#pricing">Contact us</Nav.Link>
      <div className="signup">

      <Nav.Link className=" text-light"  href="#pricing">Sign up <HiOutlineArrowNarrowRight className="text-light" /></Nav.Link>
      
      </div>
      
    </Nav>

  </Navbar.Collapse>
</Navbar>
<hr/>
  </Container>
        
     
      </>
    )
}
export default NavegationBar;
