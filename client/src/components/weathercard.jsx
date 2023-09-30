

function WeatherCard({weather}){
    console.log("weather card is running");
    return(
        <div class="grid-cols-1 sm:grid md:grid-cols-3">
            <div
            class="mx-3 mt-6 flex flex-col self-start rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-emerald-800 sm:shrink-0 sm:grow sm:basis-0">
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
                        Humidity: {weather.list[0].humidity}
                    </h5>
                    
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;