import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';

const Nav = () => {
    return(
        <div>
            <div className="nav container">
                <div>
                    <NavLink exact to="/">mirimo</NavLink>
                </div>
                <div>
                    <NavLink exact to="/">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/project">Project</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav;