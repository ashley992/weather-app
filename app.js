const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// Challenge: Accept location via command line argument
// 1. Access the command line argument without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a few locations
const location = process.argv[2]

if (!location){
    console.log('Please provide a location.')
} else {
    geocode(location, (error, data) => {
        if(error){
            return console.log(error)
        } 
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(data.location)
            console.log(forecastData)
          })
    })
}
