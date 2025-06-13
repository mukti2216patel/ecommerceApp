const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String , 
        required:true,
        trime:true
    },
    email:{
        type:String ,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        required:true,
        default:0
    }

} , {timestamps:true});

module.exports =  mongoose.model('userModel' , userSchema);