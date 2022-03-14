const blogModel = require('../models/blogModel')




 const createBlog = async function (req, res){
     let reqBlog =req.body
     let  savedDatan = await blogModel.create(reqBlog)
     res.send ({msg: Saved})
 }





 module.exports.createBlog = createBlog