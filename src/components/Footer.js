import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './Footer.css';

function Footer() {
    const { t } = useTranslation(); // Initialize translation hook

    return (
        <footer className="footer-menu">
            {/* Link to the GitHub repository */}
            <a href="https://github.com/hordiienkoalina/access-to-education" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> {/* GitHub icon */}
            </a>
            <span className="divider">|</span> {/* Divider between links */}

            {/* Link to the Methodology page */}
            <a href="https://drive.google.com/file/d/1XcylVaGVecnlIRGluxcbrwDkYOeJ9owh/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                {t('footer.methodology')}
            </a>
            <span className="divider">|</span> {/* Divider between links */}

            {/* Link to the Data Download */}
            <a href="https://drive.google.com/drive/folders/1mLUgjvGivuuT-pvkGqEP_5QEk8fQOyJq?usp=sharing" target="_blank" rel="noopener noreferrer">
                {t('footer.downloadData')}
            </a>
        </footer>
    );
}

export default Footer;
