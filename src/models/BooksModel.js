
const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema(
    {
      name: String,
      author:String,
      price: Number,
      ratings: Number,
      publisher: String,
      
    },
  
   { timestamps: true }
  );