import express from "express";
import cors from "cors";
import {config} from "dotenv";

const app = express();
//app.use(express.json());
app.use(cors());
config(); //https://www.dotenv.org/docs/quickstart

const port = process.env.PORT || 2020;
const API = process.env.API;

console.log(API) //testing
console.log(URL); //testing

//getting json from weather API
async function getWeather(URL){
const response = await fetch(URL) 
const data = await response.json();
console.log(data);
return data;
}


//making sure this is working
app.get("/", (req, res) => {
    res.json("hello");
});

app.get("/weather/", (req, res) => {
    const city = req.query.city;
    const units = "imperial";
    const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${API}&units=${units}`
    getWeather(URL).then(result => res.send(result));
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));