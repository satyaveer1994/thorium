const blogModel = require('../models/blogModel')




 const createBlog = async function (req, res){


    try{
     let reqBlog =req.body
     let  savedData = await blogModel.create(reqBlog)
     res.send ({msg: Saved})

    }

    catch(error){

        res.status(500).send(error.message)

    }
 }





 module.exports.createBlog = createBlog