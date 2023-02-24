import React from 'react';
import '../styles/Header.css';

import { Link, Router } from 'react-router-dom';

function Header() {
    const navStyle = {
        color: 'white',
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>

                <Link style={navStyle} to="shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Header;
