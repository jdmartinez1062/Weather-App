import { celcius, farenheit } from './calculations'

const deletePreviousContent = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};


const showWeather = (weather) => {

    const main = document.getElementById("main")
    const weatherDiv = document.getElementById("weather-info")
    weatherDiv.classList = 'container-fluid mx-0 my-4 border rounded p-4'

    deletePreviousContent(weatherDiv)

    const generalInfo = document.createElement('div')
    const tempHolder = document.createElement('div')

    tempHolder.id = "temp-holder"

    const location = document.createElement('h3')
    location.textContent = weather.location
    const weatherText = document.createElement('p')
    weatherText.textContent = `Current weather: ${weather.weather}`
    const weatherDescription = document.createElement('p')
    weatherDescription.textContent = `Description: ${weather.weatherDescription}`


    addClass([location, weatherText, weatherDescription], 'block')
    generalInfo.append(location, weatherText, weatherDescription)

    const temp = document.createElement('p')
    temp.id = 'temp'
    temp.textContent = `Current Temperature: ${celcius(weather.temp)} °C`
    const tempMax = document.createElement('p')
    tempMax.id = 'temp-max'
    tempMax.textContent = `Maximum Temperature: ${celcius(weather.temp_max)} °C`
    const tempMin = document.createElement('p')
    tempMin.id = 'temp-min'
    tempMin.textContent = `Minimum Temperature: ${celcius(weather.temp_min)} °C`

    addClass([temp, tempMax, tempMin], 'block')

    const close = document.createElement('button')
    close.type = 'button'
    close.setAttribute('class', "btn-close close")
    close.setAttribute("aria-label", "Close")

    close.addEventListener('click', () => {
        deletePreviousContent(weatherDiv)
        weatherDiv.classList = 'container-fluid mx-0 my-4'
    })

    const toogle = document.createElement('div')
    toogle.classList = "d-flex align-items-center py-3"

    const toogleText = document.createElement('p')

    const toogleTemp = document.createElement('input')
    const toogleTempLabel = document.createElement('label')
    toogleText.textContent = 'Click to change the unit of temperature:'

    toogle.append(toogleText, toogleTemp, toogleTempLabel)

    toogleTempLabel.textContent = '°C'


    toogleTempLabel.classList = "btn btn-primary m-0"
    toogleTempLabel.for = "btn-check"

    toogleTemp.type = 'checkbox'
    toogleTemp.classList = "btn-check m-0"
    toogleTempLabel.id = "btn-check"

    toogleTempLabel.addEventListener('click', () => {
        toogleTempLabel.textContent = toogleTempLabel.textContent == '°C' ? '°F' : '°C'
        updateTemp(weather, toogleTempLabel.textContent)
    })

    tempHolder.append(temp, tempMax, tempMin)
    weatherDiv.append(close, toogle, generalInfo, tempHolder)
    main.append(weatherDiv)
}


const addClass = (array, addClass) => {
    array.forEach(element => {
        element.class += addClass
    });
}

const updateTemp = (weather, tempUnit) => {
    const temp = document.getElementById('temp')
    const tempMax = document.getElementById('temp-max')
    const tempMin = document.getElementById('temp-min')

    if (tempUnit == '°C') {
        temp.textContent = `Current Temperature: ${celcius(weather.temp)} °C`
        tempMax.textContent = `Maximum Temperature: ${celcius(weather.temp_max)} °C`
        tempMin.textContent = `Minimum Temperature: ${celcius(weather.temp_min)} °C`

    }
    else {
        temp.textContent = `Current Temperature: ${farenheit(weather.temp)} °F`
        tempMax.textContent = `Maximum Temperature: ${farenheit(weather.temp_max)} °F`
        tempMin.textContent = `Minimum Temperature: ${farenheit(weather.temp_min)} °F`

    }

}
export { showWeather }