import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation(); // Initialize translation hook

    // Function to handle language change
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Change language
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1>{t('header.title')}</h1> {/* Translate header title */}
                <div className="language-buttons">
                    <button onClick={() => changeLanguage('en')} className="lang-button">
                        EN
                    </button>
                    |
                    <button onClick={() => changeLanguage('pt')} className="lang-button">
                        PT
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
