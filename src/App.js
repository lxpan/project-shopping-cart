import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Shop from './components/Shop';
import shopItems from './shopItems';
import './App.css';

function App() {
    const [cartItems, setCartItems] = useState({});

    function handleAddToCart(itemId, quantity) {
        const itemObj = shopItems.filter((item) => item.id === itemId);

        const itemCartObj = {
            itemInfo: itemObj,
            quantity,
        };

        setCartItems({ ...cartItems, [itemId]: itemCartObj });
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <div>
            <BrowserRouter>
                <Header cart={cartItems} />
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
