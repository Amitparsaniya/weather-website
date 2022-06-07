const request = require('request')

const webdata = (address,callback) => {
  const url = 'https://api.weatherapi.com/v1/forecast.json?key=09d96df969084d08a9331934221905&q='+encodeURIComponent(address)+'&days=5&aqi=yes&alerts=yes'


  request({ url, json: true }, (error,  { body } ) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    }
    // else if (body.address == 0) {

    //   callback('Unable to find  location!', undefined)
    // }
    else {
      callback(undefined, {
        env: body.location,
        temp  : 'in your ' + address + ' temp ' +body.current.temp_c +' c',
        weather : 'in your ' + address + ' conditon is ' + body.current.condition.text,
        wind_speed : 'in your ' + address + ' wind speed @ '+body.current.wind_kph + ' kph',
        cloud_condition : 'in your ' + address + ' cloud condition '+body.current.cloud ,
        maxtemp_c : 'in your ' + address + ' maxtemp is '+body.forecast.forecastday[0].day.maxtemp_c + ' c'

      })

    }

  })

  console.log('tttttttttttttt');
  console.log(url);
}

module.exports = webdata
