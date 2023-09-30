import { useState, useEffect } from 'react'
import './App.css'
import Search from './components/search';
import getWeather from './serverfuncs';
import WeatherCard from './components/weathercard'

function App() {

  /*useEffect(() => {
    getWeather("new york city").then((result)=> setWeather(result));
  }, [])*/
  

  const [weather, setWeather] = useState("hi");

  return (

      <div>
        <h1 class="m-12 text-zinc-50 text-8xl flex flex-col items-center"> Nat's Weather App </h1>
        <Search setWeather={setWeather} > </Search>
        {weather !== "hi" ? <WeatherCard weather={weather} ></WeatherCard> : <div class="m-8 text-xl flex flex-col items-center"><h1>Please search a city</h1></div> }
      </div>
  )
}

export default App
