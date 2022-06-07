const { response } = require('express')
const request = require('request')


const weather = (address,callback)=>{

    const url = 'https://api.weatherapi.com/v1/forecast.json?key=09d96df969084d08a9331934221905&q='+encodeURIComponent(address)+'&days=5&aqi=yes&alerts=yes'
    
request({url:url,json:true},(error,response)=>{

    if(error){
        // Error:"unable to connect weather services"
        // console.log('xxxxxx');
        callback('unable to connect weather service',undefined);

    }
    else if(response.body.loaction==0){
        // Error:'unable to find location try another serch'
        // console.log('yyyyyyyyyyyyyyy');
        callback('unable to find location,try another serch',undefined);

    }
    else{
        const data = response.body.current.condition.text
        // const longitude = response.body.features[0].center[1]
        console.log(data);
    }
})
}

weather('Austrlia',(error,data)=>{
    console.log('error', error);
    console.log('data', data);
})