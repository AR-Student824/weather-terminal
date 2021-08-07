#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const axios = require("axios");
const pakag = require('../package.json');
if (pakag.name == "weather69420") {
    console.log(chalk.red.bold(`[Deprecation] This package is officially deprecated in favor of the new package, breezeweather. If the Breeze API changes, this package will break. Install the new one with the command below:\n\nnpm install -g breezeweather && npm uninstall -g weather69420`))
}
console.info('[Loading] Please wait...')
axios.get('https://weather.ar-dev.cf/api/json').then(res => {
const celcius = res.data.c
const farenheight = res.data.f 
const location = res.data.location
var types = []
celcius.weather.forEach(x => {
    types.push(x.main)
})
var sunrise = new Date(celcius.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
var sunset = new Date(celcius.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
console.log(boxen(`${chalk.blue.bold(celcius.main.temp + '°C / ' + farenheight.main.temp + '°F')}`
 + '\n' + chalk.red.bold(types.toString().replace(/,/, ' + ')) + chalk.black(' - ' + ' Feels like ' + celcius.main.feels_like + '°C / ' + farenheight.main.feels_like + '°F') 
 + '\n' + chalk.red.bold(location.city) + chalk.black(', ' + location.region_code + ', ' + location.country_code)
 + '\n' + chalk.red.bold('Humidity ' + celcius.main.humidity + '%') + chalk.black(', Wind speed ' + celcius.wind.speed)
 + '\n' + chalk.red.bold('Sunrise ' + sunrise) + chalk.black(', Sunset ' + sunset)
 , {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "white",
    allign: "center"
}))
if (pakag.name == "weather69420") {
    console.log(chalk.red.bold(`[Deprecation] This package is officially deprecated in favor of the new package, breezeweather. If the Breeze API changes, this package will break. Install the new one with the command below:\n\nnpm install -g breezeweather && npm uninstall -g weather69420`))
}
})
