
const API = 'http://localhost:2020/weather/'


async function getWeather(city) {
    const response = await fetch(API + `/${city}`)
    const weatherData = await response.json()
    console.log(weatherData);
    return weatherData;
}

getWeather();

export default getWeather;