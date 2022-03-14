const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema({


     title: {type:String},
      body: {type:String}, 
     authorId: {type:ObjectId,ref:"Author",required:true},

     tags:[],

     category:{type:String,enum:["tehnology","entertainment","lifeStyle","food"]},
     subcategory:{type:String,enum:["web","mobile","crypto"]},

     isPublished:{type:Boolean,default:false},

     isDeleted:{type:Boolean,default:false},


     createdAt:{timestamps:true},
     deletedAt:{timestamps:true},
     publishedAt:{timestamps:true},

     

     

     
     








})