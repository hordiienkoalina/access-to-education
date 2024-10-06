import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
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
        <h2 style={{ marginBottom: 20}}>Welcome to Atlas Educação</h2>

        <p> The Atlas Educação uses the Brazilian Demographic Census and the School Census 
          to highlight which areas have inadequate access to public secondary education. 
          Use the map to explore every neighborhood in Brazil to see which have the most 
          and the least access to high-quality public high schools.</p>

          <p style={{ marginTop: '0'}}> <b> Each dot represents the likely location of a group of 10 children in high-school age </b>
            based on the 2010 Brazilian Census. Schools are not shown on the map, but their location
            was used to calculate the supply of high-school seats for each student in their area. 
            All variables (except income and gender) are scaled to each state because most public high-schools in Brazil
            are managed by state-level institutions and policies. 
            See full explanation in the Methodology section. </p>
          
        <div>
          <input
            type="checkbox"
            id="dont-show-again"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="dont-show-again">Don't show this again</label>
        </div>
      </div>
    </div>
  );
};

export default Popup;
