const request = require('request')

const url = 'https://api.darksky.net/forecast/1ddfdc3470e5253d07e9c3e0c923148d/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature
    const precip = response.body.currently.precipProbability
    console.log(`It is currently ${temp} degrees out. There is a ${precip}% chance of rain.`)
})

// Challenge: Print a small forecast to the user
// 1. Print "It is currently 58 degress out. There is a 0% chance of rain."
// 2. Test your work!