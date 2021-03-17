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
    const tempHolder = document.createElement('div')
    tempHolder.id = "temp-holder"


    const temp = document.createElement('p')
    temp.textContent = `Current Temperature: ${weather.temp}`
    const tempMax = document.createElement('p')
    tempMax.textContent = `Maximum Temperature: ${weather.temp_max}`
    const tempMin = document.createElement('p')
    tempMin.textContent = `Minimum Temperature: ${weather.temp_min}`
    [temp, tempMax, tempMin].forEach(element => {
        element.class += 'block'
    });

    tempHolder.append(temp, tempMax, tempMin)
    main.append(tempHolder)


}