const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const place = process.argv[2]

if (!place) {
    console.log('Please provide a valid place')
} else {

geocode(place, (error, {latitude, longitude, location} = {}) => {

    if (error) {
        return console.log(error)
    } 
    forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }


        console.log(chalk.yellow(location)) 
        console.log(forecastData)
    })
    
})
}










