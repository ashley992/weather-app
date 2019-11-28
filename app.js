const request = require('request')

const url = 'https://api.darksky.net/forecast/1ddfdc3470e5253d07e9c3e0c923148d/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature
    const precip = response.body.currently.precipProbability
    console.log(response.body.daily.data[0].summary + ` It is currently ${temp} degrees out. There is a ${precip}% chance of rain.`)
})
