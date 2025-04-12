import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import AgeGroupGraph from './Agegroup';
import MaleFemale from './Malefemail';

import { Link } from 'react-router-dom';


function HealthHeatMap() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedYear, setSelectedYear] = useState('2020');

  const southEastAsiaCountries = [
    {
      name: 'Brunei',
      lat: 4.88,
      lng: 114.93,
      diseases: [
        { year: 2010, disease: 'Malaria', percentage: 10 },
        { year: 2011, disease: 'Malaria', percentage: 11 },
        { year: 2012, disease: 'Malaria', percentage: 12 },
        { year: 2013, disease: 'Malaria', percentage: 13 },
        { year: 2014, disease: 'Malaria', percentage: 14 },
        { year: 2015, disease: 'Dengue Fever', percentage: 20 },
        { year: 2016, disease: 'Dengue Fever', percentage: 21 },
        { year: 2017, disease: 'Dengue Fever', percentage: 22 },
        { year: 2018, disease: 'Dengue Fever', percentage: 23 },
        { year: 2019, disease: 'Dengue Fever', percentage: 24 },
        { year: 2020, disease: 'COVID-19', percentage: 30 },
        { year: 2021, disease: 'COVID-19', percentage: 32 },
        { year: 2022, disease: 'COVID-19', percentage: 34 },
        { year: 2023, disease: 'COVID-19', percentage: 36 },
        { year: 2024, disease: 'COVID-19', percentage: 38 },
        { year: 2025, disease: 'COVID-19', percentage: 40 },
      ],
    },
    {
      name: 'Cambodia',
      lat: 12.48,
      lng: 105.06,
      diseases: [
        { year: 2010, disease: 'Malaria', percentage: 15 },
        { year: 2011, disease: 'Malaria', percentage: 16 },
        { year: 2012, disease: 'Malaria', percentage: 17 },
        { year: 2013, disease: 'Malaria', percentage: 18 },
        { year: 2014, disease: 'Malaria', percentage: 19 },
        { year: 2015, disease: 'Dengue Fever', percentage: 25 },
        { year: 2016, disease: 'Dengue Fever', percentage: 26 },
        { year: 2017, disease: 'Dengue Fever', percentage: 27 },
        { year: 2018, disease: 'Dengue Fever', percentage: 28 },
        { year: 2019, disease: 'Dengue Fever', percentage: 29 },
        { year: 2020, disease: 'COVID-19', percentage: 35 },
        { year: 2021, disease: 'COVID-19', percentage: 37 },
        { year: 2022, disease: 'COVID-19', percentage: 39 },
        { year: 2023, disease: 'COVID-19', percentage: 41 },
        { year: 2024, disease: 'COVID-19', percentage: 43 },
        { year: 2025, disease: 'COVID-19', percentage: 45 },
      ],
    },
    {
      name: 'East Timor',
      lat: -8.83,
      lng: 125.76,
      diseases: [
        { year: 2010, disease: 'Malaria', percentage: 12 },
        { year: 2011, disease: 'Malaria', percentage: 13 },
        { year: 2012, disease: 'Malaria', percentage: 14 },
        { year: 2013, disease: 'Malaria', percentage: 15 },
        { year: 2014, disease: 'Malaria', percentage: 16 },
        { year: 2015, disease: 'Dengue Fever', percentage: 22 },
        { year: 2016, disease: 'Dengue Fever', percentage: 23 },
        { year: 2017, disease: 'Dengue Fever', percentage: 24 },
        { year: 2018, disease: 'Dengue Fever', percentage: 25 },
        { year: 2019, disease: 'Dengue Fever', percentage: 26 },
        { year: 2020, disease: 'COVID-19', percentage: 32 },
        { year: 2021, disease: 'COVID-19', percentage: 34 },
        { year: 2022, disease: 'COVID-19', percentage: 36 },
        { year: 2023, disease: 'COVID-19', percentage: 38 },
        { year: 2024, disease: 'COVID-19', percentage: 40 },
        { year: 2025, disease: 'COVID-19', percentage: 42 },
      ],
    },
    {
      name: 'Indonesia',
      lat: -6.17,
      lng: 106.83,
      diseases: [
        { year: 2010, disease: 'Malaria', percentage: 18 },
        { year: 2011, disease: 'Malaria', percentage: 19 },
        { year: 2012, disease: 'Malaria', percentage: 20 },
        { year: 2013, disease: 'Malaria', percentage: 21 },
        { year: 2014, disease: 'Malaria', percentage: 22 },
        { year: 2015, disease: 'Dengue Fever', percentage: 28 },
        { year: 2016, disease: 'Dengue Fever', percentage: 29 },
        { year: 2017, disease: 'Dengue Fever', percentage: 30 },
        { year: 2018, disease: 'Dengue Fever', percentage: 31 },
        { year: 2019, disease: 'Dengue Fever', percentage: 32 },
        { year: 2020, disease: 'COVID-19', percentage: 38 },
        { year: 2021, disease: 'COVID-19', percentage: 40 },
        { year: 2022, disease: 'COVID-19', percentage: 42 },
        { year: 2023, disease: 'COVID-19', percentage: 44 },
        { year: 2024, disease: 'COVID-19', percentage: 46 },
        { year: 2025, disease: 'COVID-19', percentage: 48 },
      ],
    },
    {
      name: 'Laos',
      lat: 19.85,
      lng: 102.45,
      diseases: [
        { year: 2010, disease: 'Malaria', percentage: 20 },
        { year: 2011, disease: 'Malaria', percentage: 21 },
        { year: 2012, disease: 'Malaria', percentage: 22 },
        { year: 2013, disease: 'Malaria', percentage: 23 },
        { year: 2014, disease: 'Malaria', percentage: 24 },
        { year: 2015, disease: 'Dengue Fever', percentage: 30 },
        { year: 2016, disease: 'Dengue Fever', percentage: 31 },
        { year: 2017, disease: 'Dengue Fever', percentage: 32 },
        { year: 2018, disease: 'Dengue Fever', percentage: 33 },
        { year: 2019, disease: 'Dengue Fever', percentage: 34 },
        { year: 2020, disease: 'COVID-19', percentage: 40 },
        { year: 2021, disease: 'COVID-19', percentage: 42 },
        { year: 2022, disease: 'COVID-19', percentage: 44 },
        { year: 2023, disease: 'COVID-19', percentage: 46 },
        { year: 2024, disease: 'COVID-19', percentage: 48 },
        { year: 2025, disease: 'COVID-19', percentage: 50 },
      ],
    },
    {
      name: 'Malaysia',
      lat: 4.21,
      lng: 101.97,
      diseases: [
        { year: 2010, disease: 'Malaria', percentage: 12 },
        { year: 2011, disease: 'Malaria', percentage: 13 },
        { year: 2012, disease: 'Malaria', percentage: 14 },
        { year: 2013, disease: 'Malaria', percentage: 15 },
        { year: 2014, disease: 'Malaria', percentage: 16 },
        { year: 2015, disease: 'Dengue Fever', percentage: 22 },
        { year: 2016, disease: 'Dengue Fever', percentage: 23 },
        { year: 2017, disease: 'Dengue Fever', percentage: 24 },
        { year: 2018, disease: 'Dengue Fever', percentage: 25 },
        { year: 2019, disease: 'Dengue Fever', percentage: 26 },
        { year: 2020, disease: 'COVID-19', percentage: 32 },
        { year: 2021, disease: 'COVID-19', percentage: 34 },
        { year: 2022, disease: 'COVID-19', percentage: 36 },
        { year: 2023, disease: 'COVID-19', percentage: 38 },
        { year: 2024, disease: 'COVID-19', percentage: 40 },
        { year: 2025, disease: 'COVID-19', percentage: 42 },
      ],
    },
    {
      name: 'Myanmar',
      lat: 21.93,
      lng: 95.96,
      diseases: [
        { year: 2010, disease: 'Malaria', percentage: 25 },
        { year: 2011, disease: 'Malaria', percentage: 26 },
        { year: 2012, disease: 'Malaria', percentage: 27 },
        { year: 2013, disease: 'Malaria', percentage: 28 },
        { year: 2014, disease: 'Malaria', percentage: 29 },
        { year: 2015, disease: 'Dengue Fever', percentage: 35 },
        { year: 2016, disease: 'Dengue Fever', percentage: 36 },
        { year: 2017, disease: 'Dengue Fever', percentage: 37 },
        { year: 2018, disease:'Malaria',percentage:43},
        { year: 2019, disease: 'Dengue Fever', percentage: 26 },
        { year: 2020, disease: 'COVID-19', percentage: 32 },
        { year: 2021, disease: 'COVID-19', percentage: 34 },
        { year: 2022, disease: 'COVID-19', percentage: 36 },
        { year: 2023, disease: 'COVID-19', percentage: 38 },
        { year: 2024, disease: 'COVID-19', percentage: 40 },
        { year: 2025, disease: 'COVID-19', percentage: 42 },
      ],
    },
      {
        name: 'Myanmar',
        lat: 21.93,
        lng: 95.96,
        diseases: [
          { year: 2010, disease: 'Malaria', percentage: 25 },
          { year: 2011, disease: 'Malaria', percentage: 26 },
          { year: 2012, disease: 'Malaria', percentage: 27 },
          { year: 2013, disease: 'Malaria', percentage: 28 },
          { year: 2014, disease: 'Malaria', percentage: 29 },
          { year: 2015, disease: 'Dengue Fever', percentage: 35 },
          { year: 2016, disease: 'Dengue Fever', percentage: 36 },
          { year: 2017, disease: 'Dengue Fever', percentage: 37 },
          { year: 2018, disease: 'Dengue Fever', percentage: 38 },
          { year: 2019, disease: 'Dengue Fever', percentage: 39 },
          { year: 2020, disease: 'COVID-19', percentage: 45 },
          { year: 2021, disease: 'COVID-19', percentage: 47 },
          { year: 2022, disease: 'COVID-19', percentage: 49 },
          { year: 2023, disease: 'COVID-19', percentage: 51 },
          { year: 2024, disease: 'COVID-19', percentage: 53 },
          { year: 2025, disease: 'COVID-19', percentage: 55 },
        ],
      },
      {
        name: 'Philippines',
        lat: 12.88,
        lng: 121.75,
        diseases: [
          { year: 2010, disease: 'Malaria', percentage: 15 },
          { year: 2011, disease: 'Malaria', percentage: 16 },
          { year: 2012, disease: 'Malaria', percentage: 17 },
          { year: 2013, disease: 'Malaria', percentage: 18 },
          { year: 2014, disease: 'Malaria', percentage: 19 },
          { year: 2015, disease: 'Dengue Fever', percentage: 25 },
          { year: 2016, disease: 'Dengue Fever', percentage: 26 },
          { year: 2017, disease: 'Dengue Fever', percentage: 27 },
          { year: 2018, disease: 'Dengue Fever', percentage: 28 },
          { year: 2019, disease: 'Dengue Fever', percentage: 29 },
          { year: 2020, disease: 'COVID-19', percentage: 35 },
          { year: 2021, disease: 'COVID-19', percentage: 37 },
          { year: 2022, disease: 'COVID-19', percentage: 39 },
          { year: 2023, disease: 'COVID-19', percentage: 41 },
          { year: 2024, disease: 'COVID-19', percentage: 43 },
          { year: 2025, disease: 'COVID-19', percentage: 45 },
        ],
      },
      {
        name: 'Singapore',
        lat: 1.35,
        lng: 103.85,
        diseases: [
          { year: 2010, disease: 'Malaria', percentage: 5 },
          { year: 2011, disease: 'Malaria', percentage: 6 },
          { year: 2012, disease: 'Malaria', percentage: 7 },
          { year: 2013, disease: 'Malaria', percentage: 8 },
          { year: 2014, disease: 'Malaria', percentage: 9 },
          { year: 2015, disease: 'Dengue Fever', percentage: 15 },
          { year: 2016, disease: 'Dengue Fever', percentage: 16 },
          { year: 2017, disease: 'Dengue Fever', percentage: 17 },
          { year: 2018, disease: 'Dengue Fever', percentage: 18 },
          { year: 2019, disease: 'Dengue Fever', percentage: 19 },
          { year: 2020, disease: 'COVID-19', percentage: 25 },
          { year: 2021, disease: 'COVID-19', percentage: 27 },
          { year: 2022, disease: 'COVID-19', percentage: 29 },
          { year: 2023, disease: 'COVID-19', percentage: 31 },
          { year: 2024, disease: 'COVID-19', percentage: 33 },
          { year: 2025, disease: 'COVID-19', percentage: 35 },
        ],
      },
      {
        name: 'Thailand',
        lat: 15.87,
        lng: 100.99,
        diseases: [
          { year: 2010, disease: 'Malaria', percentage: 20 },
          { year: 2011, disease: 'Malaria', percentage: 21 },
          { year: 2012, disease: 'Malaria', percentage: 22 },
          { year: 2013, disease: 'Malaria', percentage: 23 },
          { year: 2014, disease: 'Malaria', percentage: 24 },
          { year: 2015, disease: 'Dengue Fever', percentage: 30 },
          { year: 2016, disease: 'Dengue Fever', percentage: 31 },
          { year: 2017, disease: 'Dengue Fever', percentage: 32 },
          { year: 2018, disease: 'Dengue Fever', percentage: 33 },
          { year: 2019, disease: 'Dengue Fever', percentage: 34 },
          { year: 2020, disease: 'COVID-19', percentage: 40 },
          { year: 2021, disease: 'COVID-19', percentage: 42 },
          { year: 2022, disease: 'COVID-19', percentage: 44 },
          { year: 2023, disease: 'COVID-19', percentage: 46 },
          { year: 2024, disease: 'COVID-19', percentage: 48 },
          { year: 2025, disease: 'COVID-19', percentage: 50 },
        ],
      },
      {
        name: 'Vietnam',
        lat: 16.07,
        lng: 107.85,
        diseases: [
          { year: 2010, disease: 'Malaria', percentage: 18 },
          { year: 2011, disease: 'Malaria', percentage: 19 },
          { year: 2012, disease: 'Malaria', percentage: 20 },
          { year: 2013, disease: 'Malaria', percentage: 21 },
          { year: 2014, disease: 'Malaria', percentage: 22 },
          { year: 2015, disease: 'Dengue Fever', percentage: 28 },
          { year: 2016, disease: 'Dengue Fever', percentage: 29 },
          { year: 2017, disease: 'Dengue Fever', percentage: 30 },
          { year: 2018, disease: 'Dengue Fever', percentage: 31 },
          { year: 2019, disease: 'Dengue Fever', percentage: 32 },
          { year: 2020, disease: 'COVID-19', percentage: 38 },
          { year: 2021, disease: 'COVID-19', percentage: 40 },
          { year: 2022, disease: 'COVID-19', percentage: 42 },
          { year: 2023, disease: 'COVID-19', percentage: 44 },
          { year: 2024, disease: 'COVID-19', percentage: 46 },
          { year: 2025, disease: 'COVID-19', percentage: 48 },
        ],
      },
    ];
  
    const years = Array.from({ length: 16 }, (_, i) => 2010 + i);
  
    const mapCenter = [10, 100];
    const zoomLevel = 4;
  
    const getMostCommonDisease = (country, year) => {
      const diseases = country.diseases.filter((disease) => disease.year === parseInt(year));
      if (diseases.length > 0) {
        const mostCommonDisease = diseases.reduce((max, current) => (max.percentage > current.percentage ? max : current));
        return mostCommonDisease;
      }
      return null;
    };
  
    return (
      <div>
           <Link className='link' to="/home">HOME</Link>
        <h1>Region Health Insights</h1>
        <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
          <option value="All Regions">SELECT COUNTRY</option>
          <option value="South East Asia">South East Asia</option>
          {southEastAsiaCountries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
          <option value="None">None</option>
        </select>
  
        <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
  
        <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '600px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {selectedRegion === 'South East Asia' &&
            southEastAsiaCountries.map((country) => (
              <Marker key={country.name} position={[country.lat, country.lng]} icon={L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28] })}>
                <Popup>
                  <h2>{country.name}</h2>
                  {getMostCommonDisease(country, selectedYear) && (
                    <p>
                      Most common disease in {selectedYear}: {getMostCommonDisease(country, selectedYear).disease} ({getMostCommonDisease(country, selectedYear).percentage}%)
                    </p>
                  )}
                </Popup>
              </Marker>
            ))}
          {selectedRegion !== 'All Regions' && selectedRegion !== 'South East Asia' && selectedRegion !== 'None' && (
                <Marker position={[southEastAsiaCountries.find((country) => country.name === selectedRegion).lat, southEastAsiaCountries.find((country) => country.name === selectedRegion).lng]} icon={L.icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28] })}>
                  <Popup>
                    <h2>{selectedRegion}</h2>
                    {getMostCommonDisease(southEastAsiaCountries.find((country) => country.name === selectedRegion), selectedYear) && (
                      <p>
                        Most common disease in {selectedYear}: {getMostCommonDisease(southEastAsiaCountries.find((country) => country.name === selectedRegion), selectedYear).disease} ({getMostCommonDisease(southEastAsiaCountries.find((country) => country.name === selectedRegion), selectedYear).percentage}%)
                      </p>
                    )}
                  </Popup>
                </Marker>
              )}
            </MapContainer>
            <AgeGroupGraph />
            <MaleFemale />
           <Link className='link' to="/sesonal">MORE INFO </Link>
          </div>
        );
      }
      
      export default HealthHeatMap;