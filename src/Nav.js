import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

function NavB() {


  return (
   <nav class="navbar navbar-light">
   <h3 class="nav-logo">Logo   </h3>
   <ul class="nav-links">
        <Link to='/'><li>Home</li></Link>
       <Link to='/about'><li>About</li></Link>
       <Link to='/creater'>  <li>Creater</li></Link>
   </ul>
    </nav>
  );
}

export default NavB;
