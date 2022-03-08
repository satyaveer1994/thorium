
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body

    let changeValue=req.headers.isfreeappuser
    let myBool = (changeValue.toLowerCase() === 'true');
    req.body.isFreeAppUser = myBool
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    console.log(req.newAtribute)
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
