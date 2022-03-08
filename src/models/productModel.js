const mongoose = require("mongoose");

//-Your product document should look like this
const productSchema = new mongoose.Schema({
  
    name: String,
    category: String,
    price: {
      type: Number,
      required: true, //mandatory property
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);





