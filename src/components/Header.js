import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import '../styles/Header.css';

function Header(props) {
    const { cart, handleAddToCart, deleteCartItem } = props;

    const navStyle = {
        color: 'white',
    };

    const itemsInCartAmount = Object.keys(cart).length;

    return (
        <nav>
            <div className="header-heading-group">
                <div className="header-heading">WATCH</div>
            </div>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>

                <Link style={navStyle} to="shop">
                    <li>Shop</li>
                </Link>
                <li>
                    <div className="cart-trigger">
                        {`Cart (${itemsInCartAmount})`}
                        <ShoppingCart
                            cart={cart}
                            handleAddToCart={handleAddToCart}
                            deleteCartItem={deleteCartItem}
                        />
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
