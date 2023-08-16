import React, { useState } from 'react'
import './App.css';

function App() {

  const apiKey = '1b9e44b1c5ee212f5a04b00d1285dada'
  const [weatherData, setWeatherData] = useState([{}])


  return (
    <div class="container">
      <input className="input" placeholder='Enter a city....' />
    </div>
  );
}

export default App;
