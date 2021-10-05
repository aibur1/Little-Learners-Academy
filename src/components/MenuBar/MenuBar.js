import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    // Menubar
    return (
        <nav className=" nav-color p-4">
            <NavLink className="menubar" to="/home">Home</NavLink>
            <NavLink className="menubar" to="/more">Services</NavLink>
            <NavLink className="menubar" to="/about">About</NavLink>
            <NavLink className="menubar" to="/contact">Contact</NavLink>
        </nav>
    );
};

export default MenuBar;