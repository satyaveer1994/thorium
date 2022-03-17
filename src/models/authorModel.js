const mongoose = require('mongoose');
//const validator = require("validator");
const authorSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        enum:["Mr", "Mrs", "Miss"]
    },
    email:{
        type:String,
        trim: true,
        required:true,
        lowercase: true,
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },        
    password:{
        type:String,
        required:true
    },
    
},{timestamps: true});


module.exports = mongoose.model('author',authorSchema)