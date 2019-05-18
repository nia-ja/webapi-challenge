import React from "react";
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <div className="home-page-wrapper">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/actions">Actions</NavLink>
        </div>
    );
}

export default Navigation;