const request = require('request')

const url = 'https://api.darksky.net/forecast/1ddfdc3470e5253d07e9c3e0c923148d/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    const temp = response.body.currently.temperature
    const precip = response.body.currently.precipProbability
    // console.log(response.body.daily.data[0].summary + ` It is currently ${temp} degrees out. There is a ${precip}% chance of rain.`)
})

// Challenge: Geocoding
// Address -> Lat/Long -> Weather

// Goal: Print the lat/long for LA
// 1. Fire off a new request to theURL explored in browser
// 2. Have the Request module prase it as JSON
// 3. Print both the Lat and Long to the terminal
// 4. Test your work

const mapURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXNobGV5d29uZzY3OCIsImEiOiJjazNpNm8zd3gwNTh2M2hwaHB4bnE0Y3M4In0.X_KoS5NrgwUMUm0nipDK2A&limit=1'

request( { url: mapURL, json: true}, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(`Latitude is ${latitude}. Longitude is ${longitude}.`)
})