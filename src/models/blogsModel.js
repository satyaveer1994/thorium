const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        required:true,
        type:ObjectId,
        ref:"author"
    },
    tags:[String],
    category:{
        type : String,
        require : true
    },

    subcategory : ["String"], 
    isDeleted:{type:Boolean,
    default:false
    },
    deletedAt:{
        type: Date,
          default: Date.now
    },
    publishedAt:{
        type: Date,
          default: Date.now
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    

},{timestamps:true}) 
module.exports = mongoose.model('blog', blogsSchema);