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

describe('Shopping cart renders cart items', () => {
    test('Cart items are shown in shopping cart', () => {
        // const mockCallback = jest.fn();
        // render(<ShoppingCart cart={cart} handleAddToCart={mockCallback} />);
        render(<App />);

        const itemName = screen.getByText('OYSTER PERPETUAL EXPLORER');
        const itemCost = screen.getByText('$10200');
        const itemQty = screen.getByDisplayValue('Qty: 1');
        const image = screen.getByRole('img');

        expect(itemName.textContent).toBe('OYSTER PERPETUAL EXPLORER');
        expect(itemCost.textContent).toBe('$10200');
        expect(itemQty.value).toBe('Qty: 1');
        expect(image).toHaveAttribute('src', 'rolex-explorer.png');
    });
});

describe('Testing increment and decrement buttons', () => {
    let counter;
    let incrementBtn;
    let decrementBtn;

    beforeEach(async () => {
        render(<App />);
        counter = await waitFor(() => screen.getByRole('textbox'));
        incrementBtn = await waitFor(() => screen.getByText('+'));
        decrementBtn = await waitFor(() => screen.getByText('-'));
    });

    test('Quantity is incremented on increment button click', async () => {
        act(() => UserEvent.click(incrementBtn));

        expect(counter.value).toEqual('Qty: 2');
    });

    test('Quantity is decremented on decrement button click', async () => {
        act(() => UserEvent.click(incrementBtn)); // 1 -> 2
        act(() => UserEvent.click(decrementBtn)); // 2 -> 1

        expect(counter.value).toEqual('Qty: 1');
    });

    test('Decrement button does not cause quantity to go below zero', async () => {
        act(() => UserEvent.click(decrementBtn)); // 1 -> 0
        act(() => UserEvent.click(decrementBtn)); // 0

        expect(counter.value).toEqual('Qty: 0');
    });
});
