import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { waitFor, render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import ShoppingCart from '../ShoppingCart';
import explorerImg from '../../assets/images/rolex-explorer.png';

export default function App(props) {
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
            quantity: 2,
        },
        SPB123J1: {
            itemInfo: {
                name: 'Prospex Land SPB123',
                alias: 'Alpinist',
                id: 'SPB123J1',
                image: '/static/media/SPB123J1.2fb7d684eade23450d61.png',
                cost: 725,
                brand: 'Seiko',
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

        // console.log(cart);
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
        const itemQty = screen.getAllByDisplayValue('Qty: 2')[0];
        const image = screen.getAllByRole('img')[0];

        expect(itemName.textContent).toBe('OYSTER PERPETUAL EXPLORER');
        expect(itemCost.textContent).toBe('$10200');
        expect(itemQty.value).toBe('Qty: 2');
        expect(image).toHaveAttribute('src', 'rolex-explorer.png');
    });
});

describe('Test increment and decrement buttons', () => {
    let counter;
    let incrementBtn;
    let decrementBtn;

    beforeEach(async () => {
        render(<App />);
        counter = await waitFor(() => screen.getAllByRole('textbox')[0]);
        incrementBtn = await waitFor(() => screen.getAllByText('+')[0]);
        decrementBtn = await waitFor(() => screen.getAllByText('-')[0]);
    });

    test('Quantity is incremented on increment button click', async () => {
        act(() => UserEvent.click(incrementBtn));

        expect(counter.value).toEqual('Qty: 3'); // 2 -> 3
    });

    test('Quantity is decremented on decrement button click', async () => {
        act(() => UserEvent.click(decrementBtn)); // 2 -> 1

        expect(counter.value).toEqual('Qty: 1');
    });

    test('Decrement button does not cause quantity to go below zero', async () => {
        act(() => UserEvent.click(decrementBtn)); // 2 -> 1
        act(() => UserEvent.click(decrementBtn)); // 1 -> 0
        act(() => UserEvent.click(decrementBtn)); // 0

        expect(counter.value).toEqual('Qty: 0');
    });
});

describe('Test calculation of subtotal and grand total costs', () => {
    beforeEach(() => {
        render(<App />);
    });

    test('Calculate subtotal costs of single item', () => {
        const subTotal = screen.getAllByText(/Subtotal/)[0];
        // const grandTotal = screen.getByText(/Grand total/);

        expect(subTotal.textContent).toBe('Subtotal: $20400');
        // expect(grandTotal.textContent).toBe('Grand total: $20400');
    });

    test('Calculate grand total with multiple items in cart', () => {
        const subTotals = screen.getAllByText(/Subtotal/);
        const firstSubTotal = subTotals[0];
        const secondSubtotal = subTotals[1];

        expect(firstSubTotal.textContent).toBe('Subtotal: $20400');
        expect(secondSubtotal.textContent).toBe('Subtotal: $725');

        const grandTotal = screen.getByText(/Grand total/);
        expect(grandTotal.textContent).toBe('Grand total: $21125');
    });
});
