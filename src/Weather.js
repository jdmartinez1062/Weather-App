
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

class Weather {
  constructor(
    location,
    weather,
    weatherDescription,
    temp,
    tempMin,
    tempMax,
    tempFeel,
    humidity,
    sunRise,
    sunSet,
  ) {
    this.location = capitalizeFirstLetter(location);
    this.weather = capitalizeFirstLetter(weather);
    this.weatherDescription = capitalizeFirstLetter(weatherDescription);
    this.temp = temp;
    this.temp_min = tempMin;
    this.temp_max = tempMax;
    this.temp_feel = tempFeel;
    this.humidity = humidity;
    this.sun_rise = sunRise;
    this.sun_set = sunSet;
  }
}

export default Weather;
