const express = require('express')
const path = require('path')
const webdata = require('./utils/weathercopy.js')
// const hitdata = require('./utils/weathercopy.js')
const publicpath = path.join(__dirname, '../httmmll')


const app = express()
app.use(express.static(publicpath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'amit',
        person: 'businessmen'
    })
})
app.get('/home', (req, res) => {
    res.sendFile(`${publicpath}/index.html`)
})

app.get('/products', (req, res) => {
    if (!req.query.serch) {
        return res.send({
            Error: 'you must provise a serch term'
        })
    }
    res.send({
        prodcut: [],
        serch: req.query.serch
    })
})

app.get('/data', (req, res) => {
    if (!req.query.address) {
        return res.send({
            Error: 'u must provide an address'
        })
    }

    webdata(req.query.address,(err,address)=>{
            if(err){
                return res.send(err)
            }
    
            res.send({      
                address,          
                add: req.query.address
            })
        })
    // webdata(req.query.address, (err,env) => {
    //     console.log('data',env);
    //     console.log('err',err);



    // if(err){
    //     return res.send(err)
    // }

    // res.send(
    //   data

    // )
})
// })

app.get('*', (req, res) => {
    res.send('this page not found')
})
app.listen(2000, () => {
    console.log('server is up on the browser 2000');
})