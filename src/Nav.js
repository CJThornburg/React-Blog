import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

    
  return (
   <nav>
   <h3 className="nav-logo">Logo   </h3>
   <ul className="nav-links">
        <Link to='/'><li>Home</li></Link>
       <Link to='/about'><li>About</li></Link>
       <Link to='/creater'>  <li>Creater</li></Link>
   </ul>
    </nav>
  );
}

export default Nav;
