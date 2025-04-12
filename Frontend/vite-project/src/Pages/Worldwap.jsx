import React, { useState, useEffect } from 'react';
import"../allcss/world.css"
function Worldmap() {
  const [center, setCenter] = useState('37.7749,-122.4194'); // San Francisco, CA
  const [zoom, setZoom] = useState(12);
  const [size, setSize] = useState('400x400');
  const [mapType, setMapType] = useState('roadmap');
  const [markers, setMarkers] = useState([]);
  const apiKey = 'YOUR_ACTUAL_API_KEY_HERE'; // Replace with your actual API key

  const handleCenterChange = (event) => {
    setCenter(event.target.value);
  };

  const handleZoomChange = (event) => {
    setZoom(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleMapTypeChange = (event) => {
    setMapType(event.target.value);
  };

  const handleMarkerAdd = () => {
    const newMarker = {
      color: 'blue',
      label: 'S',
      location: center,
    };
    setMarkers([...markers, newMarker]);
  };

  let mapUrl = `https://api.maptiler.com/maps/topo-v2/tiles.json?key=63tdhgkZ7TIuIVDYCaOx`;

  markers.forEach((marker, index) => {
    mapUrl += `&markers=color:${marker.color}%7Clabel:${marker.label}%7C${marker.location}`;
  });

  useEffect(() => {
    console.log(mapUrl);
  }, [mapUrl]);

  return (
    <div className='main'>
      <input  className='inputs' type="text" value={center} onChange={handleCenterChange} placeholder="Center" />
      <input  className='inputs' type="number" value={zoom} onChange={handleZoomChange} placeholder="Zoom" />
      <input  className='inputs' type="text" value={size} onChange={handleSizeChange} placeholder="Size" />
    
      <button onClick={handleMarkerAdd}>Add Marker</button><br />
      <img src={mapUrl} alt="Map" style={{ width: '100%', height: '600px' }} />

    </div>
  );
}

export default Worldmap;