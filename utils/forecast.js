const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/1ddfdc3470e5253d07e9c3e0c923148d/${lat},${long}`
    request( {url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services.', undefined)
        } else if(body.error){
            console.log('Unable to find location.')
        } else{
            callback(undefined, `It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast
