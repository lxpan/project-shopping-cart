import React from 'react';
import '../styles/ShoppingCart.css';

function ShoppingCart(props) {
    const { cart } = props;

    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById('mySidenav').style.width = '600px';
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }

    const myCart = () => {
        const cartItems = [];

        Object.entries(cart).forEach(([id, value]) => {
            const info = value.itemInfo;
            const item = (
                <div key={id} className="cart-item-container">
                    <div className="cart-item-image">
                        <img src={info.image} alt="" />
                    </div>
                    <div className="cart-item-details">
                        <div className="cart-item-brand">{info.brand}</div>
                        <div className="cart-item-name">{info.name}</div>
                        <div className="cart-item-id">{id}</div>
                        <div className="cart-item-cost">${info.cost}</div>
                    </div>
                </div>
            );

            cartItems.push(item);
        });

        return cartItems;
    };

    return (
        <div className="shopping-cart-container">
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>
                    &times;
                </a>
                <div className="shopping-cart-items">{myCart()}</div>
            </div>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
                &#9776;
            </span>
        </div>
    );
}

export default ShoppingCart;
