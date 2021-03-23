import Weather from './Weather';
import { showWeather, showError } from './DOM';

const objectBuilder = (json) => {
  const mainJson = json.main;
  const weather = json.weather[0].main;
  const weatherDescription = json.weather[0].description;
  const { temp } = mainJson;
  const tempMin = mainJson.temp_min;
  const tempMax = mainJson.temp_max;
  const feelsLike = mainJson.feels_like;
  const { humidity } = mainJson;
  const sunRise = new Date(json.sys.sunrise * 1000);
  const sunSet = new Date(json.sys.sunset * 1000);
  const location = json.name;
  return [
    location,
    weather,
    weatherDescription,
    temp,
    tempMin,
    tempMax,
    feelsLike,
    humidity,
    sunRise,
    sunSet,
  ];
};


const getWeather = async (city) => {
  const API_KEY = 'e88a6f60008b01493b86cacd829f692b';
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    { mode: 'cors' },
  )
    .then((response) => {
      if (response.ok) {
        response.json().then((response) => {
          showWeather(new Weather(...objectBuilder(response)));
        });
      }
      else {
        showError(`Error ${response.status + ' ' + response.statusText}`)
      }
    })
    .catch((error) => {
      showError(error)
    })

};

window.onload = () => {
  document.getElementById('search-button').addEventListener('click', () => {
    const cityField = document.getElementById('city');
    const city = cityField.value;

    getWeather(city);
  });
};
