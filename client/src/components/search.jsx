import getWeather from "../serverfuncs"
import { useState, useEffect } from "react"

function Search({setWeather}){

    const [city, setCity] = useState("")

    async function getWeatherData() {
        const result = await getWeather(city);
        setWeather(result);
    }

    return(
        <div>
            <form class="flex flex-col items-center" >
                <input value={city} onChange={(e)=> setCity(e.target.value)} type="text" placeholder="Enter a city" class="border border-gray-500 rounded-lg py-3 px-6 w-64"/>
                <button onClick={getWeatherData} class="bg-emerald-300 hover:bg-emerald-800 text-black font-bold py-3 px-6 rounded-md">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search;