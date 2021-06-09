const request = require('request')
const chalk = require('chalk')
const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=da02b1b6a6352ca0ffc3c6da395f5c71&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to the service!', undefined)
        } else if (body.error) { // tried to access wrong section of the response
            callback('unable to find location. try another search.', undefined)
        } else {
            callback(undefined, (body.current.weather_descriptions[0]) + '. it is currently ' + (body.current.temperature) + ' degrees outside. However, it feels like it is ' + (body.current.feelslike)
            )
        }
    })
 
}
module.exports = forecast  

// forecast('112', '37', (error, data) => { 
//     console.log('error', error)
//     console.log('Data', data)
// })
