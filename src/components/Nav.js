import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {
  return (
    <div className="nav">
      <div className="cus-container">
        <div className="wrap-nav">
          <div>
            <NavLink exact={true} to="/">
              <div className="nav-logo"></div>
            </NavLink>
          </div>

          <div className="nav-menu">
            <NavLink exact to="/" activeStyle={{color: `#48e3e4`}}>
              About
            </NavLink>
            <NavLink to="/contact" activeStyle={{color: `#48e3e4`}}>
              Contact
            </NavLink>
            <NavLink to="/project" activeStyle={{color: `#48e3e4`}}>
              Project
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
