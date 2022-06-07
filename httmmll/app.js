const weatherform = document.querySelector('form')
const serch = document.querySelector('input')
const msgone = document.querySelector('#msgone')
const msgtwo = document.querySelector('#msgtwo')
const msg3 = document.querySelector('#msg3')
const msg4 = document.querySelector('#msg4')
const msg5 = document.querySelector('#msg5')
const msg6 = document.querySelector('#msg6')
const msg7 = document.querySelector('#msg7')

weatherform.addEventListener('submit',(e)=>{
        e.preventDefault()
        
        const location = serch.value
        // console.log(lac);

        msgone.textContent = 'loading...'
        msgtwo.textContent = ''
        msg3.textContent = ''
        msg4.textContent = ''
        msg5.textContent = ''
        msg6.textContent = ''
        msg7.textContent = ''

        // console.log(msgone.textContent);

        fetch('http://localhost:2000/data?address='+location ).then((response)=>{
                response.json().then((body)=>{
                        if(body.err){
                                    msgone.textContent =data.err
                                // console.log(body.err);
                        }else
                        //     msgone.textContent =body.address.temp
                            msgone.textContent =body.address.weather
                            msgtwo.textContent =body.address.wind_speed
                            msg3.textContent =body.address.cloud_condition
                            msg4.textContent =body.address.maxtemp_c
                            msg5.textContent =body.address.env.region
                            msg6.textContent =body.address.env.country
                            msg7.textContent =body.address.env.localtime
                         
                        //  console.log(body.address.env);
                        })
                })
                // console.log('testing');
        })