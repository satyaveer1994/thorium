
//const order = require('../models/orderModel')
const UserModel= require("../models/userModel")
const productModel= require("../models/productModel")
const userModel = require('../models/userModel')
const orderModel = require('../models/orderModel')

const createPurchase = async function(req,res){
    //const data = req.body
    const usersId = req.body.userId
    const productsId = req.body.productId
    if(!usersId) res.send('please provide userid')
    const userDetails = await UserModel.findById(usersId)
    if(!userDetails) res.send('No user exist with this id')
    if(!productsId) res.send('please provide product id')
    const productDetail = await productModel.findById(productsId)
    if(!productDetail) res.send('no product is found with these id')
    

    const saveIsFree = await userModel.findById(usersId)
    const checkingSubscribtion =saveIsFree.isFreeAppUser
    if(checkingSubscribtion==true){
     data.amount = 0
     data.isFreeAppUser=true

    }
    else{
        const amountofProduct = await productModel.findById(productsId)
        const takingPrice = amountofProduct.prices   // product price store here
        const u_balance = await userModel.findById(usersId)
        const balances = u_balance.balance     // user balance store here
        if(takingPrice>balances){
            res.send('insufficent amount')
        }
        else{
            data.amount = takingPrice
            await userModel.findByIdAndUpdate({_id:usersId},{$inc:{balance:-takingPrice}},{new:true})
        }
        const cleardata = await orderModel.create(data)
        res.send({orderList:data})

    }





    const savedData = await order.create(data)
    res.send({msg:savedData})

}


module.exports.createPurchase=createPurchase





// const { query } = require('express')

// const orderModel=require('../models/orderModel')
// const productModel=require('../models/productModel')
// const userModel=require('../models/userModel')



// const createOrders= async function(req, res) {
// let orders=req.body
// let userId=orders.userId
// let productId=orders.productId
// let FreeUser=req.header.isFreeAppUser
// FreeUser=orders.isFreeAppUser
// if(!FreeUser){
// return res.send("This field is mandatory")
// }

//  if(!userId) {
//     return res.send("required user field")
// }
// let user=await userModel.findById(userId)
//  if(!user) {
//     return res.send("Invalid user")
// }

// if(!productId) {
//     return res.send("required product field")
// }
// let product=await productModel.findById(productId)
//  if(!product) {
//     return res.send("Invalid product")
// }


 
// let productList=await productModel.findById(productId)
// let productPrice=productList.price
// console.log(productPrice)
// let userList=await userModel.findById(userId)
// let userBalance=userList.balance
// console.log(userBalance)

// if(FreeUser=="false"){

//   if(userBalance > productPrice){
//     let updatedOrders=await userModel.findByIdAndUpdate(
//         {_id:userId},
//         {$inc:{balance: -productPrice}},
//         {new:true})
//      console.log(updatedOrders)     
//     }

//  else if(orders.amount==productPrice){
//   let create=await orderModel.create(orders)
//   res.send({data:create})
// }
// else{
//     res.send("Insufficient balance")
// }
// }
// }
//     module.exports.createOrders=createOrders