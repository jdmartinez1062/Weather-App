import { celcius, farenheit } from "./calculations";
class Weather {

    constructor(location, weather, weatherDescription, temp, tempMin, tempMax, tempFeel, humidity, sunRise, sunSet) {
        this.location = capitalizeFirstLetter(location)
        this.weather = capitalizeFirstLetter(weather)
        this.weatherDescription = capitalizeFirstLetter(weatherDescription)
        this.temp = temp
        this.temp_min = tempMin
        this.temp_max = tempMax
        this.temp_feel = tempFeel
        this.humidity = humidity
        this.sun_rise = sunRise
        this.sun_set = sunSet
    }

    tempInCelcius() {
        this.temp = celcius(temp)
    }
    tempInFarenheit() {
        this.temp = farenheit(temp)
    }

}


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Weather