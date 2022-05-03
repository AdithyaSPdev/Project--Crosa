//like importing express and creating app
const express = require('express');
const path = require ('path');
require('../db/conn');
const User = require('../models/usermessage')
const hbs  =require ('hbs');
const async = require('hbs/lib/async');
const { urlencoded } = require('express');
const app = express();
const port =process.env.PORT || 3000

//setting paths
const staticPath = path.join(__dirname,'../public')
const tempPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


//middle wares
app.set('view engine','hbs')
app.use(express.static(staticPath))
app.set('views',tempPath)
app.use(express.static("images"));
app.use(urlencoded({extended:false}))
hbs.registerPartials(partialsPath)

//routing
//creating pages
app.get('/',(req,res)=>{
res.render('index')
})
app.get('/submint',(req,res)=>{
res.render('submint')
})
app.post('/contact',async(req,res)=>{
    try {
        // res.send(req.body)
        const userData = new User(req.body);
        await userData.save()
        res.status(201).render('submint')
    } catch (error) {
        res.status(500).send(error)
    }
})

//creating a server
app.listen(port,()=>{
    console.log(`My server is running at http://localhost:3000/`);
})