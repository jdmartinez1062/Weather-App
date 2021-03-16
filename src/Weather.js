import { celcius, farenheit } from "./calculations";
class Weather {

    constructor(location, temp, temp_min, temp_max, temp_feel, humidity, sun_rise, sun_set) {
        this.location = location
        this.temp = temp
        this.temp_min = temp_min
        this.temp_max = temp_max
        this.temp_feel = temp_feel
        this.humidity = humidity
        this.sun_rise = sun_rise
        this.sun_set = sun_set
    }

    tempInCelcius() {
        this.temp = celcius(temp)
    }
    tempInFarenheit() {
        this.temp = farenheit(temp)
    }

}

export default Weather