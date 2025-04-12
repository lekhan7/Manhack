import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';
const data = [
  { country: 'Brunei', ageGroup: '0-5', affected: 100 },
  { country: 'Brunei', ageGroup: '6-15', affected: 200 },
  { country: 'Brunei', ageGroup: '16-25', affected: 300 },
  { country: 'Brunei', ageGroup: '26-35', affected: 400 },
  { country: 'Brunei', ageGroup: '36-45', affected: 500 },
  { country: 'Brunei', ageGroup: '46-55', affected: 600 },
  { country: 'Brunei', ageGroup: '56-60', affected: 700 },
  { country: 'Cambodia', ageGroup: '0-5', affected: 150 },
  { country: 'Cambodia', ageGroup: '6-15', affected: 250 },
  { country: 'Cambodia', ageGroup: '16-25', affected: 350 },
  { country: 'Cambodia', ageGroup: '26-35', affected: 450 },
  { country: 'Cambodia', ageGroup: '36-45', affected: 550 },
  { country: 'Cambodia', ageGroup: '46-55', affected: 650 },
  { country: 'Cambodia', ageGroup: '56-60', affected: 750 },
  { country: 'East Timor', ageGroup: '0-5', affected: 200 },
  { country: 'East Timor', ageGroup: '6-15', affected: 300 },
  { country: 'East Timor', ageGroup: '16-25', affected: 400 },
  { country: 'East Timor', ageGroup: '26-35', affected: 500 },
  { country: 'East Timor', ageGroup: '36-45', affected: 600 },
  { country: 'East Timor', ageGroup: '46-55', affected: 700 },
  { country: 'East Timor', ageGroup: '56-60', affected: 800 },
  { country: 'Indonesia', ageGroup: '0-5', affected: 300 },
  { country: 'Indonesia', ageGroup: '6-15', affected: 400 },
  { country: 'Indonesia', ageGroup: '16-25', affected: 500 },
  { country: 'Indonesia', ageGroup: '26-35', affected: 600 },
  { country: 'Indonesia', ageGroup: '36-45', affected: 700 },
  { country: 'Indonesia', ageGroup: '46-55', affected: 800 },
  { country: 'Indonesia', ageGroup: '56-60', affected: 900 },
  { country: 'Laos', ageGroup: '0-5', affected: 250 },
  { country: 'Laos', ageGroup: '6-15', affected: 350 },
  { country: 'Laos', ageGroup: '16-25', affected: 450 },
  { country: 'Laos', ageGroup: '26-35', affected: 550 },
  { country: 'Laos', ageGroup: '36-45', affected: 650 },
  { country: 'Laos', ageGroup: '46-55', affected: 750 },
  { country: 'Laos', ageGroup: '56-60', affected: 850 },
  { country: 'Malaysia', ageGroup: '0-5', affected: 350 },
  { country: 'Malaysia', ageGroup: '6-15', affected: 450 },
  { country: 'Malaysia', ageGroup: '16-25', affected: 550 },
  { country: 'Malaysia', ageGroup: '26-35', affected: 650 },
  { country: 'Malaysia', ageGroup: '36-45', affected: 750 },
  { country: 'Malaysia', ageGroup: '46-55', affected: 850 },
  { country: 'Malaysia', ageGroup: '56-60', affected: 950 },
  { country: 'Myanmar', ageGroup: '0-5', affected: 400 },
  { country: 'Myanmar', ageGroup: '6-15', affected: 500 },
  { country: 'Myanmar', ageGroup: '16-25', affected: 600 },
  { country: 'Myanmar', ageGroup: '26-35', affected: 700 },
  { country: 'Myanmar', ageGroup: '36-45', affected: 800 },
  { country: 'Myanmar', ageGroup: '46-55', affected: 900 },
  { country: 'Myanmar', ageGroup: '56-60', affected: 1000 },
  { country: 'Philippines', ageGroup: '0-5', affected: 450 },
  { country: 'Philippines', ageGroup: '6-15', affected: 550 },
  { country: 'Philippines', ageGroup: '16-25', affected: 650 },
  { country: 'Philippines', ageGroup: '26-35', affected: 750 },
  { country: 'Philippines', ageGroup: '36-45', affected: 850 },
  { country: 'Philippines', ageGroup: '46-55', affected: 950 },
  { country: 'Philippines', ageGroup: '56-60', affected: 1050 },
  { country: 'Singapore', ageGroup: '0-5', affected: 500 },
  { country: 'Singapore', ageGroup: '6-15', affected: 600 },
  { country: 'Singapore', ageGroup: '16-25', affected: 700 },
  { country: 'Singapore', ageGroup: '26-35', affected: 800 },
  { country: 'Singapore', ageGroup: '36-45', affected: 900 },
  { country: 'Singapore', ageGroup: '46-55', affected: 1000 },
  { country: 'Singapore', ageGroup: '56-60', affected: 1100 },
  { country: 'Thailand', ageGroup: '0-5', affected: 550 },
  { country: 'Thailand', ageGroup: '6-15', affected: 650 },
  { country: 'Thailand', ageGroup: '16-25', affected: 750 },
  { country: 'Thailand', ageGroup: '26-35', affected: 850 },
  { country: 'Thailand', ageGroup: '36-45', affected: 950 },
  { country: 'Thailand', ageGroup: '46-55', affected: 1050 },
  { country: 'Thailand', ageGroup: '56-60', affected: 1150 },
  { country: 'Vietnam', ageGroup: '0-5', affected: 600 },
  { country: 'Vietnam', ageGroup: '6-15', affected: 700 },
  { country: 'Vietnam', ageGroup: '16-25', affected: 800 },
  { country: 'Vietnam', ageGroup: '26-35', affected: 900 },
  { country: 'Vietnam', ageGroup: '36-45', affected: 1000 },
  { country: 'Vietnam', ageGroup: '46-55', affected: 1100 },
  { country: 'Vietnam', ageGroup: '56-60', affected: 1200 },
];

const AgeGroupGraph = () => {
  return (
    <>
    <Link className='link' to="/home">HOME</Link>
    <h1>Correlations Between Age Groups and NO Of Affected People</h1>
    <LineChart width={1000} height={600} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="ageGroup" />
      <YAxis dataKey="affected" />
      <Tooltip />
      <Line type="monotone" dataKey="affected" stroke="#8884d8" />
    </LineChart>
    </>
  );
};

export default AgeGroupGraph;