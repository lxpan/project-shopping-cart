import React, { useState } from 'react';
import '../styles/ItemCard.css';

function ItemCard(props) {
    const {
        name, alias, id, image, cost, brand, handleAddToCart,
    } = props;

    const [isMouseOver, setIsMouseOver] = useState(false);
    const [itemOrderQty, setItemOrderQty] = useState(1);

    const incrementOrder = () => setItemOrderQty(itemOrderQty + 1);
    const decrementOrder = () => {
        // only decrement if over 0 items
        if (itemOrderQty > 0) {
            setItemOrderQty(itemOrderQty - 1);
        }
    };

    const handleQtyChange = (e) => {
        console.log(e.currentTarget.value);
        setItemOrderQty(e.currentTarget.value);
    };

    const addToCartDiv = () => (
        <div className="item-card-controls-container">
            <div className="increment-item-qty">
                <button onClick={decrementOrder}>-</button>
                <input onChange={handleQtyChange} type="text" value={itemOrderQty} />
                <button onClick={incrementOrder}>+</button>
            </div>
            <button onClick={() => handleAddToCart(id, itemOrderQty)} className="add-cart-btn">
                Add to Cart
            </button>
        </div>
    );

    return (
        <div
            className="item-card-container"
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
        >
            <div className="item-image">
                <img src={image} alt="" srcSet="" />
            </div>
            <div className="item-brand">{brand.toUpperCase()}</div>
            <div className="item-alias">
                <em>{alias}</em>
            </div>
            <div className="item-name">{name}</div>
            <div className="item-cost">${cost}</div>
            {isMouseOver ? addToCartDiv() : null}
        </div>
    );
}

export default ItemCard;
