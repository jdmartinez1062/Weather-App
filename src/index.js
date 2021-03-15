

const getWeather = async city => {
    const API_KEY = "e88a6f60008b01493b86cacd829f692b";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' })
        .then((response) => {
            console.log(response.json())

        }).catch(function (err) {
            console.log(err)
        })
}

window.onload = () => {

    getWeather("London")
}