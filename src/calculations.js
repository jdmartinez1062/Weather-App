// const tempCalculations = (() => {
const celcius = (temp) => {
    return temp - 273.15
}
const farenheit = () => {
    return celcius(temp) * 9 / 5 + 32
}
// })();

export { celcius, farenheit }