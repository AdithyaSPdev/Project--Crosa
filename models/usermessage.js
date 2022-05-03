
const mongoose = require('mongoose');
const validator = require('validator');


//defining the user schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    email:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('This email is invalid ')
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
    },
    message:{
        type:String,
        required:true,
        minlength:3,
        maxlength:300
    },
    date:{
        type:Date,
        default:Date.now
    },
})

//making a collection 
const User = mongoose.model("User",userSchema)

module.exports  = User;