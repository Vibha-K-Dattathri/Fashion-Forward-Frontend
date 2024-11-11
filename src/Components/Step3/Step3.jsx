import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step3.css';
import stepImage from '../Assets/Step1.png'; // Adjust path to your combined image

const StepOne = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
      navigate('/style-your-outfit');
  };
  return (
    <div className="step-one-container">
      <div className="step-content">
        <div className="step-number">3.</div>
        <h2>Decode your personal DNA with a simple selfie to build your Style Formula</h2>
        <p>
          Discover your color palette, style guide, and tips to enhance your beauty.
        </p>
        <button className="join-now-button" onClick={handleButtonClick}>
          Join now →
        </button>
      </div>
      <div className="step-image">
        <img src={stepImage} alt="Style DNA Step One" />
      </div>
    </div>
  );
};

export default StepOne;
