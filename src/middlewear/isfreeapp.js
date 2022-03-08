const express = require("express");
const router = express.Router();

const mid1 = function (req, res, next) {
  const data = req.headers.isfreeappuser;
  if (!data) {
    return res.send("the request is missing a mandatory header");
  } else {
    next();
  }

 
};

module.exports.mid1 = mid1;
