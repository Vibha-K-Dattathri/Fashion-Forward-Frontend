// Header2.js
import React from 'react';
import './Header2.css';

const Header2 = () => {
    return (
        <header className="header">
            <h1 className="header-title">Style Your Outfit</h1>
            <p className="header-description">
                Upload an image of your outfit and let our advanced technology analyze the colors in your clothing.
                Discover perfect matching color combinations that elevate your style and create harmonious looks effortlessly.
                Experience a personalized fashion guide that complements your wardrobe.
            </p>
            <button className="header-button">Try Now</button>
        </header>
    );
};

export default Header2;