const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createUser = async function (req, res) {
    let userDetails = req.body
    // let appType = req.headers['isfreeapp']
    // let userType
    // if(appType === 'false') {
    //     userType = false
    // } else {
    //     userType = true
    // }
    
    userDetails.freeAppUser = req.isFreeAppUser//this attribute was set in req in the appMiddleware
    let userCreated = await userModel.create(userDetails)
    res.send({data: userCreated})
}


//For JWT session
const login = async function (req, res) {
    userName = req.body.name
    userPassword = req.body.password

    let user = await userModel.findOne({name: userName, password: userPassword, isDeleted: false})
    if(user) {
        const generatedToken = jwt.sign({userId: user._id}, "radium")
        res.send({status: true, data: user._id, token: generatedToken})
    } else {
        res.send({status: false, message: 'Invalid credentials'})
    }
}

//For JWT session
const getDetails = async function (req, res) {
    let token = req.headers['x-auth-token']
    if(!token) {
        return res.send({status: false, message: 'No authentication token present'})
    } else {
        let decodedToken = jwt.verify(token, 'titanium')
        if(decodedToken) {
            let userDetails = await userModel.findOne({_id: req.params.userId, isDeleted: false})
            if(userDetails) {
                res.send({status: true, data: userDetails})
            } else {
                res.send({status: false, message: 'User not found'})
            }

        } else {
            res.send({status: false, message: 'Token not valid'})
        }
    }
}

module.exports.createUser = createUser
module.exports.getDetails = getDetails
module.exports.login = login