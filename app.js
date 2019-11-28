const request = require('request')

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

// Challenge: Handle errors for geocoding request
// 1. Setup an error handle for low-level errors
// 2. Test by disabling network request and running the app
// 3. Setup error handling for no matching results
// 4. Test by altering the search term and running the app

const mapURL = 'http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXNobGV5d29uZzY3OCIsImEiOiJjazNpNm8zd3gwNTh2M2hwaHB4bnE0Y3M4In0.X_KoS5NrgwUMUm0nipDK2A&limit=1'

request( { url: mapURL, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to location services.')
    } else if (response.body.features.length === 0){
        console.log('Location not found. Try to search again.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(`Latitude is ${latitude}. Longitude is ${longitude}.`)
    }
})