const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/1ddfdc3470e5253d07e9c3e0c923148d/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather services.')
//     } else if(response.body.error){
//         console.log('Unable to find location.')
//     } else {
//         const temp = response.body.currently.temperature
//         const precip = response.body.currently.precipProbability
//         console.log(response.body.daily.data[0].summary + ` It is currently ${temp} degrees out. There is a ${precip}% chance of rain.`)
//     }

// })

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data: ', data)
  })