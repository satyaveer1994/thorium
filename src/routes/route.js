const express = require('express');
const router = express.Router();
// const middlewares=require('../middlewares/commonMiddlewares')
// const handler=require('../controller/handler')


//router.get('/secondMiddleWare',commonMiddleware.mid2,controller.handler)
     
//MOMENT JS
const moment = require('moment');
router.get("/logged", function (req, res) {
    
    //const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;

