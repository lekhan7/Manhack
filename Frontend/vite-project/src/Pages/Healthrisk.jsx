import React, { useState, useEffect } from 'react';

function Healthrisk() {
  const [weather, setWeather] = useState(null);
  const [healthRisk, setHealthRisk] = useState(null);

  useEffect(() => {
    // Get the current weather conditions using an API or a library
    const getWeather = async () => {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY');
      const data = await response.json();
      setWeather(data);
    };
    getWeather();
  }, []);

  useEffect(() => {
    if (weather) {
      // Calculate the health risk based on the current weather conditions
      const calculateHealthRisk = () => {
        const temperature = weather.main.temp;
        const humidity = weather.main.humidity;
        const windSpeed = weather.wind.speed;

        if (temperature > 30 && humidity > 60) {
          setHealthRisk('High');
        } else if (temperature < 10 && windSpeed > 20) {
          setHealthRisk('Moderate');
        } else {
          setHealthRisk('Low');
        }
      };
      calculateHealthRisk();
    }
  }, [weather]);

  return (
    <div>
      <h1>Health Risk Page</h1>
      <h2>Current Date: {new Date().toLocaleDateString()}</h2>
      {weather && (
        <div>
          <h2>Current Weather:</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
      <h2>Health Risk: {healthRisk}</h2>
      {healthRisk === 'Low' && (
        <p>Recommended actions: Stay hydrated, take a short walk.</p>
      )}
      {healthRisk === 'Moderate' && (
        <p>Recommended actions: Take a break, stretch, and move around.</p>
      )}
      {healthRisk === 'High' && (
        <p>Recommended actions: Seek medical attention, rest, and avoid strenuous activities.</p>
      )}
    </div>
  );
}

export default Healthrisk;