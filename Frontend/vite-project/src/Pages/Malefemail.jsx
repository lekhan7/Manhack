import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const MaleFemale = () => {
  const [data, setData] = useState([
    { country: 'Brunei', male2018: 100, male2019: 120, male2020: 150, female2018: 80, female2019: 100, female2020: 120 },
    { country: 'Cambodia', male2018: 120, male2019: 150, male2020: 180, female2018: 100, female2019: 120, female2020: 150 },
    { country: 'East Timor', male2018: 150, male2019: 180, male2020: 200, female2018: 120, female2019: 150, female2020: 180 },
    { country: 'Indonesia', male2018: 180, male2019: 200, male2020: 220, female2018: 150, female2019: 180, female2020: 200 },
    { country: 'Laos', male2018: 200, male2019: 220, male2020: 240, female2018: 180, female2019: 200, female2020: 220 },
    { country: 'Malaysia', male2018: 220, male2019: 240, male2020: 260, female2018: 200, female2019: 220, female2020: 240 },
    { country: 'Myanmar', male2018: 240, male2019: 260, male2020: 280, female2018: 220, female2019: 240, female2020: 260 },
    { country: 'Philippines', male2018: 260, male2019: 280, male2020: 300, female2018: 240, female2019: 260, female2020: 280 },
    { country: 'Singapore', male2018: 280, male2019: 300, male2020: 320, female2018: 260, female2019: 280, female2020: 300 },
    { country: 'Thailand', male2018: 300, male2019: 320, male2020: 340, female2018: 280, female2019: 300, female2020: 320 },
    { country: 'Vietnam', male2018: 320, male2019: 340, male2020: 360, female2018: 300, female2019: 320, female2020: 340 },
  ]);

  return (
    <div>
      <h2>Male and Female Affected by Disease in South East Asian Countries</h2>
      <BarChart
        width={800}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="male2018" fill="#8884d8" />
        <Bar dataKey="male2019" fill="#82ca9d" />
        <Bar dataKey="male2020" fill="#8bc34a" />
        <Bar dataKey="female2018" fill="#ff69b4" />
        <Bar dataKey="female2019" fill="#ff99cc" />
        <Bar dataKey="female2020" fill="#ffc5c5" />
      </BarChart>
    </div>
  );
};

export default MaleFemale;