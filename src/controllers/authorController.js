// (1) ### Author APIs /authors
const authorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken");

const author = async function(req,res){
    try{
        let data =req.body;
        if (Object.keys(data).length != 0) {
            let savedData = await authorModel.create(data);
            res.status(201).send({ msg: savedData });
          }
          else {
            res.status(400).send({ msg: "BAD REQUEST" })
          }
    }catch(err){
    res.status(500).send({status:false ,Error:err});
}
}

const loginAuthor = async function (req, res) {
  let userName = req.body.email;
  let password = req.body.password;

  let user = await authorModel.findOne({ email:userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
    },
    "satyaveer-thorium"
  );
  res.setHeader("x-api-key", token);
  res.send({ status: true, data: token });
};


module.exports.author = author;
module.exports.loginAuthor=loginAuthor