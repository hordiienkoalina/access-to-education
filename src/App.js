import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Map from './components/Map';
import Footer from './components/Footer';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Popup from './components/Popup';
import './App.css';

const App = () => {
  const { t, i18n } = useTranslation();
  const [selectedLayer, setSelectedLayer] = useState('Access-Quality');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleLayerChange = (layer) => {
    setSelectedLayer(layer);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const layerDescriptions = {
    'Access': t('layerDescriptions.Access'),
    'Quality': t('layerDescriptions.Quality'),
    'Access-Quality': t('layerDescriptions.AccessQuality'),
    'Income': t('layerDescriptions.Income'),
    'Gender': t('layerDescriptions.Gender'),
    'Race': t('layerDescriptions.Race'),
  };

  useEffect(() => {
    if (!localStorage.getItem('popupClosed')) {
      setIsPopupVisible(true);
    }
  }, []);


  useEffect(() => {
    const browserLanguage = i18n.language; // The detected language
    console.log("Detected language: ", browserLanguage); // This will log the detected language (for debug purposes)
  }, [i18n.language]);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Subheader 
          title={t(selectedLayer)} 
          description={layerDescriptions[selectedLayer] || t('noDescriptionAvailable')} 
        />
        <div className="map-container">
          <Map onLayerChange={handleLayerChange} />
        </div>
      </div>
      <Footer />
      {isPopupVisible && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default App;
