const jwt = require("jsonwebtoken");
const blogsModel = require("../models/blogsModel");

const authenticate = function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token)
      return res
        .status(400)
        .send({ status: false, msg: "token must be present" });
    // this verify the token that token is correct or not
    let decodedToken = jwt.verify(token, "satyaveer-thorium");
    if (!decodedToken)
      return res.status(403).send({ status: false, msg: "token is invalid" });

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error.message });
  }
};

const authorise = async function (req, res, next) {
  // comapre the logged in user's id and the id in request
  try {
    let token = req.headers["x-api-key"];
    let blogId = req.params.blogId;
    let blogDetails = await blogsModel.findById(blogId);
    let authorId = blogDetails.authorId;
    let decodedToken = jwt.verify(token, "satyaveer-thorium");
    if (!decodedToken)
      return res.status(402).send({ status: false, msg: "token is invalid" });
    let decoded = decodedToken.userId;
    if (authorId != decoded)
      res.status(403).send({ status: false, msg: "anthentication denied" });
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: error.message });
  }
};

const authorise1 = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        let authodid = req.query.authorId
        let decodedToken = jwt.verify(token, "satyaveer-thorium");
        if (!decodedToken)
            return res.status(400).send({ status: false, msg: "token is invalid" });
        let decoded = decodedToken.userId
        if (authodid != decoded) res.status(401).send({ status: false, msg: "anthentication denied" })
        next()
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message });
    }
}
module.exports.authenticate = authenticate;
module.exports.authorise = authorise;
module.exports.authorise1 = authorise1
