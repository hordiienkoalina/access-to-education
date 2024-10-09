import React, { useState } from 'react'; // Import React library and useState hook
import { useTranslation } from 'react-i18next'; // Import i18n translation hook
import './OverlayButtons.css'; // Import CSS for overlay buttons

function OverlayButtons({ onButtonClick, onLayerChange }) {
    const { t } = useTranslation(); // Initialize translation hook
    const [activeButton, setActiveButton] = useState('Access-Quality'); // Initialize state for the active button

    const handleClick = (type) => {
        setActiveButton(type); // Update the active button state
        onButtonClick(type); // Call the onButtonClick function passed as a prop
    };

    return (
    <div className="overlay-buttons">
        <button 
        className={`overlay-button ${activeButton === 'Access-Quality' ? 'active' : ''}`} 
        onClick={() => handleClick('Access-Quality')}
        >
        {t('overlayButtons.accessQuality')} {/* Translate button text */}
        </button>
        <button 
        className={`overlay-button ${activeButton === 'Quality' ? 'active' : ''}`} 
        onClick={() => handleClick('Quality')}
        >
        {t('overlayButtons.quality')}
        </button>
        <button 
        className={`overlay-button ${activeButton === 'Access' ? 'active' : ''}`} 
        onClick={() => handleClick('Access')}
        >
        {t('overlayButtons.access')}
        </button>
        <button 
        className={`overlay-button ${activeButton === 'Income' ? 'active' : ''}`} 
        onClick={() => handleClick('Income')}
        >
        {t('overlayButtons.income')}
        </button>
        <button 
        className={`overlay-button ${activeButton === 'Gender' ? 'active' : ''}`} 
        onClick={() => handleClick('Gender')}
        >
        {t('overlayButtons.gender')}
        </button>
        <button 
        className={`overlay-button ${activeButton === 'Race' ? 'active' : ''}`} 
        onClick={() => handleClick('Race')}
        >
        {t('overlayButtons.race')}
        </button>
    </div>
    );
}

export default OverlayButtons;
