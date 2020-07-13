import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

function NavB() {


  return (

    <Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">
  <img
    alt=""
    src=""
    width="30"
    height="30"
    className="d-inline-block align-top"
  />{' '}
BLOGNAME!!!
</Navbar.Brand>
        <Nav className="ml-auto navbar ">
      <Nav.Link className="navitems" href="/">Home</Nav.Link>
      <Nav.Link className="navitems" href="/about">About</Nav.Link>
      <Nav.Link className="navitems farright" href="/creater">Creater</Nav.Link>
    </Nav>
      </Navbar>




  );
}

export default NavB;
