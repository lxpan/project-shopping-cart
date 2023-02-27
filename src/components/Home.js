import React from 'react';
import '../styles/Home.css';

import backgroundLeft from '../assets/backgrounds/markus-spiske.jpg';
import backgroundMiddle from '../assets/backgrounds/woodland.jpg';
import backgroundRight from '../assets/backgrounds/blue-lake.jpg';
import watchLeft from '../assets/images/SPB123J1.png';
import watchMiddle from '../assets/images/SPB155J1.png';
import watchRight from '../assets/images/SPB249J1.png';

const style = {
    left: {
        backgroundImage: `url(${backgroundLeft})`,
        backgroundSize: 'cover',
    },
    middle: {
        backgroundImage: `url(${backgroundMiddle})`,
        backgroundSize: 'cover',
    },
    right: {
        backgroundImage: `url(${backgroundRight})`,
        backgroundSize: 'cover',
    },
};

function Home() {
    return (
        <div className="home-container">
            <div className="home-title">
                <h1>The Alpine Collection</h1>
            </div>
            <div className="home-left" style={style.left}>
                <img src={watchLeft} alt="" srcSet="" />
                <div className="attribution">Photo by Markus Spiske</div>
            </div>
            <div className="home-middle" style={style.middle}>
                <img src={watchMiddle} alt="" srcSet="" />
                <div className="attribution">Photo by Lukasz Szmigiel</div>
            </div>
            <div className="home-right" style={style.right}>
                <img src={watchRight} alt="" srcSet="" />
                <div className="attribution">Photo by Yoal Desurmont</div>
            </div>
        </div>
    );
}

export default Home;
