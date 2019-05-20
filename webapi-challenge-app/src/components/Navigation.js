import React from "react";
import { NavLink } from 'react-router-dom';

import "../styles/navigation.css";

function Navigation(props) {
    return (
        <div className="navigation-wrapper">
            <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
            <NavLink to="/actions" activeClassName="active-link">Actions</NavLink>
        </div>
    );
}

export default Navigation;