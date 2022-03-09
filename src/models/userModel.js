const mongoose = require('mongoose');


const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
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
    isDeleted: {
        type:Boolean,
        default:false}, //default value is false 
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)






// "firstName" : "Sabiha",
//     "lastName" : "Khan",
//     "mobile" : "9898909087",
//     "emailId" : "sk@gmail.com",
//     "password" : "password123",
//     "gender" : "female",
// 	"isDeleted": false, //default value is false 
//     "age" 





















module.exports = mongoose.model('User', userSchema)
