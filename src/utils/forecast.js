const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/936357ad9d673a955c4e84d4adae2f8c/' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {

        if (error) {

            callback('Unable to connect to weather service.', undefined)

        
        } else if (body.error) {

            callback('Unable to find location.', undefined)            

        } else {

            const currrentWeather = body.currently;

            callback(undefined, `${body.daily.data[0].summary} It is currently ${currrentWeather.temperature} degrees out. The high today is ${body.daily.data[0].temperatureHigh} with a low of ${body.daily.data[0].temperatureLow}. There is a ${(currrentWeather.precipProbability * 100).toFixed(0)}% chance of rain.`)    
        }
    })
}

module.exports = forecast