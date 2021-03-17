import { celcius, farenheit } from "./calculations";
import Weather from "./Weather"
import { showWeather } from "./DOM"
const getWeather = async city => {
    const API_KEY = "e88a6f60008b01493b86cacd829f692b";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' })
        .then((response) => {

            response.json()
                .then((response) => {
                    showWeather(new Weather(...objectBuilder(response)))
                })
        }).catch(function (err) {
            console.log(err)
        })
}

const objectBuilder = (json) => {
    const mainJson = json.main
    const weather = json.weather[0].main
    const weatherDescription = json.weather[0].description
    const temp = mainJson.temp;
    const tempMin = mainJson.temp_min
    const tempMax = mainJson.temp_max
    const feelsLike = mainJson.feels_like
    const humidity = mainJson.humidity
    const sunRise = new Date(json.sys.sunrise * 1000)
    const sunSet = new Date(json.sys.sunset * 1000)
    const location = json.name
    return [location, weather, weatherDescription, temp, tempMin, tempMax, feelsLike, humidity, sunRise, sunSet]
}

window.onload = () => {
    document.getElementById('search-button').addEventListener('click', () => {

        const cityField = document.getElementById('city')
        const city = cityField.value

        getWeather(city)
        // document.getElementById('search').classList.toggle('hide')
    })


}
