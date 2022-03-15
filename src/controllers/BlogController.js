const blogModel = require("../models/blogModel")
const authorModel = require("../models/authorModel")

const createBlog = async function (req, res) {
    try {
        const data = req.body
        const id = req.body.authorId

        if (!Object.keys(data).length > 0) return res.send({ error: "Please enter data" })

        const findAuthor = await authorModel.find({ _id: id })

        if (!findAuthor.length > 0) return res.status(400).send("error : Please enter valid authorId")

        const createdBlog = await blogModel.create(data)
        res.status(201).send({ Blog: createdBlog })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const getBlogs = async function( req , res ) {
    try{
        const data = req.query
        if(!data)  return res.status(400).send({error : "Enter some data to compare"})

        const blogs = await blogModel.find(data, { isDeleted : false } , {isPublished : true} ).populate("authorId")

        if( !blogs )   return res.status(404).send({error : "No such data found"})

        res.status(200).send({data : blogs})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


const updateBlog= async function (req, res) {
    try {
    let data = req.body
    const id = req.params.blogId
    
    if( !id )  return res.status(400).send({error : " Please enter id in Params"})
    if ( !data )  return res.status(400).send({ error : "Enter some data to update"})     

    const updatedData = await blogModel.updateMany( { _id : id } , { $set : data} , { new : true})

    if( !updatedData )  return res.status(404).send({error : "No such data found "})
    res.status(200).send( { msg: updatedData})
    }
    catch(error) {
        res.status(500).send(error.message)
    }
}



const deleteBlogByPath = async function (req, res) {
    try {
        let blogId = req.params.blogId;

        if (!blogId) return res.status(400).send({ error: "blogId should be present in params" });
        let blog = await blogModel.findById(blogId);

        if (!blog) {
            return res.status(404).send("No such blog exists");
        }
        let deletedBlog = await blogModel.findOneAndUpdate({ _id: blogId }, { isDeleted: true }, { new: true });
        res.send({ status: "Deleted", data: deletedBlog });

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



const deleteBlogByQuery = async function (req, res) {
    try {
        const data = req.query
        console.log(data)

        if (!data) return res.status(400).send({ error: "Please enter some data to campare" })

        const result = await blogModel.updateMany(data, { $set: { isDeleted: false } }, { new: true })

        if (!result) res.status(404).send({ error: " No data found" })

        res.status(200).send({ data: result })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.createBlog = createBlog
module.exports.deleteBlogByQuery = deleteBlogByQuery
module.exports.deleteBlogByPath = deleteBlogByPath
module.exports.updateBlog = updateBlog
module.exports.getBlogs = getBlogs