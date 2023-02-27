import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { waitFor, render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import ShoppingCart from '../ShoppingCart';
import explorerImg from '../../assets/images/rolex-explorer.png';

export default function App() {
    const [cart, setCart] = useState({
        124270: {
            itemInfo: {
                name: 'OYSTER PERPETUAL EXPLORER',
                alias: 'Explorer',
                id: '124270',
                image: explorerImg,
                cost: 10200,
                brand: 'Rolex',
            },
            quantity: 1,
        },
    });

    const handleAddToCart = (itemId, quantity, fromCart = false) => {
        const myCart = { ...cart };

        if (fromCart) {
            myCart[itemId].quantity = quantity;
        }

        setCart(myCart);

        console.log(cart);
    };

    return <ShoppingCart cart={cart} handleAddToCart={handleAddToCart} />;
}
