let obj = require('./logger')
let obja = require('../logger/logger.js')
let objb =require('../util/helper')
let objc =require('../validator/formatter.js')
const express = require('express');


const router = express.Router();

router.get('/test-me', function (req, res) {
    obj.printMessage('thorium')
    
    console.log(obj.url)
    obja.welcome('welcome')
objb.helper('helper')
objc.trim()
objc.convert()
    (res.send('welcome to my frist application')
    )});
router.get('/bye',function(req,res){
    res.send('hello there hi')
})
module.exports = router;