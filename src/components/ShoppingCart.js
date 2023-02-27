import React, { useEffect } from 'react';
import '../styles/ShoppingCart.css';

function ShoppingCart(props) {
    const { cart, handleAddToCart, deleteCartItem } = props;

    /* Set the width of the side navigation to 250px */
    function openNav() {
        document.getElementById('mySidenav').style.width = '600px';
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }

    // useEffect(() => {
    //     const parse = JSON.stringify(cart);
    //     console.log(parse);
    //     // console.log(cart);
    // }, [cart]);

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
                        <div className="cart-item-name">{info.name}</div>
                        <div className="cart-item-qty-controls">
                            <button
                                onClick={() => handleAddToCart(
                                    id,
                                    value.quantity > 0 ?
                                        parseInt(value.quantity, 10) - 1 :
                                        value.quantity,
                                    true,
                                )
                                }
                            >
                                -
                            </button>
                            <input type="text" value={`Qty: ${value.quantity}`} readOnly />
                            <button
                                onClick={() => handleAddToCart(id, parseInt(value.quantity, 10) + 1, true)
                                }
                                className="button"
                            >
                                +
                            </button>
                            <button
                                className="cart-item-delete-btn"
                                onClick={() => deleteCartItem(id)}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                    <div className="cart-item-cost">${info.cost}</div>
                    <div className="cart-item-subtotal">
                        Subtotal: ${info.cost * value.quantity}
                    </div>
                </div>
            );

            cartItems.push(item);
        });

        return cartItems;
    };

    const getGrandTotalCost = () => {
        const cartItems = Object.values(cart);
        const grandTotal =
            cartItems.length > 0 ?
                cartItems.reduce(
                    (acc, current) => acc + current.quantity * current.itemInfo.cost,
                    0,
                ) :
                0;
        return grandTotal;
    };

    return (
        <div className="shopping-cart-container">
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>
                    &times;
                </a>
                <div className="shopping-cart-items">{myCart()}</div>
                <div className="shopping-cart-total-costs">Grand total: ${getGrandTotalCost()}</div>
            </div>
            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>
                &#9776;
            </span>
        </div>
    );
}

export default ShoppingCart;
