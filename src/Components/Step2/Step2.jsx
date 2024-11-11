import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step2.css'
import StepTwo from '../Assets/Step2.png'; // Replace with the correct path to your image

const Step2 = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/style-your-outfit');
    };

    return (
        <div className="step2-container">
            <div className="step2-image-section">
                <img src={StepTwo} alt="Step 2 - Outfit Ideas" className="step2-image" />
            </div>
            <div className="step2-content">
                <div className="step-number">2.</div>
                <h2>Maximize your Wardrobe</h2>
                <p>
                    Scan your own items to get them paired by occasion or to be inspired by new outfit ideas:
                </p>
                <ul>
                    <li>1) To allow your AI stylist to pair them into outfits for all occasions;</li>
                    <li>2) To be inspired by new outfit ideas.</li>
                </ul>
                <button className="join-now-button" onClick={handleButtonClick}>
                    Join now →
                </button>
            </div>
        </div>
    );
};

export default Step2;
