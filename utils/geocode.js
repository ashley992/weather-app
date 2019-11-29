const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYXNobGV5d29uZzY3OCIsImEiOiJjazNpNm8zd3gwNTh2M2hwaHB4bnE0Y3M4In0.X_KoS5NrgwUMUm0nipDK2A&limit=1'
    request( {url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback(', unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode