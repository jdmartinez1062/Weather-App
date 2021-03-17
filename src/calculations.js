// const tempCalculations = (() => {
const celcius = (temp) => {
    return Math.round((temp - 273.15) * 10) / 10
}
const farenheit = (temp) => {
    return Math.round(((celcius(temp) * 9 / 5) + 32) * 10) / 10
}
// })();

export { celcius, farenheit }