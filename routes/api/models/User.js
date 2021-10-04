const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    avatar:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports=user = mongoose.model('user',UserSchema)

