const mongoose = require('mongoose');

//creating a database 
mongoose.connect('mongodb://localhost:27017/corsa',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection is successful');
}).catch((error)=>{
    console.log(error);
})