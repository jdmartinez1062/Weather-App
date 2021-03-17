/* eslint-disable no-mixed-operators */
const celcius = (temp) => Math.round((temp - 273.15) * 10) / 10;
const farenheit = (temp) => Math.round(((celcius(temp) * 9 / 5) + 32) * 10) / 10;

export { celcius, farenheit };