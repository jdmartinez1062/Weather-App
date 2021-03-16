import { celcius, farenheit } from "./calculations";
import Weather from "./Weather"

const getWeather = async city => {
    const API_KEY = "e88a6f60008b01493b86cacd829f692b";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' })
        .then((response) => {

            response.json()
                .then((response) => {
                    console.log(new Weather(...objectBuilder(response)))
                })
        }).catch(function (err) {
            console.log(err)
        })
}

const objectBuilder = (json) => {
    const mainJson = json.main
    const temp = mainJson.temp;
    const temp_min = mainJson.temp_min
    const temp_max = mainJson.temp_max
    const feels_like = mainJson.feels_like
    const humidity = mainJson.humidity
    const sun_rise = new Date(json.sys.sunrise * 1000)
    const sun_set = new Date(json.sys.sunset * 1000)
    const location = json.name
    return [location, temp, temp_min, temp_max, feels_like, humidity, sun_rise, sun_set]
}

window.onload = () => {

    getWeather("Villavicencio")


}
