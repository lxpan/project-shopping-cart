import React from 'react';
import { act } from 'react-dom/test-utils';
import { waitFor, render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';

import ItemCard from '../ItemCard';
import shopItems from '../../shopItems';

const testItem = shopItems[0];

// const propsObj = Object.entries();

describe('Testing increment and decrement buttons', () => {
    beforeEach(() => {
        render(<ItemCard {...testItem} />);
    });

    test('Quantity is incremented on increment button click', async () => {
        const itemContainer = document.querySelector('.item-card-container');

        act(() => UserEvent.hover(itemContainer));

        const counter = await waitFor(() => screen.getByRole('textbox'));
        const incrementBtn = await waitFor(() => screen.getByText('+'));

        act(() => UserEvent.click(incrementBtn));
        act(() => UserEvent.click(incrementBtn));

        expect(counter.value).toEqual('3');
    });

    test('Quantity is decremented on decrement button click', async () => {
        const itemContainer = document.querySelector('.item-card-container');

        act(() => UserEvent.hover(itemContainer));

        const counter = await waitFor(() => screen.getByRole('textbox'));
        const incrementBtn = await waitFor(() => screen.getByText('+'));
        const decrementBtn = await waitFor(() => screen.getByText('-'));

        act(() => UserEvent.click(incrementBtn));
        act(() => UserEvent.click(incrementBtn));
        act(() => UserEvent.click(decrementBtn));

        expect(counter.value).toEqual('2');
    });

    test('Decrement button does not cause quantity to go below zero', async () => {
        const itemContainer = document.querySelector('.item-card-container');

        act(() => UserEvent.hover(itemContainer));

        const counter = await waitFor(() => screen.getByRole('textbox'));
        const decrementBtn = await waitFor(() => screen.getByText('-'));

        act(() => UserEvent.click(decrementBtn));

        expect(counter.value).toEqual('0');
    });
});

describe('Testing add to cart button', () => {
    test('Callback is called on "Add to Cart" button click', async () => {
        const onClickMock = jest.fn();
        const itemCardComponent = (
            <ItemCard
                key={testItem.id}
                name={testItem.name}
                alias={testItem.alias}
                id={testItem.id}
                image={testItem.image}
                cost={testItem.cost}
                brand={testItem.brand}
                handleAddToCart={onClickMock}
            />
        );
        render(itemCardComponent);

        const itemContainer = document.querySelector('.item-card-container');

        act(() => UserEvent.hover(itemContainer));
        // Only on hover can the button be found
        const addToCartBtn = screen.getByText('Add to Cart');

        act(() => UserEvent.click(addToCartBtn));
        expect(onClickMock).toHaveBeenCalled();
    });
});
