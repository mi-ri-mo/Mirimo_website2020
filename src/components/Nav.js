import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <div className="nav">
                <div>
                    <NavLink exact to="/">로고</NavLink>
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