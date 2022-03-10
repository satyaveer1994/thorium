const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName:{
        type: String,
        required: true,
    },
    
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
   posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
