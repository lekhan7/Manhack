import React, { useState } from 'react'
import "../allcss/alerts.css"
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

function Alert() {
  const [selectedState, setSelectedState] = useState(null);
  const [diseaseWarning, setDiseaseWarning] = useState("");
  const [percentage, setPercentage] = useState("");

  const states = [
    { name: "Brunei", disease: "Malaria", percentage: "20%" },
    { name: "Cambodia", disease: "Dengue", percentage: "15%" },
    { name: "East Timor", disease: "Chikungunya", percentage: "25%" },
  { name: "Indonesia", disease: "Malaria", percentage: "30%" },
    { name: " laos", disease: "Dengue", percentage: "25%" },
     { name: "Malaysia", disease: "Malaria", percentage: "30%" },
    { name: "Myanmar", disease: "Dengue", percentage: "20%" },
    { name: "Philippines", disease: "Chikungunya", percentage: "10%" },
    { name: "Singapore", disease: "Malaria", percentage: "25%" },
    { name: "Thailand", disease: "Dengue", percentage: "20%" },
    { name: "Vietnam", disease: "Chikungunya", percentage: "15%" },
  ];

  const handleStateClick = (state) => {
    setSelectedState(state);
    setDiseaseWarning(state.disease);
    setPercentage(state.percentage);
  };

  return (
    <div> 
        <Link className='link' to="/">HOME</Link>
      <h1 className='alerts'>ALERTS</h1>
      <ul>
        {states.map((state, index) => (
          <li key={index}>
            <h2 onClick={() => handleStateClick(state)}>{state.name}</h2>
            {selectedState && selectedState.name === state.name && (
              <div>
                <p>Disease Warning: {diseaseWarning}</p>
                <p>Percentage: {percentage}</p>
              </div>

             
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alert;