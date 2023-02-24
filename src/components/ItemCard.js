import React from 'react';
import '../styles/ItemCard.css';

function ItemCard(props) {
    const {
        name, alias, image, cost, brand,
    } = props;

    return (
        <div className="item-card-container">
            <div className="item-image">
                <img src={image} alt="" srcSet="" />
            </div>
            <div className="item-brand">{brand.toUpperCase()}</div>
            <div className="item-alias">
                <em>{alias}</em>
            </div>
            <div className="item-name">{name}</div>
            <div className="item-cost">${cost}</div>
            <div className="add-cart-btn-container">
                <button className="add-cart-btn">Add to Cart</button>
            </div>
        </div>
    );
}

export default ItemCard;
