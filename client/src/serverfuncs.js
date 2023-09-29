
const API = 'http://localhost:2020/weather'


async function getWeather(e) {
    e.preventDefault();
    const response = await fetch(API)
    const weatherData = await response.json()
    console.log(weatherData);
    return weatherData;
}

getWeather();

export default getWeather;