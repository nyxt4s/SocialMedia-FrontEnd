import { NavLink } from 'react-router-dom';
import React from 'react';
import './NavBarStyle.css' ;

function NavBar () {

  return (
    <>
      <div >
          <nav className="navbar">
            <div className="nav-container ">
              {/* espacio para el logo */}
              <NavLink exact to="/Home" activeClassName="active" className="nav-logo">Home</NavLink>
                <ul className="nav-menu" >
                  <li className="nav-item">
                     <NavLink exact to="/Login" activeClassName="active" className="nav-links">Login</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink exact to="/Contact" activeClassName="active" className="nav-links">Contact</NavLink>
                  </li>
                </ul>
            </div>
          </nav>
      </div>
    </>
  );
}

export default NavBar;