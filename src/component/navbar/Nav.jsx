import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

import disneylogo from '../navbar/images/disneylogo.png';

const Nav = () => {
    return (
        <>
            <header className="header">
                <img src={disneylogo} alt="Disney logo" />
                <nav className="nav-links">
                    <ul id='list'>
                        <li><Link to="/disneyplus">DISNEY+</Link></li>
                        <li><Link to="/shop">SHOP</Link></li>
                        <li><Link to="/movies">MOVIES</Link></li>
                        <li><Link to="/shows">SHOWS</Link></li>
                        <li><Link to="/park">PARK</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Nav;
