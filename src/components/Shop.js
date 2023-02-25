import React from 'react';
import ItemCard from './ItemCard';
import '../styles/Shop.css';

function Shop(props) {
    const { shopItems, handleAddToCart } = props;

    return (
        <div className="shop-container">
            <h1 className="shop-title">Shop</h1>
            <div className="item-grid">
                {shopItems.map((item) => (
                    <ItemCard
                        key={item.id}
                        name={item.name}
                        alias={item.alias}
                        id={item.id}
                        image={item.image}
                        cost={item.cost}
                        brand={item.brand}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shop;
