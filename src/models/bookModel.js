//const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String,
//     authorName: String,
//     tags: [String],

//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      unique: true,
    },
    prices: {
      indianPrice: String,
      europeanPrice: String,
    },
    year: {
      type: Number,
      default: 2021,
    },
    tags: [String],

    authorName: {
      type: String,
      required: true,
      unique: true,
    },
    totalPages: Number,
    stockAvailable: Boolean,
    default: false,
  },

  { timestamps: true }
);
module.exports = mongoose.model("Book", bookSchema); //users
// mixed type in mongoose schema
// - Date and moment module : https://www.sitepoint.com/managing-dates-times-using-moment-js/
// - findOne vs find
// - CRUD in mongo
//     - esp updateMany and findOneAndUpdate     - new flag in update operations
//     - upsert flag in update operations
// - isDeleted key in mongoose schema

//Validation:
//require:true
//unique
// default

//String

//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
