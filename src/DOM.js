const deleteContent = (content) => {
    document.getElementById(content.id).remove();
}

const deletePreviousContent = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};


const showWeather = (weather) => {
    main = document.getElementById("main")
    const weatherDiv = document.createElement('div')
    const generalInfo = document.createElement('div')
    const tempHolder = document.createElement('div')

    tempHolder.id = "temp-holder"

    const location = document.createElement('h3')
    location.textContent = weather.location
    const weatherText = document.createElement('p')
    weatherText.textContent = weather.weather
    const weatherDescription = document.createElement('p')
    weatherDescription.textContent = weather.weatherDescription


    addClass([location, weatherText, weatherDescription], 'block')
    generalInfo.append(location, weatherText, weatherDescription)

    const temp = document.createElement('p')
    temp.textContent = `Current Temperature: ${weather.temp}`
    const tempMax = document.createElement('p')
    tempMax.textContent = `Maximum Temperature: ${weather.temp_max}`
    const tempMin = document.createElement('p')
    tempMin.textContent = `Minimum Temperature: ${weather.temp_min}`

    addClass([temp, tempMax, tempMin], 'block')

    tempHolder.append(temp, tempMax, tempMin)
    weatherDiv.append(tempHolder)
    main.append(weatherDiv)
}


const addClass = (array, addClass) => {
    array.forEach(element => {
        element.class += addClass
    });
}