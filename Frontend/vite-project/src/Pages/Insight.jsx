import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ZAxis } from 'recharts';

function Insight() {
  const [selectedDisease, setSelectedDisease] = useState('Malaria');
  const data = [
    { name: "Brunei", disease: "Malaria", percentage: "20%" },
    { name: "Cambodia", disease: "Dengue", percentage: "15%" },
    { name: "East Timor", disease: "Chikungunya", percentage: "25%" },
    { name: "Indonesia", disease: "Malaria", percentage: "30%" },
    { name: "Laos", disease: "Dengue", percentage: "25%" },
    { name: "Malaysia", disease: "Malaria", percentage: "30%" },
    { name: "Myanmar", disease: "Dengue", percentage: "20%" },
    { name: "Philippines", disease: "Chikungunya", percentage: "10%" },
    { name: "Singapore", disease: "Malaria", percentage: "25%" },
    { name: "Thailand", disease: "Dengue", percentage: "20%" },
    { name: "Vietnam", disease: "Chikungunya", percentage: "15%" },
  ];

  const filteredData = data.filter((item) => item.disease === selectedDisease);

  return (
    <div>
      <h1>GRAPH PAGE</h1>
      <select value={selectedDisease} onChange={(e) => setSelectedDisease(e.target.value)}>
        <option value="Malaria">Malaria</option>
        <option value="Dengue">Dengue</option>
        <option value="Chikungunya">Chikungunya</option>
      </select>
      <BarChart width={500} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="percentage" />
        <Tooltip />
        <Bar dataKey="percentage" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default Insight;