import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import i18n translation hook
import './Popup.css';

const Popup = ({ onClose }) => {
  const { t } = useTranslation(); // Initialize translation hook
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleCheckboxChange = (e) => {
    setDontShowAgain(e.target.checked);
  };

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('popupClosed', 'true');
    }
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={handleClose}>&times;</button>
        <h2>{t('popup.welcomeTitle')}</h2> {/* Translation for title */}
        <p>{t('popup.description1')}</p> {/* Translation for first paragraph */}
        <p>{t('popup.description2')}</p> {/* Translation for second paragraph */}
        <div>
          <input
            type="checkbox"
            id="dont-show-again"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="dont-show-again">{t('popup.dontShowAgain')}</label> {/* Translation for checkbox label */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
