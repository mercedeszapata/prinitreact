import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

const NavBar=()=>{
    return(<>
     
    <Navbar bg="light" expand="lg" id="contenedorBarra">
      <Container  id="barraNavegacion">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" id="opcionesMenu">INICIO</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown" id="opcionesMenu">
              <NavDropdown.Item href="#action/3.1">ESTAMPITAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                TARJETERÍA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ILUSTRACIONES</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link" id="opcionesMenu">CARRITO</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </>) 
        
}


export default NavBar