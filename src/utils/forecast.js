const request = require("request");

const forecast =(id,first_name,call)=>{

    const url = 'https://reqres.in/api/users?'+ encodeURIComponent(id) + ','+ encodeURIComponent(first_name) + 'page=2'

    request({url:url,json:true},(error,response)=>{
        if(error){
                // callback('unable to connect weather service',undefined)
                console.log('vokfmf',call);
        }else if(response.body.data==0){
                // callback('unable to get data',undefined)
                console.log('abcdefgh..........',call);
        }else{
            call(undefined,{
                  id :response.body.data[5].id,
                  fname:response.body.data[5].first_name,
                // console.log(id,fname);
         
            })
        }
            
    })
}

module.exports = forecast