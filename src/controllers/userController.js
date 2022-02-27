const bookSchema = require("../models/userModel");

//const createUser= async function (req, res) {
//    let data= req.body
//   let savedData= await UserModel.create(data)
//   res.send({msg: savedData})
//}

//const getUsersData= async function (req, res) {
//   let allUsers= await UserModel.find()
//  res.send({msg: allUsers})
//}
const bookSchema = async function (req, res) {
  let data = req.body
  let savedData = await bookSchema.create(data);
  res.send({ msg: saveData });
};

const bookSchemaList = async function (req, res) {
  let allBooks = await bookSchema.find();
  res.send({ msg: allBook });
};

module.exports.bookSchema = bookSchema;
module.exports.bookSchemaList = bookSchemaList;
