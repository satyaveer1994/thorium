const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const authorSchema = new mongoose.Schema({


    fristname:{type:String,required:true},

     lname: {type:String,required:true},
     title: {type:String, enum: ["Mr", "Mrs", "Miss"] },
        
     email: {type:String,
            required:true,
            unique:true,
            password: {required:true}}
     






}   , { timestamps: true }) 


module.exports = mongoose.model("Author", authorSchema);
