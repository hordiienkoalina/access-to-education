import React, { useState } from 'react';
import Map from './components/Map';
import Footer from './components/Footer';
import Header from './components/Header';
import Subheader from './components/Subheader';
import './App.css';

const App = () => {
  // State to manage the selected map layer
  const [selectedLayer, setSelectedLayer] = useState('Access');

  // Handler for changing the map layer
  const handleLayerChange = (layer) => {
    setSelectedLayer(layer); // Update the selected layer state
  };

  // Descriptions for each layer type
  const layerDescriptions = {
    'Access': 'Description of the Access layer currently being shown.',
    'Quality': 'Description of the Quality layer currently being shown.',
    'Access-Quality': 'Description of the Quality-Adjusted Access layer currently being shown.',
    'Population': 'Description of the Population layer currently being shown.'
  };

  return (
    <div className="App">
      {/* Header component */}
      <Header />

      {/* Main content area */}
      <div className="content">
        {/* Subheader with dynamic title and description based on selected layer */}
        <Subheader 
          title={`Currently Showing: ${selectedLayer}`} 
          description={layerDescriptions[selectedLayer] || 'No description available.'} 
        />

        {/* Container for the map component */}
        <div className="map-container">
          <Map onLayerChange={handleLayerChange} /> {/* Map component with layer change handler */}
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App; // Export the App component as the default export