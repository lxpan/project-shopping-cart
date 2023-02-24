import React from 'react';
import '../styles/ItemCard.css';

function ItemCard(props) {
    const {
        name, alias, image, cost, brand,
    } = props;

    return (
        <div className="item-card-container">
            <img src={image} alt="" srcSet="" />
            <div className="item-brand">{brand.toUpperCase()}</div>
            <div className="item-alias">
                <em>{alias}</em>
            </div>
            <div className="item-name">{name}</div>
            <div className="item-cost">${cost}</div>
            <button className="add-cart-btn">Add to Cart</button>
        </div>
    );
}

export default ItemCard;
