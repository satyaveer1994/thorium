
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const isFreeApp = require("../middlewear/isfreeapp.js")
const orderController = require('../controllers/orderController')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createProduct", productController.createProduct)

router.post("/createUser",isFreeApp.mid1, UserController.createUser  )

router.post('/',isFreeApp.mid1, orderController.createPurchase )



//MOMENT JS
//const moment = require('moment');
//router.get("/dateManipulations", function (req, res) {

// const today = moment();
// let x= today.add(10, "days")

// let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
// console.log(validOrNot)

//const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//let x= dateB.diff(dateA, "days")
//console.log(x)

//res.send({ msg: "all good"})
//})

module.exports = router;
