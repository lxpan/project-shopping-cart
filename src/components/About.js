import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p>
                &quot;Watch&quot; was created using React to showcase a simple store with the
                ability to add items to a shopping cart.
            </p>
            <h2>Attributions</h2>
            <ul>
                <li>
                    <a href="https://unsplash.com/photos/4cczA2THGt0">
                        &quot;Snow covered mountain&quot;
                    </a>{' '}
                    by&nbsp;
                    <a href="https://unsplash.com/@markusspiske">Markus Spiske</a> is licensed
                    by&nbsp;
                    <a href="https://unsplash.com/license">Unsplash</a>
                </li>
                <li>
                    <a href="https://unsplash.com/photos/jFCViYFYcus">&quot;Forest trees&quot;</a>{' '}
                    by&nbsp;
                    <a href="https://unsplash.com/@szmigieldesign">Lukasz Szmigiel</a> is licensed
                    by&nbsp;
                    <a href="https://unsplash.com/license">Unsplash</a>
                </li>
                <li>
                    <a href="https://unsplash.com/photos/9CjgeMAM2SI">
                        &quot;Body of water between green trees under clear blue sky&quot;
                    </a>{' '}
                    by&nbsp;
                    <a href="https://unsplash.com/@yoal_desurmont">Yoal Desurmont</a> is licensed
                    by&nbsp;
                    <a href="https://unsplash.com/license">Unsplash</a>
                </li>
            </ul>
            <b>All watch images are used under Fair Use for educational purposes.</b>
        </div>
    );
}

export default About;
