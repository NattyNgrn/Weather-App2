import getWeather from "../serverfuncs"
import { useState, useEffect } from "react"
const [weather, setWeather] = useState({

})
function Search({setWeather}){

    return(
        <div>
            <form>
                <input onChange={(e)=> {}} type="text" placeholder="Enter a city" class="border border-gray-500 rounded-lg py-3 px-6 w-64"/>
                <button onClick={getWeatherData} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search;