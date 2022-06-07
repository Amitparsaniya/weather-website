const request = require('request')
// const geocode =require('./utils/geocode.js')



const geocode = (adress, callback)=>{


    const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/ '+ encodeURIComponent(adress) +'.json?access_token=pk.eyJ1IjoiYW1pdC1wYXJzYW5peWEwMiIsImEiOiJjbDJ3dnJwMG0wYjZtM2Jqemo0b3Z2ZDNwIn0.Y4RrsN7Zt-vCyfE-Wd6aEA'

    request({ url: geocodeurl, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect weather service',undefined);
        } else if (response.body.features.length == 0) {
            callback('unable to find location,try another serch',undefined);
        }
        else{
            const latitude = response.body.features[0].center[0]
            const longitude = response.body.features[0].center[1]
            console.log(latitude, longitude);
            // callback(undefined,{
            //     latitude: response.body.features[0].center[0],
            //     longitude: response.body.features[0].center[1],
            //     location:response.body.features[0].place_name
            // })
        }

    })
}



module.exports =geocode