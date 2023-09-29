import { useState } from 'react'
import './App.css'
import Search from './components/search';

function App() {
  const [count, setCount] = useState(0)

  const [weather, setWeather] = useState({});

  return (

      <div>
        <h1 class="m-12 text-zinc-50 text-8xl flex flex-col items-center"> Nat's Weather App </h1>
        <Search setWeather={setWeather} > </Search>

        <div class="grid-cols-1 sm:grid md:grid-cols-4">
                <div
                class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-emerald-800 sm:shrink-0 sm:grow sm:basis-0">
                    <a href="#!">
                    <img
                        
                        class="rounded-t-lg"
                        src= "https://www.seathecity.com/wp-content/uploads/2021/04/new-york-3602856_640.jpg"
                        />
                    </a>
                    <div class="p-6">
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            City: {weather.city.name}
                        </h5>
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Forecast: {weather.list[0].weather[0].main}
                        </h5>
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Description: {weather.list[0].weather[0].description}
                        </h5>
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Max Temperature: {weather.list[0].temp.max}
                        </h5>
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Min Temperature: {weather.list[0].temp.min}
                        </h5>
                        <h5
                            class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            Humidity: {humidity}
                        </h5>
                        
                    </div>
                </div>
            </div>
      </div>
  )
}

export default App
