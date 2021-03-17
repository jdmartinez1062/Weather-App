import { celcius, farenheit } from './calculations'

const deletePreviousContent = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};


const showWeather = (weather) => {

    const main = document.getElementById("main")
    const weatherDiv = document.getElementById("weather-info")
    weatherDiv.classList = 'container-fluid mx-0 my-4 border rounded'

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
    temp.textContent = `Current Temperature: ${weather.temp}`
    const tempMax = document.createElement('p')
    tempMax.textContent = `Maximum Temperature: ${weather.temp_max}`
    const tempMin = document.createElement('p')
    tempMin.textContent = `Minimum Temperature: ${weather.temp_min}`

    addClass([temp, tempMax, tempMin], 'block')

    const close = document.createElement('button')
    close.type = 'button'
    close.setAttribute('class', "btn-close close")
    close.setAttribute("aria-label", "Close")

    close.addEventListener('click', () => {
        deletePreviousContent(weatherDiv)
        weatherDiv.classList = 'container-fluid mx-0 my-4 border rounded'
    })

    tempHolder.append(temp, tempMax, tempMin)
    weatherDiv.append(close, generalInfo, tempHolder,)
    main.append(weatherDiv)
}


const addClass = (array, addClass) => {
    array.forEach(element => {
        element.class += addClass
    });
}

export { showWeather }