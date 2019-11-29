const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/1ddfdc3470e5253d07e9c3e0c923148d/${lat},${long}`
    request( {url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather services.', undefined)
        } else if(response.body.error){
            console.log('Unable to find location.')
        } else{
            const temp = response.body.currently.temperature
            const precip = response.body.currently.precipProbability
            callback(undefined, `It is currently ${temp} degrees out. There is a ${precip}% chance of rain.`)
        }
    })
}

module.exports = forecast
