import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header(props) {
    const { cart } = props;

    const navStyle = {
        color: 'white',
    };

    const itemsInCartAmount = Object.keys(cart).length;

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
                <li>{`Cart (${itemsInCartAmount})`}</li>
            </ul>
        </nav>
    );
}

export default Header;
