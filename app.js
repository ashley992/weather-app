const request = require('request')

const url = 'https://api.darksky.net/forecast/1ddfdc3470e5253d07e9c3e0c923148d/37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})