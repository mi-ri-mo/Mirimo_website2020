import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {
    return(
        <div>
            <div className="nav">
                <div className="nav-wrap">
                    <div>
                        <NavLink exact to="/">
                            <div className="nav-logo"></div>
                        </NavLink>
                    </div>
                    <div className="nav-menu">
                        <NavLink exact to="/">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/project">Project</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;