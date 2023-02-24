import React from 'react';
import ItemCard from './ItemCard';
import '../styles/Shop.css';

import spb123j1 from '../assets/images/SPB123J1.png';
import spb155j1 from '../assets/images/SPB155J1.png';
import spb249j1 from '../assets/images/SPB249J1.png';
import murph from '../assets/images/khaki-field-murph.webp';
import coop from '../assets/images/pilot-day-date.webp';

function Shop() {
    const items = [
        {
            name: 'Prospex Land SPB123',
            alias: 'Alpinist',
            id: 'SPB123J1',
            image: spb123j1,
            cost: 725,
            brand: 'Seiko',
        },
        {
            name: 'Prospex Land SPB155',
            alias: 'Baby Alpinist',
            id: 'SPB155J1',
            image: spb155j1,
            cost: 725,
            brand: 'Seiko',
        },
        {
            name: 'Prospex Land SPB249',
            alias: 'Alpinist 1959 Deep Lake',
            id: 'SPB249J1',
            image: spb249j1,
            cost: 750,
            brand: 'Seiko',
        },
        {
            name: 'Khaki Field Auto 38mm',
            alias: 'Murph',
            id: 'H70405730',
            image: murph,
            cost: 895,
            brand: 'Hamilton',
        },
        {
            name: 'Khaki Pilot Day-Date',
            alias: 'Coop',
            id: 'H64615135',
            image: coop,
            cost: 995,
            brand: 'Hamilton',
        },
    ];

    return (
        <div className="shop-container">
            <h1 className="shop-title">Shop</h1>
            <div className="item-grid">
                {items.map((item) => (
                    <ItemCard
                        key={item.id}
                        name={item.name}
                        alias={item.alias}
                        id={item.id}
                        image={item.image}
                        cost={item.cost}
                        brand={item.brand}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shop;
