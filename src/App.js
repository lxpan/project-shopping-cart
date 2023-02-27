import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Shop from './components/Shop';
import shopItems from './shopItems';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState({});

    function handleAddToCart(itemId, quantity, fromCart = false) {
        const itemObj = shopItems.filter((item) => item.id === itemId);
        let itemCartObj;

        // check if item already exists in cart
        if (Object.keys(cartItems).includes(itemId) && !fromCart) {
            console.log(`Item: ${itemId} already in cart!`);

            itemCartObj = {
                itemInfo: { ...itemObj[0] },
                quantity: parseInt(cartItems[itemId].quantity, 10) + parseInt(quantity, 10),
            };
        }
        else {
            itemCartObj = {
                itemInfo: { ...itemObj[0] },
                quantity,
            };
        }

        setCartItems({ ...cartItems, [itemId]: itemCartObj });
    }

    function deleteCartItem(itemId) {
        console.log(`deleting item... ${itemId}`);
        const newCart = { ...cartItems };
        delete newCart[itemId];
        setCartItems(newCart);
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <div className="app">
            <BrowserRouter>
                <Header
                    cart={cartItems}
                    handleAddToCart={handleAddToCart}
                    deleteCartItem={deleteCartItem}
                />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route
                        path="/shop"
                        element={<Shop shopItems={shopItems} handleAddToCart={handleAddToCart} />}
                        exact
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
