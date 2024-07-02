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
    'Access': 'Spatial access to public high-schools. Access is calculated considering supply and demand of schools, and family preferences around school distance and quality.',
    'Quality': 'Average school quality measured by the IDEB, weighed by the access between the school and each student.',
    'Access-Quality': 'A combination of school quality and spatial access, measuring the relative access to quality education.',
    'Income': 'Average monthly hoursehold earnings in dollars.',
    'Gender': 'Percentage of the population that is male.',
    'Race': 'The majority race.',
  };

  return (
    <div className="App">
      {/* Header component */}
      <Header />

      {/* Main content area */}
      <div className="content">
        {/* Subheader with dynamic title and description based on selected layer */}
        <Subheader 
          title={`${selectedLayer}`} 
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