import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="wrap-nav">
          <div>
            <NavLink exact={true} to="/">
              <div className="nav-logo"></div>
            </NavLink>
          </div>
          <div className="nav-menu">
            <NavLink exact to="/">
              About
            </NavLink>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
            <NavLink to="/project" activeClassName="active">
              Project
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
