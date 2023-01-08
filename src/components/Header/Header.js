import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="home">Home</NavLink>
            <NavLink to="order">Order</NavLink>
            <NavLink to="about">About</NavLink>
        </div>
    );
};

export default Header;